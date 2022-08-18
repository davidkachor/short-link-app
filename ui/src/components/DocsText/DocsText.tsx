import React, { ReactNode } from 'react'
import { DocsPage } from './DocsText.styled'

const DocsText: React.FC<{ children: ReactNode }> = props => (
	<DocsPage>{props.children}</DocsPage>
)

export default DocsText
