import React from 'react'
import '../../styles/ballot.css'

interface types {
	openModal: boolean
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal = ({ setOpenModal, openModal }: types) => {
	console.log(openModal)
	return (
		<div className='modal-container'>
			<div className='modal-subcontainer'>
				<button className='modal-btn' onClick={() => setOpenModal(false)}>
					x
				</button>
			</div>
		</div>
	)
}

export default Modal;
