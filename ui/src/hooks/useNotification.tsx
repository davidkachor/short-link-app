import React, {
	useCallback,
	useId,
	useLayoutEffect,
	useMemo,
	useState,
} from 'react'
import Notification from '../components/Notification/Notification'
import NotificationType from '../types/notification-type'

const useNotification = (delay = 2000, type: NotificationType = 'neutral') => {
	const [state, setState] = useState({
		notificationIsShow: false,
		isGoingToClose: false,
		text: '',
		notificationType: type,
		isOpen: false,
	})
	const { notificationType, notificationIsShow, isOpen, isGoingToClose, text } =
		state
	const id = useId()
	// console.log('hook rerender', { id })

	useLayoutEffect(() => {
		//check if notification exists in notification pull
		//if not create it
		if (!window.notificationPull?.find(e => e.id === id)) {
			window.notificationPull = window.notificationPull
				? [...window.notificationPull, { id }]
				: [{ id }]
		}
		//find item of this notification in pull
		const item = window.notificationPull?.find(e => e.id === id)
		//if notification is hidden prevent this useEffect
		if (!notificationIsShow || !item) return

		//if another notification is open execute its closing function, if it exists
		window.onCloseCallback?.cb?.()
		//create closing function of this notification
		const cb = () => {
			//isGoingToClose starts closing css animation of notification
			//isOpen=false turns on animation
			setState(prev => ({ ...prev, isGoingToClose: true, isOpen: false }))
			//create timeout in item of this notification
			item.notificationClosingTimeout = setTimeout(() => {
				//hide notification and turn off closing animation
				setState(prev => ({
					...prev,
					notificationIsShow: false,
					isGoingToClose: false,
				}))
				//if registered closing function belongs to this notification clear it
				//this makes for avoiding wrong closing animation when the same notification being executed 2 times in a raw
				if (window.onCloseCallback.id === id)
					window.onCloseCallback = { id: null, cb: null }
			}, 300)
		}
		//write to memory closing function of notification
		//this makes to close the notification if another one is executed
		window.onCloseCallback = { id, cb }
		//isOpen prevents unwanted re-rendering animation of notification
		setTimeout(() => setState(prev => ({ ...prev, isOpen: true })), 500)
		//timeout closing function
		item.notificationIsGoingToCloseTimeout = setTimeout(cb, delay)

		return () => {
			clearTimeout(item.notificationIsGoingToCloseTimeout)
			clearTimeout(item.notificationClosingTimeout)
		}
	}, [notificationIsShow])

	//function executes a notification with preset text, executed notification component appear on screen
	const showNotification = useCallback(
		(text: string, type?: NotificationType) => {
			if (type) {
				setState(prev => ({
					...prev,
					notificationIsShow: true,
					text,
					notificationType: type,
				}))
			} else setState(prev => ({ ...prev, notificationIsShow: true, text }))
		},
		[]
	)

	const NotificationComponent = () =>
		notificationIsShow ? (
			<Notification
				isOpen={isOpen}
				text={text}
				type={notificationType}
				isGoingToClose={isGoingToClose}
			/>
		) : (
			<></>
		)

	return useMemo(
		() => ({
			Notification: React.memo(NotificationComponent),
			showNotification,
		}),
		[NotificationComponent, showNotification]
	)
}

export default useNotification
