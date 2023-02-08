import React, { useState, useEffect } from 'react'
import '../../styles/ballot.css'
import Modal from './Modal'

type Props = {
	ballot: data[]
	setBallot: React.Dispatch<React.SetStateAction<never[]>>
	openModal: boolean
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
	select: string[]
	setSelect: React.Dispatch<React.SetStateAction<string[]>>
	disable: boolean
	setDisable: React.Dispatch<React.SetStateAction<boolean>>
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

const Ballot: React.FC<Props> = ({
	ballot,
	setBallot,
	select,
	setSelect,
	disable,
	setDisable
}) => {
	const [openModal, setOpenModal] = useState<boolean>(false)

	
	return (
		<form
			className='container'
			onSubmit={(e) => {
				e.preventDefault()
			}}
		>
			{ballot.map((item: data) => {
				return (
					<div className='main-container' key={item.id}>
						<hr />
						<div className='title-container'>{item.title}</div>
						<hr />
						<div className='spread-container'>
							{item.items.map((property: item) => {
								return (
									<div className='body-container' key={property.id}>
										<span
											style={{ pointerEvents: disable ? 'none' : 'auto' }}
											className='mini-container'
										>
											<div className='title-container'>{property.title}</div>

											<img
												className='image'
												style={{ background: `url(${property.photoUrL})` }}
											/>

											<button
												className='ballot-btn'
												type='submit'
												onClick={(
													event: React.MouseEvent<HTMLButtonElement>
												) => {
													const title = (event.target as HTMLButtonElement)
														.value
													console.log(title)
													if (title === item.title) {
														setDisable(true)
													}
													// setSelect([...select, property.title])
												}}
											>
												Select Button
											</button>
										</span>
									</div>
								)
							})}
						</div>
					</div>
				)
			})}
		</form>
	)
}

export default Ballot
