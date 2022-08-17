import React  from 'react'
import ReactDOM from 'react-dom'
import NotificationType from '../../types/notification-type'
import { NotificationWrapper } from './Notification.style'

const Notification: React.FC<{
	text: string
	type: NotificationType
	isGoingToClose: boolean
	isOpen: boolean
}> = props => {
	return ReactDOM.createPortal(
		<NotificationWrapper
			isOpen={props.isOpen}
			isClosing={props.isGoingToClose}
			type={props.type}
		>
			{props.text}
		</NotificationWrapper>,
		document.getElementById('notification-root') as HTMLDivElement
	)
}

export default React.memo(Notification)
