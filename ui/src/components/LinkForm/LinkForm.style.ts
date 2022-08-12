import styled from 'styled-components'
import { Button } from '../Button/Button.style'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 36px;
	align-items: center;
`

export const Input = styled.input.attrs({
	placeholder: 'https://type-your-link.here ...',
	type: 'text',
	'aria-label': 'link input',
	'aria-description': 'type here link you want to make short',
})`
	padding: 16px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	background: #f9faff;
	border: 1px solid #dee6ff;
	border-radius: 5px;
	width: calc(420px - 32px);

	&::placeholder {
		color: #aaaaaa;
	}
`

export const SubmitButton = styled(Button).attrs({
	type: 'submit',
})`
	background: #5380ea;
	border: 1px solid #5380ea;
	box-shadow: 0 10px 34px rgba(83, 128, 234, 0.5);
	border-radius: 40px;
	color: white;
	width: 200px;

	&:hover {
		background-color: #658bea;
	}
`
