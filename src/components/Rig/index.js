import { useFrame, useThree } from 'react-three-fiber';

const Rig = ({ mouse }) => {
  const { camera } = useThree()
  const movementScale = 0.05;
  const movementDamper = 50;
  useFrame(() => {
    const [mouseX, mouseY] = mouse.current;
    camera.position.x += (mouseX / movementDamper - camera.position.x) * movementScale;
    camera.position.y += (-mouseY / movementDamper - camera.position.y) * movementScale;
    camera.lookAt(0, 0, 0);
  })
  return null;
};

export default Rig;