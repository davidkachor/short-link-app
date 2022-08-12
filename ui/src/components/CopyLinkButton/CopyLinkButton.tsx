import React from 'react'
import { CopyButton } from './CopyLinkButton.style'
import Notification from '../Notification/Notification'
import useNotification from '../../hooks/useNotification'

const CopyLinkButton: React.FC<{ text: string }> = props => {
	const { isGoingToClose, notificationIsShow, showNotification } =
		useNotification(4000)

	const clickHandler = () => {
		navigator.clipboard.writeText(props.text)
		showNotification()
	}

	return (
		<>
			<CopyButton onClick={clickHandler}>{props.text}</CopyButton>
			{notificationIsShow && (
				<Notification
					isClosing={isGoingToClose}
					text={'URL was copied to your clipboard'}
					type={'positive'}
				/>
			)}
		</>
	)
}

export default CopyLinkButton
