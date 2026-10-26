"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 1. Procedural Agri-Drone Model
function AgriDrone() {
  const droneRef = useRef<THREE.Group>(null);
  const prop1 = useRef<THREE.Mesh>(null);
  const prop2 = useRef<THREE.Mesh>(null);
  const prop3 = useRef<THREE.Mesh>(null);
  const prop4 = useRef<THREE.Mesh>(null);
  const scanSpotlight = useRef<THREE.SpotLight>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    if (droneRef.current) {
      // Smooth patrol orbit over the farm island
      const radius = 2.4;
      droneRef.current.position.x = Math.cos(t * 0.8) * radius;
      droneRef.current.position.z = Math.sin(t * 0.8) * (radius * 0.8);
      droneRef.current.position.y = 1.3 + Math.sin(t * 2.2) * 0.15;

      // Realistic bank angle into turns
      droneRef.current.rotation.y = -t * 0.8 + Math.PI / 2;
      droneRef.current.rotation.z = Math.sin(t * 0.8) * 0.18;
    }

    // High speed spinning propellers
    const propSpeed = delta * 45;
    if (prop1.current) prop1.current.rotation.y += propSpeed;
    if (prop2.current) prop2.current.rotation.y -= propSpeed;
    if (prop3.current) prop3.current.rotation.y += propSpeed;
    if (prop4.current) prop4.current.rotation.y -= propSpeed;
  });

  return (
    <group ref={droneRef} scale={0.55}>
      {/* Central Drone Chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.5, 0.15, 0.7]} />
        <meshStandardMaterial color="#0f172a" roughness={0.3} metalness={0.9} />
      </mesh>

      {/* Cyber Dome / Camera Sensor */}
      <mesh position={[0, -0.09, 0.2]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0284c7"
          emissiveIntensity={2.5}
          roughness={0.1}
        />
      </mesh>

      {/* 4 Carbon Arms */}
      <mesh position={[0.4, 0, 0.4]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.06]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} />
      </mesh>
      <mesh position={[-0.4, 0, 0.4]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.06]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} />
      </mesh>
      <mesh position={[0.4, 0, -0.4]} rotation={[0, -Math.PI / 4, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.06]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} />
      </mesh>
      <mesh position={[-0.4, 0, -0.4]} rotation={[0, Math.PI / 4, 0]}>
        <boxGeometry args={[0.6, 0.05, 0.06]} />
        <meshStandardMaterial color="#1e293b" metalness={0.8} />
      </mesh>

      {/* Propellers */}
      <mesh ref={prop1} position={[0.6, 0.08, 0.6]}>
        <cylinderGeometry args={[0.26, 0.26, 0.01, 16]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.55} />
      </mesh>
      <mesh ref={prop2} position={[-0.6, 0.08, 0.6]}>
        <cylinderGeometry args={[0.26, 0.26, 0.01, 16]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.55} />
      </mesh>
      <mesh ref={prop3} position={[0.6, 0.08, -0.6]}>
        <cylinderGeometry args={[0.26, 0.26, 0.01, 16]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.55} />
      </mesh>
      <mesh ref={prop4} position={[-0.6, 0.08, -0.6]}>
        <cylinderGeometry args={[0.26, 0.26, 0.01, 16]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.55} />
      </mesh>

      {/* Downward Scanning Laser Footprint */}
      <mesh position={[0, -0.8, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[0.1, 0.6, 24]} />
        <meshBasicMaterial color="#4ade80" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// 2. Holographic Seedling / Plant in center of Island
function HolographicSprout() {
  const sproutRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sproutRef.current) {
      sproutRef.current.rotation.y = t * 0.4;
      const s = 1 + Math.sin(t * 1.5) * 0.05;
      sproutRef.current.scale.set(s, s, s);
    }
  });

  return (
    <group ref={sproutRef} position={[0, 0.35, 0]}>
      {/* Central Sprout Core Stem */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.04, 0.08, 0.8, 16]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#15803d"
          emissiveIntensity={1.5}
          roughness={0.2}
        />
      </mesh>

      {/* Left Leaf */}
      <mesh position={[-0.22, 0.65, 0]} rotation={[0, 0, 0.7]}>
        <boxGeometry args={[0.35, 0.04, 0.18]} />
        <meshStandardMaterial
          color="#4ade80"
          emissive="#22c55e"
          emissiveIntensity={2}
          roughness={0.2}
        />
      </mesh>

      {/* Right Leaf */}
      <mesh position={[0.22, 0.75, 0.05]} rotation={[0, 0.4, -0.7]}>
        <boxGeometry args={[0.38, 0.04, 0.2]} />
        <meshStandardMaterial
          color="#86efac"
          emissive="#22c55e"
          emissiveIntensity={2}
          roughness={0.2}
        />
      </mesh>

      {/* Holographic Data Ring around Sprout */}
      <mesh position={[0, 0.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.5, 0.015, 12, 36]} />
        <meshBasicMaterial color="#38bdf8" transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.7, 0]} rotation={[Math.PI / 2, 0.3, 0]}>
        <torusGeometry args={[0.35, 0.01, 12, 36]} />
        <meshBasicMaterial color="#facc15" transparent opacity={0.65} />
      </mesh>
    </group>
  );
}

// 3. Floating Futuristic Farm Island
function FarmIsland() {
  const islandRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Gentle mouse parallax & idle breathing
    if (islandRef.current) {
      const mouseX = state.pointer.x * 0.4;
      const mouseY = state.pointer.y * 0.3;
      islandRef.current.rotation.y = THREE.MathUtils.lerp(
        islandRef.current.rotation.y,
        t * 0.15 + mouseX,
        0.05
      );
      islandRef.current.rotation.x = THREE.MathUtils.lerp(
        islandRef.current.rotation.x,
        0.35 - mouseY,
        0.05
      );
    }
  });

  // Procedural Crop Rows
  const cropRows = useMemo(() => {
    const rows = [];
    const count = 7;
    for (let i = 0; i < count; i++) {
      const z = (i - count / 2) * 0.42;
      rows.push({
        z,
        scaleX: Math.max(0.8, 2.6 - Math.abs(z) * 0.9),
      });
    }
    return rows;
  }, []);

  return (
    <group ref={islandRef} position={[0, -0.6, 0]} rotation={[0.35, 0, 0]}>
      {/* Upper Hexagonal Soil / Agritech Slab */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[2.5, 2.7, 0.45, 6]} />
        <meshStandardMaterial
          color="#061826"
          roughness={0.4}
          metalness={0.7}
        />
      </mesh>

      {/* Hexagonal Cyber Wireframe Edge */}
      <mesh position={[0, 0.23, 0]}>
        <cylinderGeometry args={[2.52, 2.52, 0.05, 6]} />
        <meshBasicMaterial color="#22c55e" wireframe />
      </mesh>

      {/* Floating Lower Mag-Lev Base */}
      <mesh position={[0, -0.4, 0]}>
        <cylinderGeometry args={[2.3, 1.2, 0.5, 6]} />
        <meshStandardMaterial
          color="#030b12"
          roughness={0.6}
          metalness={0.9}
        />
      </mesh>

      {/* Crop Rows with Precision Hydroponic Glow */}
      {cropRows.map((row, idx) => (
        <group key={idx} position={[0, 0.24, row.z]}>
          <mesh scale={[row.scaleX, 1, 1]}>
            <boxGeometry args={[1.6, 0.05, 0.16]} />
            <meshStandardMaterial
              color={idx % 2 === 0 ? "#15803d" : "#166534"}
              roughness={0.3}
            />
          </mesh>
          {/* Glowing irrigation sensor lines */}
          <mesh scale={[row.scaleX, 1, 1]} position={[0, 0.03, 0]}>
            <boxGeometry args={[1.5, 0.02, 0.03]} />
            <meshBasicMaterial color={idx % 2 === 0 ? "#4ade80" : "#38bdf8"} />
          </mesh>
        </group>
      ))}

      {/* Holographic Sprout in center */}
      <HolographicSprout />

      {/* IoT Field Sensors */}
      {[-1.5, 1.5].map((x, i) =>
        [-0.9, 0.9].map((z, j) => (
          <group key={`${i}-${j}`} position={[x, 0.3, z]}>
            <mesh>
              <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
              <meshStandardMaterial color="#64748b" metalness={0.8} />
            </mesh>
            <mesh position={[0, 0.22, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshStandardMaterial
                color="#facc15"
                emissive="#ca8a04"
                emissiveIntensity={2}
              />
            </mesh>
          </group>
        ))
      )}
    </group>
  );
}

// 4. Pollen and Bio-Spore Floating Particle Field
function PollenParticles({ count = 180 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, scales] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sca = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = Math.random() * 7 - 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      sca[i] = Math.random() * 0.04 + 0.02;
    }
    return [pos, sca];
  }, [count]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      const positionsAttr = pointsRef.current.geometry.attributes.position;
      const arr = positionsAttr.array as Float32Array;
      for (let i = 0; i < count; i++) {
        // Drift gently upward like pollen
        arr[i * 3 + 1] += delta * 0.3;
        arr[i * 3] += Math.sin(state.clock.elapsedTime + i) * 0.003;
        if (arr[i * 3 + 1] > 5) {
          arr[i * 3 + 1] = -2;
        }
      }
      positionsAttr.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#4ade80"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Master Scene Export
export default function Hero3DScene() {
  return (
    <div className="w-full h-full relative pointer-events-auto">
      <Canvas
        camera={{ position: [0, 2.5, 6.2], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        {/* Subtle Ambient & Colored Key Lights */}
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 8, 5]} intensity={2.2} color="#f0fdf4" />
        <pointLight position={[-4, 3, -3]} intensity={1.8} color="#38bdf8" />
        <pointLight position={[0, -2, 2]} intensity={2} color="#22c55e" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <FarmIsland />
          <AgriDrone />
        </Float>

        <PollenParticles count={200} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 + 0.1}
          minPolarAngle={Math.PI / 4}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
