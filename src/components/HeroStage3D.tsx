'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export function HeroStage3D() {
  const mountRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const canvas = document.createElement('canvas');
    canvas.className = 'absolute inset-0 h-full w-full';
    mount.appendChild(canvas);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, window.innerWidth < 768 ? 1.25 : 1.75));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.2, 7.5);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.BoxGeometry(0.48, 0.48, 0.48, 3, 3, 3);
    const material = new THREE.MeshStandardMaterial({
      color: 0xb9ff38,
      metalness: 0.18,
      roughness: 0.36,
      emissive: 0x203000,
      emissiveIntensity: 0.2,
    });
    const mesh = new THREE.InstancedMesh(geometry, material, 42);
    const dummy = new THREE.Object3D();

    for (let i = 0; i < 42; i += 1) {
      const ring = Math.floor(i / 7);
      const angle = (i % 7) * ((Math.PI * 2) / 7) + ring * 0.22;
      const radius = 1.2 + ring * 0.34;
      dummy.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * 0.72, (ring - 3) * 0.28);
      dummy.rotation.set(angle * 0.4, angle * 0.7, ring * 0.25);
      const scale = 0.44 + (i % 4) * 0.08;
      dummy.scale.setScalar(scale);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    group.add(mesh);

    const portraitGeometry = new THREE.IcosahedronGeometry(1.38, 2);
    const portraitMaterial = new THREE.MeshStandardMaterial({
      color: 0xf7f3ea,
      metalness: 0.08,
      roughness: 0.52,
      flatShading: true,
    });
    const portrait = new THREE.Mesh(portraitGeometry, portraitMaterial);
    group.add(portrait);

    const wire = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.46, 2),
      new THREE.MeshBasicMaterial({ color: 0x38d8ff, wireframe: true, transparent: true, opacity: 0.28 }),
    );
    group.add(wire);

    const key = new THREE.DirectionalLight(0xffffff, 2.2);
    key.position.set(3, 4, 5);
    scene.add(key);
    scene.add(new THREE.AmbientLight(0xffffff, 1.1));

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    };

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    resize();
    setReady(true);
    window.addEventListener('resize', resize);
    mount.addEventListener('pointermove', onPointerMove);

    const clock = new THREE.Clock();
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      const scroll = window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);

      group.rotation.y = elapsed * 0.22 + scroll * Math.PI * 1.4 + pointer.x * 0.18;
      group.rotation.x = -0.08 + pointer.y * 0.12;
      portrait.rotation.y = elapsed * 0.36;
      portrait.rotation.x = Math.sin(elapsed * 0.7) * 0.18;
      wire.rotation.y = -elapsed * 0.22;
      wire.rotation.z = elapsed * 0.12;
      mesh.rotation.z = elapsed * 0.05;

      renderer.render(scene, camera);
      frameRef.current = window.requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
      window.removeEventListener('resize', resize);
      mount.removeEventListener('pointermove', onPointerMove);
      geometry.dispose();
      material.dispose();
      portraitGeometry.dispose();
      portraitMaterial.dispose();
      wire.geometry.dispose();
      (wire.material as THREE.Material).dispose();
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  return (
    <div className="relative min-h-[520px] overflow-hidden border border-[var(--line)] bg-[var(--panel)] shadow-[12px_12px_0_var(--shadow)]">
      <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] font-black uppercase tracking-[0.24em] text-[var(--muted)]">Portrait slot</p>
            <p className="mt-2 max-w-xs text-lg font-black uppercase leading-none">PNG or 3D model can replace this stage</p>
          </div>
          <div className="border border-[var(--line)] bg-[var(--paper)] px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--muted-strong)]">
              {ready ? 'WebGL live' : 'Loading'}
          </div>
        </div>
      </div>
    </div>
  );
}
