"use client";

import { useEffect, useRef } from "react";

export default function DeliverySystemScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;
    let teardown = () => undefined;
    let booted = false;

    const boot = async () => {
      if (booted) return;
      booted = true;

      const THREE = await import("three");
      if (cancelled) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
      const root = new THREE.Group();
      const geometries = new Set<import("three").BufferGeometry>();
      const materials = new Set<import("three").Material>();
      const dummy = new THREE.Object3D();
      const point = new THREE.Vector3();
      const tangent = new THREE.Vector3();
      let renderer: import("three").WebGLRenderer;
      let frame = 0;
      let inView = false;
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
      renderer.domElement.dataset.scene = "delivery-system";
      container.appendChild(renderer.domElement);

      scene.add(root);
      camera.position.set(0, 0.35, 13.2);

      const gatePositions = [
        new THREE.Vector3(-4.3, -0.05, 0.55),
        new THREE.Vector3(-2.2, 0.12, -0.42),
        new THREE.Vector3(0, 0, 0.6),
        new THREE.Vector3(2.2, -0.1, -0.35),
        new THREE.Vector3(4.3, 0.05, 0.45)
      ];
      const gateColors = [0x38bdf8, 0x2dd4bf, 0xfacc15, 0x4ade80, 0x38bdf8];
      const gateGeometry = new THREE.BoxGeometry(0.76, 2.8, 0.76, 1, 1, 1);
      const gateMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.34,
        transparent: true,
        vertexColors: true,
        wireframe: true
      });
      const gates = new THREE.InstancedMesh(gateGeometry, gateMaterial, gatePositions.length);
      gates.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      gatePositions.forEach((position, index) => {
        dummy.position.copy(position);
        dummy.updateMatrix();
        gates.setMatrixAt(index, dummy.matrix);
        gates.setColorAt(index, new THREE.Color(gateColors[index]));
      });
      gates.instanceColor!.needsUpdate = true;
      geometries.add(gateGeometry);
      materials.add(gateMaterial);
      root.add(gates);

      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-5.4, -0.7, 0.15),
        new THREE.Vector3(-4.3, -0.05, 0.55),
        new THREE.Vector3(-2.2, 0.12, -0.42),
        new THREE.Vector3(0, 0, 0.6),
        new THREE.Vector3(2.2, -0.1, -0.35),
        new THREE.Vector3(4.3, 0.05, 0.45),
        new THREE.Vector3(5.4, 0.72, -0.1)
      ]);

      const ribbonGeometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(120));
      const ribbonMaterial = new THREE.LineBasicMaterial({
        color: 0x5eead4,
        opacity: 0.48,
        transparent: true
      });
      const ribbon = new THREE.Line(ribbonGeometry, ribbonMaterial);
      geometries.add(ribbonGeometry);
      materials.add(ribbonMaterial);
      root.add(ribbon);

      const lowerCurve = new THREE.CatmullRomCurve3(
        curve.points.map((curvePoint) => curvePoint.clone().add(new THREE.Vector3(0, -0.22, -0.18)))
      );
      const lowerRibbonGeometry = new THREE.BufferGeometry().setFromPoints(lowerCurve.getPoints(120));
      const lowerRibbonMaterial = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        opacity: 0.2,
        transparent: true
      });
      geometries.add(lowerRibbonGeometry);
      materials.add(lowerRibbonMaterial);
      root.add(new THREE.Line(lowerRibbonGeometry, lowerRibbonMaterial));

      const packetCount = 14;
      const packetGeometry = new THREE.BoxGeometry(0.11, 0.11, 0.11);
      const packetMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        opacity: 0.95,
        transparent: true,
        vertexColors: true
      });
      const packets = new THREE.InstancedMesh(packetGeometry, packetMaterial, packetCount);
      packets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      for (let index = 0; index < packetCount; index += 1) {
        packets.setColorAt(index, new THREE.Color(gateColors[index % gateColors.length]));
      }
      packets.instanceColor!.needsUpdate = true;
      geometries.add(packetGeometry);
      materials.add(packetMaterial);
      root.add(packets);

      const satellitePositions = Array.from({ length: 18 }, (_, index) => {
        const side = index % 2 === 0 ? 1 : -1;
        return new THREE.Vector3(
          -4.7 + (index % 9) * 1.18,
          side * (2.05 + (index % 3) * 0.34),
          ((index * 7) % 5 - 2) * 0.38
        );
      });
      const satelliteGeometry = new THREE.TetrahedronGeometry(0.14, 0);
      const satelliteMaterial = new THREE.MeshBasicMaterial({
        color: 0x5eead4,
        opacity: 0.44,
        transparent: true,
        wireframe: true
      });
      const satellites = new THREE.InstancedMesh(
        satelliteGeometry,
        satelliteMaterial,
        satellitePositions.length
      );
      satellites.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      geometries.add(satelliteGeometry);
      materials.add(satelliteMaterial);
      root.add(satellites);

      const branchValues: number[] = [];
      satellitePositions.forEach((position, index) => {
        const gate = gatePositions[index % gatePositions.length];
        branchValues.push(gate.x, gate.y, gate.z, position.x, position.y, position.z);
      });
      const branchGeometry = new THREE.BufferGeometry();
      branchGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(new Float32Array(branchValues), 3)
      );
      const branchMaterial = new THREE.LineBasicMaterial({
        color: 0x38bdf8,
        opacity: 0.13,
        transparent: true
      });
      geometries.add(branchGeometry);
      materials.add(branchMaterial);
      root.add(new THREE.LineSegments(branchGeometry, branchMaterial));

      const coreGeometry = new THREE.DodecahedronGeometry(1.04, 0);
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: 0x2dd4bf,
        opacity: 0.72,
        transparent: true,
        wireframe: true
      });
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.position.z = 0.72;
      geometries.add(coreGeometry);
      materials.add(coreMaterial);
      root.add(core);

      const coreFrameSource = new THREE.BoxGeometry(2.45, 2.45, 2.45);
      const coreFrameGeometry = new THREE.EdgesGeometry(coreFrameSource);
      const coreFrameMaterial = new THREE.LineBasicMaterial({
        color: 0xfacc15,
        opacity: 0.2,
        transparent: true
      });
      const coreFrame = new THREE.LineSegments(coreFrameGeometry, coreFrameMaterial);
      coreFrame.position.z = 0.45;
      geometries.add(coreFrameSource);
      geometries.add(coreFrameGeometry);
      materials.add(coreFrameMaterial);
      root.add(coreFrame);

      const scanGeometry = new THREE.PlaneGeometry(9.8, 0.018);
      const scanMaterial = new THREE.MeshBasicMaterial({
        color: 0x86efac,
        opacity: 0.32,
        side: THREE.DoubleSide,
        transparent: true
      });
      const scan = new THREE.Mesh(scanGeometry, scanMaterial);
      scan.position.z = 1.15;
      geometries.add(scanGeometry);
      materials.add(scanMaterial);
      root.add(scan);

      const floor = new THREE.GridHelper(18, 30, 0x2dd4bf, 0x1f3442);
      floor.position.y = -3.25;
      geometries.add(floor.geometry);
      const floorMaterials = Array.isArray(floor.material) ? floor.material : [floor.material];
      floorMaterials.forEach((material) => {
        material.opacity = 0.12;
        material.transparent = true;
        materials.add(material);
      });
      root.add(floor);
      root.rotation.set(-0.06, -0.05, 0);

      const verifyPixels = () => {
        if (pixelVerified) return;
        pixelVerified = true;
        const gl = renderer.getContext();
        const size = renderer.getDrawingBufferSize(new THREE.Vector2());
        const x = Math.floor(size.x * 0.18);
        const y = Math.floor(size.y * 0.12);
        const width = Math.max(1, Math.floor(size.x * 0.64));
        const height = Math.max(1, Math.floor(size.y * 0.76));
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

        root.rotation.y = -0.05 + pointerX * 0.07 + Math.sin(seconds * 0.18) * 0.025;
        root.rotation.x = -0.06 + pointerY * 0.035;
        core.rotation.x = seconds * 0.24;
        core.rotation.y = seconds * 0.34;
        coreFrame.rotation.x = -seconds * 0.08;
        coreFrame.rotation.y = seconds * 0.12;
        scan.position.y = Math.sin(seconds * 0.72) * 2.35;

        gatePositions.forEach((position, index) => {
          dummy.position.copy(position);
          dummy.rotation.set(
            Math.sin(seconds * 0.32 + index) * 0.04,
            Math.sin(seconds * 0.26 + index * 0.7) * 0.14,
            Math.cos(seconds * 0.24 + index) * 0.035
          );
          const pulse = 1 + Math.sin(seconds * 0.8 + index) * 0.035;
          dummy.scale.setScalar(pulse);
          dummy.updateMatrix();
          gates.setMatrixAt(index, dummy.matrix);
        });
        gates.instanceMatrix.needsUpdate = true;

        for (let index = 0; index < packetCount; index += 1) {
          const progress = (time * (0.000032 + (index % 4) * 0.000004) + index / packetCount) % 1;
          curve.getPointAt(progress, point);
          curve.getTangentAt(progress, tangent);
          dummy.position.copy(point);
          dummy.lookAt(point.x + tangent.x, point.y + tangent.y, point.z + tangent.z);
          dummy.rotation.z = seconds * 0.7 + index;
          const packetScale = index % 3 === 0 ? 1.35 : 0.85;
          dummy.scale.setScalar(packetScale);
          dummy.updateMatrix();
          packets.setMatrixAt(index, dummy.matrix);
        }
        packets.instanceMatrix.needsUpdate = true;

        satellitePositions.forEach((position, index) => {
          dummy.position.copy(position);
          dummy.position.y += Math.sin(seconds * 0.48 + index) * 0.08;
          dummy.rotation.set(seconds * 0.16 + index, seconds * 0.2 + index * 0.4, 0);
          dummy.scale.setScalar(1 + Math.sin(seconds * 0.55 + index) * 0.12);
          dummy.updateMatrix();
          satellites.setMatrixAt(index, dummy.matrix);
        });
        satellites.instanceMatrix.needsUpdate = true;

        renderer.render(scene, camera);
        frame += 1;
        if (!pixelVerified) verifyPixels();
        if (frame % 8 === 0) {
          renderer.domElement.dataset.frame = String(frame);
          renderer.domElement.dataset.drawCalls = String(renderer.info.render.calls);
          renderer.domElement.dataset.instances = String(packetCount + satellitePositions.length + gatePositions.length);
        }
      };

      const resize = () => {
        const { height, width } = container.getBoundingClientRect();
        if (!height || !width) return;
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, width < 760 ? 1 : 1.2));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.position.z = width < 760 ? 15.8 : 13.2;
        camera.updateProjectionMatrix();
        root.scale.setScalar(width < 760 ? 0.7 : 0.93);
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
          inView = entry.isIntersecting && entry.intersectionRatio > 0.04;
          renderer.domElement.dataset.inView = String(inView);
          syncAnimation();
        },
        { threshold: [0, 0.05, 0.2] }
      );
      const resizeObserver = new ResizeObserver(resize);
      activeObserver.observe(container);
      resizeObserver.observe(container);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("visibilitychange", syncAnimation);
      reducedMotion.addEventListener("change", syncAnimation);
      resize();

      teardown = () => {
        renderer.setAnimationLoop(null);
        activeObserver.disconnect();
        resizeObserver.disconnect();
        window.removeEventListener("pointermove", onPointerMove);
        document.removeEventListener("visibilitychange", syncAnimation);
        reducedMotion.removeEventListener("change", syncAnimation);
        gates.dispose();
        packets.dispose();
        satellites.dispose();
        geometries.forEach((geometry) => geometry.dispose());
        materials.forEach((material) => material.dispose());
        renderer.dispose();
        renderer.domElement.remove();
      };
    };

    const proximityObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        proximityObserver.disconnect();
        void boot();
      },
      { rootMargin: "320px 0px" }
    );
    proximityObserver.observe(container);

    return () => {
      cancelled = true;
      proximityObserver.disconnect();
      teardown();
    };
  }, []);

  return <div className="delivery-system-canvas" ref={containerRef} aria-hidden="true" />;
}
