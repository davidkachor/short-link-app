import React from 'react'
import ReactDOM from 'react-dom'
import NotificationType from '../../types/notification-type'
import { NotificationWrapper } from './Notification.style'

const Notification: React.FC<{
	text: string
	type: NotificationType
	isGoingToClose: boolean
}> = props => {
	console.log('notification')

	return ReactDOM.createPortal(
		<NotificationWrapper isClosing={props.isGoingToClose} type={props.type}>
			{props.text}
		</NotificationWrapper>,
		document.getElementById('notification-root') as HTMLDivElement
	)
}

export default Notification
