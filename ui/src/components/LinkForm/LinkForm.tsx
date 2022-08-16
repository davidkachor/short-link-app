import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './LinkForm.style'
import isUrlValid from '../../helpers/is-url-valid'
import useNotification from '../../hooks/useNotification'

export type ShortFormSubmitHandler = (value: string) => void

const LinkForm: React.FC<{
	onSubmit?: ShortFormSubmitHandler
	buttonTitle: string
}> = props => {
	const [value, setValue] = useState('')
	const [isValid, setIsValid] = useState(true)
	const { Notification, showNotification } = useNotification(4000, 'negative')

	const inputChangeHandler: React.ChangeEventHandler<
		HTMLInputElement
	> = event => {
		setValue(event.target.value)
		setIsValid(true)
	}

	const submitHandler: React.FormEventHandler = event => {
		event.preventDefault()
		if (isUrlValid(value.trim())) {
			props.onSubmit?.(value.trim())
			setValue('')
			setIsValid(true)
		} else {
			setIsValid(false)
			showNotification('Input URL is not valid')
		}
	}

	return (
		<Form onSubmit={submitHandler}>
			<Input isValid={isValid} value={value} onChange={inputChangeHandler} />
			<SubmitButton>{props.buttonTitle}</SubmitButton>
			<Notification />
		</Form>
	)
}

export default LinkForm
