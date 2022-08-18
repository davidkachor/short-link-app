import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './RequestForm.style'

const RequestForm: React.FC<{ onSubmit?: (value: string) => void }> = props => {
	const [value, setValue] = useState('http://localhost:5000/api/')

	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) =>
		setValue(prev =>
			value.includes('http://localhost:5000/api/') ? value : prev
		)
	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				props.onSubmit?.(value)
			}}
		>
			<Input value={value} onChange={changeHandler} />
			<SubmitButton>Make request</SubmitButton>
		</Form>
	)
}

export default RequestForm
