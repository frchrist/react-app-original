import {useState} from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

//useState : reactHock
function Todo({title}) {
    const [modelIsOpen, setModelIsOpen] = useState(false, false);
  //we must return samething (html code)
    function deleteHandler(){
        setModelIsOpen(true)
    }
    function closeModalHandler(){
        setModelIsOpen(false)
    }


  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>Delete</button>
      </div>
      {modelIsOpen && <Modal onClick={closeModalHandler}/>}
      {modelIsOpen && <Backdrop onClick={closeModalHandler}/>}

    </div>
  );
}

export default Todo;
