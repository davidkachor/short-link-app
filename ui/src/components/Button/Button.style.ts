import styled, { css } from 'styled-components'

const ButtonCss = css`
	padding: 16px 32px;
	cursor: pointer;
	font-family: Inter, sans-serif;
	font-size: 16px;
	font-weight: 700;
	line-height: 19px;
	transition: all 0.2s ease-in-out;
`

export const Button = styled.button`
	${ButtonCss};
`

export const ButtonLink = styled.a`
	${ButtonCss};
`
