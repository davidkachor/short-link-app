import styled from 'styled-components'

export const MainWrapper = styled.main`
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 36px;

	@media (max-width: 768px) {
		width: 100%;
	}
`

export const Header = styled.h2`
	font-style: normal;
	font-weight: 700;
	font-size: 32px;
	line-height: 39px;
	color: #000000;
	text-align: center;

	span {
		color: #5380ea;
	}

  @media (max-width: 460px) {
		font-size: 23px;
	}
`
