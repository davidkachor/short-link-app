import { useState, useEffect } from 'react'

const useNotification = (delay: number) => {
	const [notificationIsShow, setNotificationIsShow] = useState(false)
	const [isGoingToClose, setIsGoingToClose] = useState(false)

	useEffect(() => {
		if (!notificationIsShow) return
		window.notificationIsGoingToCloseTimeout = setTimeout(() => {
			setIsGoingToClose(true)
			window.notificationClosingTimeout = setTimeout(() => {
				setNotificationIsShow(false)
				setIsGoingToClose(false)
			}, 190)
		}, delay)

		return () => {
			clearTimeout(window.notificationIsGoingToCloseTimeout)
			clearTimeout(window.notificationClosingTimeout)
		}
	}, [notificationIsShow])

	return {
		isGoingToClose,
		notificationIsShow,
		showNotification: () => setNotificationIsShow(true),
	}
}

export default useNotification
