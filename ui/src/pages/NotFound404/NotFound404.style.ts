import styled from 'styled-components'

export const TextWrapper = styled.div`
	width: 300px;
	padding: 20px;
	margin: auto;
	background-color: #e3e3e3;
	border-radius: 10px;

	p {
		display: flex;
		flex-direction: column;
		text-align: center;
		font-weight: 700;
		font-size: 20px;
		color: #2d2d2d;

		span {
			font-size: 30px;
		}
	}

	@media (max-width: 420px) {
		width: 200px;
	}
`
