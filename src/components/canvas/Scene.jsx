import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { applyRendererConfig } from '../../utils/threeConfig';

import Model from './Model';
import Lights from './Lights';
import Environment from './Environment';
import Controls from './Controls';

export default function Scene() {
    return (
        <Canvas
            dpr={[1, 2]}
            camera={{ position: [3.2, 0, 3.2], fov: 28 }}
            gl={{
                antialias: true,
                dithering: false,
                powerPreference: 'high-performance',
            }}
            onCreated={({ gl }) => applyRendererConfig(gl)}
        >
            <Suspense fallback={null}>
                <Lights />
                <Environment />
                <Model />
                <Controls />
            </Suspense>
        </Canvas>
    );
}
