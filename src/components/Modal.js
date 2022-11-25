import  createPortal  from "react-dom";
import { render } from "react-dom";
const Modal = ({title , content}) => {
/* const containerDiv = document.getElementById("containerDiv");
 */ 
return render (createPortal(
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
)) 
}

export default Modal;