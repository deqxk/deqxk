"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function nodePositions(radius: number, count: number) {
  // Fibonacci sphere distribution — even spread of "network nodes"
  const pts: THREE.Vector3[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = phi * i;
    pts.push(new THREE.Vector3(Math.cos(theta) * r * radius, y * radius, Math.sin(theta) * r * radius));
  }
  return pts;
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.12;
    // gentle parallax toward pointer
    target.current.x = state.pointer.y * 0.15;
    target.current.y += (state.pointer.x * 0.3 - group.current.rotation.z) * 0.02;
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * 0.03;
  });

  return <group ref={group}>{children}</group>;
}

function NetworkMesh() {
  const radius = 2.1;
  const nodeCount = 22;
  const positions = useMemo(() => nodePositions(radius, nodeCount), []);

  // build edges between nearby nodes only (keeps it legible, like a graph not a mess)
  const edges = useMemo(() => {
    const segs: number[] = [];
    const maxDist = radius * 1.05;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        if (positions[i].distanceTo(positions[j]) < maxDist) {
          segs.push(
            positions[i].x, positions[i].y, positions[i].z,
            positions[j].x, positions[j].y, positions[j].z
          );
        }
      }
    }
    return new Float32Array(segs);
  }, [positions]);

  return (
    <Rig>
      {/* edges */}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={edges.length / 3}
            array={edges}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#E8A33D" transparent opacity={0.28} />
      </lineSegments>

      {/* core wireframe form */}
      <mesh>
        <icosahedronGeometry args={[radius * 0.62, 1]} />
        <meshBasicMaterial color="#3A4552" wireframe transparent opacity={0.5} />
      </mesh>

      {/* nodes */}
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[i % 5 === 0 ? 0.045 : 0.028, 8, 8]} />
          <meshBasicMaterial color={i % 5 === 0 ? "#E8A33D" : "#E7EDF2"} />
        </mesh>
      ))}
    </Rig>
  );
}

function Resize() {
  const { size, camera } = useThree();
  if (camera instanceof THREE.PerspectiveCamera) {
    camera.aspect = size.width / size.height;
    camera.updateProjectionMatrix();
  }
  return null;
}

export default function NetworkOrb() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Resize />
        <NetworkMesh />
      </Canvas>
    </div>
  );
}
