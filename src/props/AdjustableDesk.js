import React, { Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls, useGLTF } from '@react-three/drei';
import OfficeSetup from './OfficeSetup';
// import Loader from '../components/Loader/Loader';

const Scene = () => {
    const gltf = useGLTF('https://thinkuldeep.com/modelviewer/Astronaut.glb');
    return <primitive object={gltf.scene} />
  }

const AdjustableDesk = () => {
    const defaults = { position: [0, 0, 0], scale: 1 };

    // const { scene } = useGLTF('./Desk.glb');

    return (
        <Canvas camera={{ fov: 70, position: [0, 0, 65] }}>
            <Suspense fallback={null}>
                <ambientLight />
                <directionalLight intensity={2} position={[0,0,50]} />
                <OfficeSetup {...defaults} />
                <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
            </Suspense>
            {/* <Stats /> */}
        </Canvas>
    )
}

export default AdjustableDesk;