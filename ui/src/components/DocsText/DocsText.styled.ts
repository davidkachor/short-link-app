import styled from 'styled-components'

export const DocsPage = styled.article`
	padding-left: 30px;
	width: 500px;
	//margin: 0 auto;

	@media (max-width: 800px) {
		width: 400px;
	}
	@media (max-width: 600px) {
		width: 300px;
	}
  @media (max-width: 500px) {
  padding: 0;
    width: calc(100vw - 40px);
  }

    h1 {
		font-size: 40px;
		margin-bottom: 10px;
	}

	h2 {
		font-size: 30px;
		margin: 20px 0 10px;
	}

	p {
		margin: 10px 0;
		line-height: 22px;
	}

	code {
		font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
		background-color: #071b48;
		padding: 10px;
		border-radius: 5px;
		display: block;
		color: white;
		margin: 10px 0;

		p {
			margin: 0;
            overflow-wrap: break-word;
		}
		span {
			p {
				margin-left: 30px;
			}
		}
	}
`
