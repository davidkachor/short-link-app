import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './LinkForm.style'

export type ShortFormSubmitHandler = (value?: string) => void

const LinkForm: React.FC<{
	onSubmit?: ShortFormSubmitHandler
	buttonTitle: string
}> = props => {
	const [value, setValue] = useState('')

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				props.onSubmit?.(value)
				setValue('')
			}}
		>
			<Input value={value} onChange={event => setValue(event.target.value)} />
			<SubmitButton>{props.buttonTitle}</SubmitButton>
		</Form>
	)
}

export default LinkForm
