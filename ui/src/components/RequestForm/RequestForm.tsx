import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './RequestForm.style'
import BASE_URL from "../../api/base-url";

const RequestForm: React.FC<{ onSubmit?: (value: string) => void }> = props => {
	const [value, setValue] = useState(`${BASE_URL}/api/`)

	const changeHandler: React.ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) =>
		setValue(prev =>
			value.includes(`${BASE_URL}/api/`) ? value : prev
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
