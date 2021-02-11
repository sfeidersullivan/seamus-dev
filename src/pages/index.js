import React, { useState, useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import Modal from 'react-modal';
import * as THREE from 'three';

import Scene from '../components/Scene';
import Rig from '../components/Rig';
import resume from '../images/resume.png';
import resumepdf from '../images/seamus.pdf';

const App = () => {
  const mouse = useRef([0, 0])
  const [modal, setModal] = useState(false);
  const fogColor = new THREE.Color(0xffffff);
  const sceneColor = '#324444';

  return (
    <div className="main">
      <Canvas
        style={{ background: sceneColor }}
        camera={{ position: [0, 0, 200], fov: 75 }}
        onMouseMove={e => (mouse.current = [e.clientX - window.innerWidth / 2, e.clientY - window.innerHeight / 2])}
      >
        <Scene />
        <Rig mouse={mouse} />
        <fog args={[fogColor, 1, 40]} />
      </Canvas>
      <div className="nav-bar">
        <a href="https://github.com/sfeidersullivan" children="Github 🗿" aria-label="link to github"/>
        <a href="https://www.linkedin.com/in/sfeidersullivan/"  children="LinkedIn 🧑🏻" aria-label="link to linkedin"/>
        <a href="mailto:sfeidersullivan@gmail.com/"  children="email 📫" aria-label="email me"/>
        <a onClick={() => setModal(true)}  children="resume 📄" role="button" tabIndex="0" aria-label="view resume"/> {/* eslint-disable-line */}
      </div>
      <span className="header">hi,<br/>i'm seamus</span>
      <span className="footer">
        <a href="https://www.gatsbyjs.com/">Gatsby </a>🔮
        <a href="https://threejs.org/"> Three.js </a>🧱
      </span>
      <Modal
          className="modal"
          isOpen={modal}
          style={{}}
          onRequestClose={() => setModal(false)}
          contentLabel="Resume modal"
      >
        <img className="resume" src={resume} alt="resume"/>
        <a href={resumepdf} className="download-resume">download PDF</a>
      </Modal>
    </div>
  )
}

export default App;
