import styled from 'styled-components'
import { Button } from '../Button/Button.style'

export const Form = styled.form`
	display: flex;
	margin: 0 auto;
`

export const Input = styled.input.attrs({
	type: 'text',
})`
	padding: 16px;
	width: 300px;
	font-size: 16px;
	border: solid 1px #dee6ff;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	@media (max-width: 768px) {
		padding: 10px;
		width: 200px
	}
	@media (max-width: 768px) {
		width: 180px
	}
`

export const SubmitButton = styled(Button).attrs({
	type: 'submit',
})`
	background: #5380ea;
	color: white;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	&:hover {
		background-color: #658bea;
	}
	@media (max-width: 768px) {
		padding: 10px;
	}
`
