

import { useRef } from "react";
import Adjust from "./Adjust";
import Computer from "./Computer";
import Couch from "./Couch";

const Office = ({setShowMessage}) => {
  const group = useRef();
  // const [ showMessage, setShowMessage ] = useState(false);

  // const defaults = { position: [0, 0, 0], scale: 1 };
  const deskConfig = {
    position: [0, 0, 0],
    scale: 1
  }

  const computerConfig = {
    position: [0, .95, .5],
    scale: 2.5,
    setShowMessage: setShowMessage
  }

  const chairConfig = {
    position: [2, 0, 0],
    scale: .5
  }

  return (
    <group ref={group} dispose={null} position={[0, 0, 0]}>
      <Computer {...computerConfig} />
      <Adjust {...deskConfig} />
      <Couch {...chairConfig} />
    </group>
  );
}


export default Office;