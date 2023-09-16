import React from 'react'
import "./success-model.css";
import Modal from "react-modal";
import successFullyPic from "../../image/success.jpg"
import homeIcon from "../../image/home-1-svgrepo-com.svg";
import { Link } from "react-router-dom";

const SuccessModel = ({
  modalOpen,
  setModalOpen
}) => {
  const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "auto",
        transform: "translate(-50%, -50%)",
        borderRadius: "15px"
    }
  }
  const closeModal = () => {
    
  }
  return (
    <Modal 
        isOpen={modalOpen}
        style={customStyles}
    >
      <div className='modal-inner'>
        <label>Expense Added Successfully</label>
        <img 
          src={successFullyPic}
          alt="Expense Added"
          className='added-image'
        />
        <Link to="/" onClick={!modalOpen}>
          <div className='take-home-mmoment'>
            <img
              style={{width:"25px", height:"25px"}} 
              src={homeIcon} 
            />
            Home
          </div>
        </Link>
      </div>
    </Modal>
  )
}

export default SuccessModel