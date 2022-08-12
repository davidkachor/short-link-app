import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import NotificationType from '../../types/notification-type'
import { NotificationWrapper } from './Notification.style'

const Notification: React.FC<{
	text: string
	type: NotificationType
	isClosing: boolean
}> = props => {

	return ReactDOM.createPortal(
		<NotificationWrapper isClosing={props.isClosing} type={props.type}>
			{props.text}
		</NotificationWrapper>,
		document.getElementById('notification-root') as HTMLDivElement
	)
}

export default Notification
