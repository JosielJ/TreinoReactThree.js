import React, { Suspense } from "react";

import "./App.css";
import styled from "styled-components"

import Background from "./components/Background";
import TextSection from "./components/TextSection";
import Water from "./components/Water";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Box from "./components/Box";
import Whale from "./components/Whale";

export default function App() {
  return (
    <Wrapper className="App">
      <Background/>
      <TextSection/>
      <Canvas className="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[-2, 5, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <Box />
        </Suspense>
      </Canvas>
      <Water/>
      <Canvas className="canvaswhale">
        <directionalLight position={[-2, 5, 2]} intensity={0.8} />
        <Suspense fallback={null}>
          <Whale />
        </Suspense>
      </Canvas>
      <h3>Whale 3D model by rkuhlf (https://sketchfab.com/rkuhlf)</h3>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  background: #0e1c4c;

  canvas {
    height: 500px;
  }

  h3 {
    color: white;
    font-weight: normal;
    padding-bottom: 10px;
  }
`;
