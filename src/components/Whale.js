/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: rkuhlf (https://sketchfab.com/rkuhlf)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/whale-683cbf726ca14a819126cd32685c5717
title: Whale
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/whale.gltf')
  const { actions } = useAnimations(animations, group)
  useEffect(() => {
    console.log(actions)
    actions.Swim.play()
  })
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.16, -0.08, 0.22]} rotation={[0, 0, Math.PI / 2]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[-0.03, 0.06, -0.12]}>
              <group scale={2}>
              <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                  geometry={nodes.mesh_0.geometry}
                  material={materials.Whale}
                  skeleton={nodes.mesh_0.skeleton}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/whale.gltf')