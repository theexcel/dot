import React, { useState, useEffect } from 'react'
import './App.css'
import Ballot from './Components/Ballot/Ballot'
import axios from 'axios'
import Modal from './Components/Ballot/Modal'
import './styles/ballot.css'

type Props = {
	ballot: data[]
	setBallot: React.Dispatch<React.SetStateAction<never[]>>
}

interface data {
	id: string
	items: item[]
	title: string
}

interface item {
	title: string
	photoUrL: string
	id: string
}

const App: React.FC = () => {
	const [header, setHeader] = useState('')
	const [ballot, setBallot] = useState([])
	const [openModal, setOpenModal] = useState<boolean>(false)
	const [select, setSelect] = useState<string[]>([])
	const [disable, setDisable] = useState<boolean>(false)

	const base = 'http://localhost:8080/api/getBallotData'
	useEffect(() => {
		axios
			.get(base)
			.then((response) => setBallot(response.data.items))
			.catch((err) => console.log(err))
	}, [])

	const baseUrl = 'http://localhost:8080/'
	useEffect(() => {
		axios
			.get(baseUrl)
			.then((response) => setHeader(response.data))
			.catch((err) => console.log(err))
	}, [])
   console.log(openModal)
	

	return (
		<div className='App'>
			<header className='header-container'>{header}</header>
			<Ballot
				ballot={ballot}
				setBallot={setBallot}
				openModal={openModal}
				setOpenModal={setOpenModal}
				select={select}
				setSelect={setSelect}
				disable={disable}
				setDisable = {setDisable}
			/>
			{openModal && <Modal setOpenModal={setOpenModal} openModal={openModal} />}
			<footer>
				<button
					className='submit-button'
					type='submit'
					onClick={() => setOpenModal(true)}
				>
					SUBMIT VOTE BUTTON
				</button>
			</footer>
		</div>
	)
}

export default App
