import { OrbitControls } from '@react-three/drei';
import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

export default function Controls() {
    const controlsRef = useRef();
    const [isInteracting, setIsInteracting] = useState(false);

    useFrame(() => {
        if (!controlsRef.current) return;
        controlsRef.current.autoRotateSpeed = isInteracting ? 0 : 0.6;
    });

    return (
        <OrbitControls
            ref={controlsRef}
            autoRotate
            autoRotateSpeed={0.6}
            enableRotate
            enableZoom={false}
            enablePan={false}
            enableDamping
            dampingFactor={0.08}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 1.8}
            onStart={() => setIsInteracting(true)}
            onEnd={() => setIsInteracting(false)}
        />
    );
}
