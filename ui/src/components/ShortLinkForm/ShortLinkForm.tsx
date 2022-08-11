import React, { useState } from 'react'
import { Form, Input, SubmitButton } from './ShortLinkForm.style'

const ShortLinkForm = () => {
	const [value, setValue] = useState('')

	return (
		<Form
			onSubmit={event => {
				event.preventDefault()
				console.log({ value })
				setValue('')
			}}
		>
			<Input value={value} onChange={event => setValue(event.target.value)} />
			<SubmitButton>Short me!</SubmitButton>
		</Form>
	)
}

export default ShortLinkForm
