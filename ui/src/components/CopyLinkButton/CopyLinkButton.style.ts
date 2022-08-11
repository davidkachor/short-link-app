import styled from 'styled-components'

export const CopyButton = styled.button.attrs({
	'aria-label': 'Copy your short link',
})<{
	isClicked?: boolean
}>`
	padding: 24px;
	width: 420px;
	height: 95px;
	background: #f6fbf8;
	box-shadow: 0 24px 24px rgba(0, 0, 0, 0.08);
	backdrop-filter: blur(4px);
	border-radius: 10px;
	cursor: pointer;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	text-align: center;
	color: #656565;
	margin: 0 auto;
	transition: all 0.2s ease-in-out;
	outline: transparent 20px solid;
	overflow: hidden;
	text-overflow: ellipsis;

	&:hover {
		//background-color: #ecefed;
		outline: rgba(196, 196, 196, 0.84) 4px solid;
	}
`
