import React, { useState, useEffect, useId } from 'react'
import Notification from '../components/Notification/Notification'
import NotificationType from '../types/notification-type'

const useNotification = (delay = 500, type: NotificationType = 'neutral') => {
	const [notificationIsShow, setNotificationIsShow] = useState(false)
	const [isGoingToClose, setIsGoingToClose] = useState(false)
	const [text, setText] = useState('')
	const [notificationType, setType] = useState(type)
	const id = useId()

	useEffect(() => {
		if (!window.notificationPull?.find(e => e.id === id)) {
			window.notificationPull = window.notificationPull
				? [...window.notificationPull, { id }]
				: [{ id }]
		}
		const item = window.notificationPull?.find(e => e.id === id)

		if (!notificationIsShow || !item) return

		window.onCloseCallback?.cb?.()

		const cb = () => {
			setIsGoingToClose(true)
			item.notificationClosingTimeout = setTimeout(() => {
				setNotificationIsShow(false)
				setIsGoingToClose(false)
				if (window.onCloseCallback.id === id)
					window.onCloseCallback = { id: null, cb: null }
			}, 190)
		}

		window.onCloseCallback = { id, cb }

		item.notificationIsGoingToCloseTimeout = setTimeout(cb, delay)

		return () => {
			setIsGoingToClose(false)
			setNotificationIsShow(false)
			clearTimeout(item.notificationIsGoingToCloseTimeout)
			clearTimeout(item.notificationClosingTimeout)
		}
	}, [notificationIsShow])

	const showNotification = (text: string, type?: NotificationType) => {
		setNotificationIsShow(true)
		setText(text)
		if (type) setType(type)
	}

	const NotificationComponent = () => {
		if (notificationIsShow) {
			return (
				<Notification
					text={text}
					type={notificationType}
					isGoingToClose={isGoingToClose}
				/>
			)
		} else return <></>
	}

	return { Notification: NotificationComponent, showNotification }
}

export default useNotification
