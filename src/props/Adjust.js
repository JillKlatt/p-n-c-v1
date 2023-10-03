/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Adjust = (props) => {
  const { nodes, materials } = useGLTF("/AdjustableDesk.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007_Cube008.geometry}
        material={materials.GrayPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006_Cube007.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder013.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials.WhiteSteelScrew}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005_Cube006.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder007.geometry}
        material={materials.WhiteSteelScrew}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004_Cube005.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials.WhiteSteelScrew}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003_Cube004.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002_Cube003.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_Cube002.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001_Plane002.geometry}
        material={materials.BlackWood}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials.BlackPlastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.WhiteSteelScrew}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.BlackCoatSteel}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Cube001.geometry}
        material={materials.BlackCoatSteel}
      />
    </group>
  );
}

useGLTF.preload("/AdjustableDesk.glb");

export default Adjust;

