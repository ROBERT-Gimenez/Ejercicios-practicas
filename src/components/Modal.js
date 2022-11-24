import  ReactDOM  from "react-dom";

const Modal = ({title , content}) => {
    const containerDiv = document.getElementById("containerDiv");
 
return ReactDOM.createPortal(
    <div>
        <h1>{title}</h1>
        <p>{content}</p>
    </div>
)
}

export default Modal;