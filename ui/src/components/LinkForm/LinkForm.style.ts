import styled from 'styled-components'
import { Button } from '../Button/Button.style'

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 36px;
	align-items: center;

	@media (max-width: 768px) {
		width: 100%;
	}
`

export const Input = styled.input.attrs<{ isValid: boolean }>(props => ({
	placeholder: 'https://type-your-link.here ...',
	type: 'text',
	'aria-label': props.isValid ? 'link input' : 'the url is not valid',
	'aria-description': props.isValid
		? 'type here link you want to make short'
		: 'please write valid url',
}))<{ isValid: boolean }>`
	padding: 16px;
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	background: ${props => (props.isValid ? '#f9faff' : '#ffdbdb')};
	border: 1px solid ${props => (props.isValid ? '#dee6ff' : '#ff4d4d')};
	${props => !props.isValid && 'outline: 3px solid red !important;'}
	border-radius: 5px;
	width: calc(420px - 32px);

	&::placeholder {
		color: #aaaaaa;
	}
	
	@media (max-width: 460px) {
		width: calc(100% - 32px);
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
