import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './LinkForm.style'
import urlValidation from '../../helpers/url-validation'

export type ShortFormSubmitHandler = (value?: string) => void

const LinkForm: React.FC<{
	onSubmit?: ShortFormSubmitHandler
	buttonTitle: string
}> = props => {
	const [value, setValue] = useState('')
	const [isValid, setIsValid] = useState(true)

	const inputChangeHandler: React.ChangeEventHandler<
		HTMLInputElement
	> = event => {
		setValue(event.target.value)
		setIsValid(true)
	}

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				if (urlValidation(value)) {
					props.onSubmit?.(value)
					setValue('')
				} else {
					setIsValid(false)
				}
			}}
		>
			<Input isValid={isValid} value={value} onChange={inputChangeHandler} />
			<SubmitButton>{props.buttonTitle}</SubmitButton>
		</Form>
	)
}

export default LinkForm
