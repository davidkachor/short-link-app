import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './LinkForm.style'
import urlValidation from '../../helpers/url-validation'
import useNotification from '../../hooks/useNotification'
import Notification from '../Notification/Notification'

export type ShortFormSubmitHandler = (value?: string) => void

const LinkForm: React.FC<{
	onSubmit?: ShortFormSubmitHandler
	buttonTitle: string
}> = props => {
	const [value, setValue] = useState('')
	const [isValid, setIsValid] = useState(true)
	const { notificationIsShow, isGoingToClose, showNotification } =
		useNotification(4000)

	const inputChangeHandler: React.ChangeEventHandler<
		HTMLInputElement
	> = event => {
		setValue(event.target.value)
		setIsValid(true)
	}

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		if (urlValidation(value)) {
			props.onSubmit?.(value)
			setValue('')
		} else {
			setIsValid(false)
			showNotification()
		}
	}

	return (
		<Form onSubmit={submitHandler}>
			<Input isValid={isValid} value={value} onChange={inputChangeHandler} />
			<SubmitButton>{props.buttonTitle}</SubmitButton>
			{notificationIsShow && (
				<Notification
					text={'Input URL is not valid'}
					type={'negative'}
					isGoingToClose={isGoingToClose}
				/>
			)}
		</Form>
	)
}

export default LinkForm
