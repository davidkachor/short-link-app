import React from 'react'
import { CopyButton } from './CopyLinkButton.style'
import useNotification from '../../hooks/useNotification'
import copy from '../../helpers/copy'
import Spinner from "../Spinner/Spinner";

const CopyLinkButton: React.FC<{ text: string, pending?: boolean }> = props => {
	const { Notification, showNotification } = useNotification(4000, 'positive')

	const clickHandler = () => {
		copy(props.text)
		showNotification('URL was copied to your clipboard')
	}

	return (
		<>
			<CopyButton onClick={clickHandler}>{props.pending ? <Spinner /> : props.text}</CopyButton>
			<Notification />
		</>
	)
}

export default CopyLinkButton
