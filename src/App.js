import './App.css';
import { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera
} from "@react-three/drei";
// import Home from './Home';
import Office from './props/Office';
// import AdjustableDesk from './props/AdjustableDesk';
import Message from './components/Message/Message';

function App() {

  const [ showMessage, setShowMessage ] = useState(false);
  return (
    <div className="App">
      { showMessage ? 
        <Message />
      : ''}
      
        <Canvas dpr={[1, 2]} shadows colormanagement="none" camera={{ position: [0, 0, 7.5] }}>
        <ambientLight />
          <directionalLight intensity={2} position={[0,0,50]} />
          {/* <spotLight
            castShadow
            color="#ccccff"
            intensity={0.5}
            position={[10, 20, 10]}
            angle={0.5}
            penumbra={2}
            shadow-mapSize={[512, 512]}
            shadow-bias={0.0004}
          /> */}
          {/* <fog attach="fog" args={["#ffffff", 0, 20]} /> */}
          {/* <Home /> */}
          <Office setShowMessage={setShowMessage} />
          
          {/* <Environment files="/city.hdr" /> */}
          <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
          {/* <OrbitControls 
          enableZoom={false} /> */}
            {/* // minAzimuthAngle={-Math.PI / 4}
            // maxAzimuthAngle={Math.PI / 4}
            // minPolarAngle={Math.PI / 6}
            // maxPolarAngle={Math.PI - Math.PI / 6} */}
          {/* <OrbitControls
            makeDefault
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
            maxAzimuthAngle={Math.PI / 3}
            minAzimuthAngle={-Math.PI / 3}
            enableZoom={false}
            enablePan={false}
            enabled={true}
          /> */}
          {/* <PerspectiveCamera makeDefault fov={50} position={[0, 0, 4]} /> */}
        </Canvas>
    </div>
  );
}

export default App;
