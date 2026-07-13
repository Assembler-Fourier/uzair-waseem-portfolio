"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type PacketPath = {
  end: THREE.Vector3;
  mesh: THREE.Mesh;
  phase: number;
  speed: number;
  start: THREE.Vector3;
};

const layerBlueprints = [
  { color: 0x38bdf8, x: -4.7, y: [1.7, 0, -1.7] },
  { color: 0x2dd4bf, x: -1.7, y: [2.2, 0.72, -0.72, -2.2] },
  { color: 0xfacc15, x: 1.45, y: [1.55, 0, -1.55] },
  { color: 0x4ade80, x: 4.55, y: [1.85, 0.62, -0.62, -1.85] }
];

export default function EngineeringScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    const root = new THREE.Group();
    const nodeMeshes: THREE.Mesh[] = [];
    const packetPaths: PacketPath[] = [];
    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    let renderer: THREE.WebGLRenderer;
    let frame = 0;
    let pixelVerified = false;
    let pointerX = 0;
    let pointerY = 0;

    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "high-performance"
      });
    } catch {
      container.dataset.renderState = "unsupported";
      return;
    }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.setAttribute("aria-hidden", "true");
    renderer.domElement.dataset.frame = "0";
    renderer.domElement.dataset.nodeCount = "0";
    renderer.domElement.dataset.renderState = "initializing";
    container.appendChild(renderer.domElement);

    scene.add(root);
    camera.position.set(0, 0.25, 12.5);

    const layers: THREE.Vector3[][] = layerBlueprints.map((layer, layerIndex) => {
      const nodeGeometry = new THREE.OctahedronGeometry(0.18, 0);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: layer.color,
        opacity: 0.9,
        transparent: true,
        wireframe: true
      });
      geometries.add(nodeGeometry);
      materials.add(nodeMaterial);

      return layer.y.map((y, nodeIndex) => {
        const position = new THREE.Vector3(
          layer.x,
          y,
          ((layerIndex + nodeIndex) % 3 - 1) * 0.42
        );
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.copy(position);
        node.rotation.set(layerIndex * 0.18, nodeIndex * 0.32, 0);
        node.userData.phase = layerIndex * 0.9 + nodeIndex * 0.65;
        nodeMeshes.push(node);
        root.add(node);
        return position;
      });
    });

    const connections: Array<{ end: THREE.Vector3; start: THREE.Vector3; color: number }> = [];
    for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
      for (const start of layers[layerIndex]) {
        const nearest = [...layers[layerIndex + 1]]
          .sort((a, b) => Math.abs(start.y - a.y) - Math.abs(start.y - b.y))
          .slice(0, 2);

        for (const end of nearest) {
          connections.push({
            start,
            end,
            color: layerBlueprints[layerIndex + 1].color
          });
        }
      }
    }

    const linePositions = new Float32Array(connections.length * 6);
    connections.forEach(({ end, start }, index) => {
      linePositions.set([start.x, start.y, start.z, end.x, end.y, end.z], index * 6);
    });
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x5eead4,
      opacity: 0.22,
      transparent: true
    });
    geometries.add(lineGeometry);
    materials.add(lineMaterial);
    root.add(new THREE.LineSegments(lineGeometry, lineMaterial));

    const packetGeometry = new THREE.BoxGeometry(0.095, 0.095, 0.095);
    geometries.add(packetGeometry);
    connections.forEach(({ color, end, start }, index) => {
      if (index % 2 !== 0) return;
      const packetMaterial = new THREE.MeshBasicMaterial({
        color,
        opacity: 0.9,
        transparent: true
      });
      const packet = new THREE.Mesh(packetGeometry, packetMaterial);
      materials.add(packetMaterial);
      root.add(packet);
      packetPaths.push({
        start,
        end,
        mesh: packet,
        phase: (index * 0.137) % 1,
        speed: 0.000055 + (index % 4) * 0.000009
      });
    });

    const serviceGeometry = new THREE.BoxGeometry(1.24, 0.86, 0.66);
    const serviceEdges = new THREE.EdgesGeometry(serviceGeometry);
    const serviceMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      opacity: 0.16,
      transparent: true
    });
    geometries.add(serviceGeometry);
    geometries.add(serviceEdges);
    materials.add(serviceMaterial);
    layers[1].forEach((position, index) => {
      if (index % 2 !== 0) return;
      const frameBox = new THREE.LineSegments(serviceEdges, serviceMaterial);
      frameBox.position.copy(position);
      frameBox.rotation.y = index * 0.08 - 0.08;
      root.add(frameBox);
    });

    const floor = new THREE.GridHelper(18, 24, 0x2dd4bf, 0x203040);
    geometries.add(floor.geometry);
    const floorMaterials = Array.isArray(floor.material) ? floor.material : [floor.material];
    floorMaterials.forEach((material) => {
      material.opacity = 0.13;
      material.transparent = true;
      materials.add(material);
    });
    floor.position.set(0, -3.05, 0);
    root.add(floor);

    root.position.x = 2.7;
    root.rotation.set(-0.08, -0.16, 0.025);
    root.scale.setScalar(0.88);
    renderer.domElement.dataset.nodeCount = String(nodeMeshes.length);

    const verifyPixels = () => {
      if (pixelVerified) return;
      pixelVerified = true;
      const gl = renderer.getContext();
      const drawingSize = renderer.getDrawingBufferSize(new THREE.Vector2());
      const x = Math.floor(drawingSize.x * 0.42);
      const y = Math.floor(drawingSize.y * 0.08);
      const width = Math.max(1, Math.floor(drawingSize.x * 0.55));
      const height = Math.max(1, Math.floor(drawingSize.y * 0.84));
      const pixels = new Uint8Array(width * height * 4);
      gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

      let signal = 0;
      for (let index = 3; index < pixels.length; index += 32) {
        if (pixels[index] > 0) signal += 1;
      }
      renderer.domElement.dataset.pixelSignal = String(signal);
      renderer.domElement.dataset.renderState = signal > 0 ? "ready" : "blank";
      container.dataset.renderState = renderer.domElement.dataset.renderState;
    };

    const render = (time = 0) => {
      const seconds = time * 0.001;
      root.rotation.y = -0.16 + Math.sin(seconds * 0.22) * 0.025 + pointerX * 0.055;
      root.rotation.x = -0.08 + pointerY * 0.035;

      nodeMeshes.forEach((node) => {
        const pulse = 1 + Math.sin(seconds * 1.3 + Number(node.userData.phase)) * 0.08;
        node.scale.setScalar(pulse);
        node.rotation.x += 0.0016;
        node.rotation.y += 0.0022;
      });

      packetPaths.forEach((path, index) => {
        const progress = (time * path.speed + path.phase) % 1;
        path.mesh.position.lerpVectors(path.start, path.end, progress);
        path.mesh.rotation.x = seconds * 0.9 + index;
        path.mesh.rotation.y = seconds * 1.1 + index * 0.4;
      });

      renderer.render(scene, camera);
      frame += 1;
      if (!pixelVerified) verifyPixels();
      if (frame % 8 === 0) renderer.domElement.dataset.frame = String(frame);
    };

    const resize = () => {
      const { height, width } = container.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      const compact = width < 760;
      root.position.x = compact ? 0.7 : 2.7;
      root.scale.setScalar(compact ? 0.68 : 0.88);
      camera.position.z = compact ? 13.6 : 12.5;
      pixelVerified = false;
      render(performance.now());
    };

    const onPointerMove = (event: PointerEvent) => {
      pointerX = event.clientX / window.innerWidth - 0.5;
      pointerY = event.clientY / window.innerHeight - 0.5;
      renderer.domElement.dataset.pointerX = pointerX.toFixed(3);
      renderer.domElement.dataset.pointerY = pointerY.toFixed(3);
    };

    const syncAnimation = () => {
      const shouldAnimate = !reducedMotion.matches && !document.hidden;
      renderer.setAnimationLoop(shouldAnimate ? render : null);
      if (!shouldAnimate) render(performance.now());
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("visibilitychange", syncAnimation);
    reducedMotion.addEventListener("change", syncAnimation);
    resize();
    syncAnimation();

    return () => {
      renderer.setAnimationLoop(null);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("visibilitychange", syncAnimation);
      reducedMotion.removeEventListener("change", syncAnimation);
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return <div className="engineering-scene" ref={containerRef} aria-hidden="true" />;
}
