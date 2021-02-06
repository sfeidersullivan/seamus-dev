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
        <a href="https://github.com/sfeidersullivan" children="Github 🗿"/>
        <a href="https://www.linkedin.com/in/sfeidersullivan/"  children="LinkedIn 🧑🏻"/>
        <a href="mailto:sfeidersullivan@gmail.com/"  children="email 📫"/>
        <a onClick={() => setModal(true)}  children="resume 📄"/>
      </div>
      <span className="header">hi,<br/>i'm seamus</span>
      <Modal
          className="modal"
          isOpen={modal}
          style={{}}
          onRequestClose={() => setModal(false)}
          contentLabel="Resume modal"
      >
        <img className="resume" src={resume} />
        <a href={resumepdf} className="download-resume">download PDF</a>
      </Modal>
    </div>
  )
}

export default App;
