import styled from 'styled-components'

export const DocsWrapper = styled.main`
	display: flex;
	margin: 30px auto 0;
	width: 800px;

	@media (max-width: 800px) {
		width: calc(100vw - 40px);
	}
	@media (max-width: 500px) {
		flex-direction: column;
	}
`
