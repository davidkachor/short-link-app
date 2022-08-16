import React from 'react'
import { CopyButton } from './CopyLinkButton.style'
import useNotification from '../../hooks/useNotification'
import copy from '../../helpers/copy'

const CopyLinkButton: React.FC<{ text: string }> = props => {
	const { Notification, showNotification } = useNotification(4000, 'positive')

	const clickHandler = () => {
		copy(props.text)
		showNotification('URL was copied to your clipboard')
	}

	return (
		<>
			<CopyButton onClick={clickHandler}>{props.text}</CopyButton>
			<Notification />
		</>
	)
}

export default CopyLinkButton
