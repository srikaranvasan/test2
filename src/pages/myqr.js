import React, {useState} from "react";
import Modal from "react-modal";
import qr from "./code.jpg";
const Myqr = () =>{
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div>
            <a className='qr' onClick={() => setModalIsOpen(true)}>SHOW MY QR CODE</a>
            <Modal isOpen={modalIsOpen} className={"pop"}>
                <center>
                <img src={qr} />
                <br></br><br></br>
                <button onClick={ () => setModalIsOpen(false)}>close</button>
                </center>
            </Modal>
        </div>
    )
}
export default Myqr;