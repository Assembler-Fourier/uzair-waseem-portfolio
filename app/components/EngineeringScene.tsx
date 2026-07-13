"use client";

import { useEffect, useRef } from "react";

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

    let cancelled = false;
    let teardown = () => undefined;

    const boot = async () => {
      const THREE = await import("three");
      if (cancelled) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
      const root = new THREE.Group();
      const geometries = new Set<import("three").BufferGeometry>();
      const materials = new Set<import("three").Material>();
      const dummy = new THREE.Object3D();
      let renderer: import("three").WebGLRenderer;
      let frame = 0;
      let inView = true;
      let lastPaint = 0;
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
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, window.innerWidth < 760 ? 1 : 1.2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.setAttribute("aria-hidden", "true");
      renderer.domElement.dataset.frame = "0";
      renderer.domElement.dataset.renderState = "initializing";
      renderer.domElement.dataset.scene = "hero-topology";
      container.appendChild(renderer.domElement);

      scene.add(root);
      camera.position.set(0, 0.25, 12.5);

      const nodeRecords: Array<{
        color: number;
        phase: number;
        position: import("three").Vector3;
      }> = [];
      const layers: import("three").Vector3[][] = layerBlueprints.map((layer, layerIndex) =>
        layer.y.map((y, nodeIndex) => {
          const position = new THREE.Vector3(
            layer.x,
            y,
            ((layerIndex + nodeIndex) % 3 - 1) * 0.42
          );
          nodeRecords.push({
            color: layer.color,
            phase: layerIndex * 0.9 + nodeIndex * 0.65,
            position
          });
          return position;
        })
      );

      const nodeGeometry = new THREE.OctahedronGeometry(0.2, 0);
      const nodeMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.9,
        transparent: true,
        vertexColors: true,
        wireframe: true
      });
      const nodes = new THREE.InstancedMesh(nodeGeometry, nodeMaterial, nodeRecords.length);
      nodes.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      nodeRecords.forEach((record, index) => {
        dummy.position.copy(record.position);
        dummy.updateMatrix();
        nodes.setMatrixAt(index, dummy.matrix);
        nodes.setColorAt(index, new THREE.Color(record.color));
      });
      nodes.instanceColor!.needsUpdate = true;
      geometries.add(nodeGeometry);
      materials.add(nodeMaterial);
      root.add(nodes);

      const connections: Array<{
        color: number;
        end: import("three").Vector3;
        start: import("three").Vector3;
      }> = [];
      for (let layerIndex = 0; layerIndex < layers.length - 1; layerIndex += 1) {
        for (const start of layers[layerIndex]) {
          const nearest = [...layers[layerIndex + 1]]
            .sort((a, b) => Math.abs(start.y - a.y) - Math.abs(start.y - b.y))
            .slice(0, 2);
          nearest.forEach((end) => {
            connections.push({
              start,
              end,
              color: layerBlueprints[layerIndex + 1].color
            });
          });
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
        opacity: 0.25,
        transparent: true
      });
      geometries.add(lineGeometry);
      materials.add(lineMaterial);
      root.add(new THREE.LineSegments(lineGeometry, lineMaterial));

      const packetRecords = connections.filter((_, index) => index % 2 === 0);
      const packetGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
      const packetMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.95,
        transparent: true,
        vertexColors: true
      });
      const packets = new THREE.InstancedMesh(packetGeometry, packetMaterial, packetRecords.length);
      packets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      packetRecords.forEach((record, index) => {
        packets.setColorAt(index, new THREE.Color(record.color));
      });
      packets.instanceColor!.needsUpdate = true;
      geometries.add(packetGeometry);
      materials.add(packetMaterial);
      root.add(packets);

      const servicePositions = [layers[1][0], layers[1][2]];
      const serviceGeometry = new THREE.BoxGeometry(1.24, 0.86, 0.66);
      const serviceMaterial = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        opacity: 0.15,
        transparent: true,
        wireframe: true
      });
      const services = new THREE.InstancedMesh(serviceGeometry, serviceMaterial, servicePositions.length);
      servicePositions.forEach((position, index) => {
        dummy.position.copy(position);
        dummy.rotation.y = index * 0.16 - 0.08;
        dummy.updateMatrix();
        services.setMatrixAt(index, dummy.matrix);
      });
      geometries.add(serviceGeometry);
      materials.add(serviceMaterial);
      root.add(services);

      const coreGeometry = new THREE.IcosahedronGeometry(0.78, 1);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x4ade80,
        opacity: 0.4,
        transparent: true,
        wireframe: true
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.position.set(4.55, 0, 0.22);
      geometries.add(coreGeometry);
      materials.add(coreMaterial);
      root.add(core);

      const scanGeometry = new THREE.PlaneGeometry(9.5, 0.014);
      const scanMaterial = new THREE.MeshBasicMaterial({
        color: 0x86efac,
        opacity: 0.26,
        side: THREE.DoubleSide,
        transparent: true
      });
      const scan = new THREE.Mesh(scanGeometry, scanMaterial);
      scan.position.z = 0.85;
      geometries.add(scanGeometry);
      materials.add(scanMaterial);
      root.add(scan);

      const floor = new THREE.GridHelper(18, 24, 0x2dd4bf, 0x203040);
      floor.position.set(0, -3.05, 0);
      geometries.add(floor.geometry);
      const floorMaterials = Array.isArray(floor.material) ? floor.material : [floor.material];
      floorMaterials.forEach((material) => {
        material.opacity = 0.13;
        material.transparent = true;
        materials.add(material);
      });
      root.add(floor);

      root.position.x = 2.7;
      root.rotation.set(-0.08, -0.16, 0.025);
      root.scale.setScalar(0.88);
      renderer.domElement.dataset.nodeCount = String(nodeRecords.length);

      const verifyPixels = () => {
        if (pixelVerified) return;
        pixelVerified = true;
        const gl = renderer.getContext();
        const size = renderer.getDrawingBufferSize(new THREE.Vector2());
        const x = Math.floor(size.x * 0.42);
        const y = Math.floor(size.y * 0.08);
        const width = Math.max(1, Math.floor(size.x * 0.55));
        const height = Math.max(1, Math.floor(size.y * 0.84));
        const pixels = new Uint8Array(width * height * 4);
        gl.readPixels(x, y, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels);

        let signal = 0;
        for (let index = 3; index < pixels.length; index += 40) {
          if (pixels[index] > 0) signal += 1;
        }
        renderer.domElement.dataset.pixelSignal = String(signal);
        renderer.domElement.dataset.renderState = signal > 0 ? "ready" : "blank";
        container.dataset.renderState = renderer.domElement.dataset.renderState;
      };

      const render = (time = 0, force = false) => {
        if (!force && time - lastPaint < 32) return;
        lastPaint = time;
        const seconds = time * 0.001;
        root.rotation.y = -0.16 + Math.sin(seconds * 0.22) * 0.025 + pointerX * 0.055;
        root.rotation.x = -0.08 + pointerY * 0.035;
        core.rotation.x = seconds * 0.28;
        core.rotation.y = seconds * 0.38;
        scan.position.y = Math.sin(seconds * 0.68) * 2.35;

        nodeRecords.forEach((record, index) => {
          dummy.position.copy(record.position);
          dummy.rotation.set(seconds * 0.08 + index * 0.12, seconds * 0.12 + index * 0.18, 0);
          dummy.scale.setScalar(1 + Math.sin(seconds * 1.3 + record.phase) * 0.09);
          dummy.updateMatrix();
          nodes.setMatrixAt(index, dummy.matrix);
        });
        nodes.instanceMatrix.needsUpdate = true;

        packetRecords.forEach((record, index) => {
          const progress = (time * (0.00005 + (index % 4) * 0.000008) + index * 0.137) % 1;
          dummy.position.lerpVectors(record.start, record.end, progress);
          dummy.rotation.set(seconds * 0.9 + index, seconds * 1.1 + index * 0.4, 0);
          dummy.scale.setScalar(index % 3 === 0 ? 1.25 : 0.9);
          dummy.updateMatrix();
          packets.setMatrixAt(index, dummy.matrix);
        });
        packets.instanceMatrix.needsUpdate = true;

        renderer.render(scene, camera);
        frame += 1;
        if (!pixelVerified) verifyPixels();
        if (frame % 8 === 0) {
          renderer.domElement.dataset.frame = String(frame);
          renderer.domElement.dataset.drawCalls = String(renderer.info.render.calls);
          renderer.domElement.dataset.instances = String(
            nodeRecords.length + packetRecords.length + servicePositions.length
          );
        }
      };

      const resize = () => {
        const { height, width } = container.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 760 ? 1 : 1.2));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        const compact = width < 760;
        root.position.x = compact ? 0.7 : 2.7;
        root.scale.setScalar(compact ? 0.68 : 0.88);
        camera.position.z = compact ? 13.6 : 12.5;
        pixelVerified = false;
        render(performance.now(), true);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (!inView) return;
        pointerX = event.clientX / window.innerWidth - 0.5;
        pointerY = event.clientY / window.innerHeight - 0.5;
        renderer.domElement.dataset.pointerX = pointerX.toFixed(3);
        renderer.domElement.dataset.pointerY = pointerY.toFixed(3);
      };

      const syncAnimation = () => {
        const shouldAnimate = inView && !reducedMotion.matches && !document.hidden;
        renderer.setAnimationLoop(shouldAnimate ? (time) => render(time) : null);
        if (!shouldAnimate) render(performance.now(), true);
      };

      const activeObserver = new IntersectionObserver(
        ([entry]) => {
          inView = entry.isIntersecting && entry.intersectionRatio > 0.05;
          renderer.domElement.dataset.inView = String(inView);
          syncAnimation();
        },
        { threshold: [0, 0.05, 0.18] }
      );
      const resizeObserver = new ResizeObserver(resize);
      activeObserver.observe(container);
      resizeObserver.observe(container);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", syncAnimation);
      reducedMotion.addEventListener("change", syncAnimation);
      resize();
      syncAnimation();

      teardown = () => {
        renderer.setAnimationLoop(null);
        activeObserver.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", syncAnimation);
        reducedMotion.removeEventListener("change", syncAnimation);
        nodes.dispose();
        packets.dispose();
        services.dispose();
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    void boot();

    return () => {
      cancelled = true;
      teardown();
    };
  }, []);

  return <div className="engineering-scene" ref={containerRef} aria-hidden="true" />;
}
