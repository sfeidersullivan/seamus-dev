import React, { Suspense } from "react"
import { Canvas } from 'react-three-fiber'

import SEO from "../seo"
import Box from '../Box';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Canvas style={{ background: '#324444' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <fog args={[0x000000, 250, 1400]} />
      <Suspense fallback={null}>
        <Box position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  </>
)

export default IndexPage
