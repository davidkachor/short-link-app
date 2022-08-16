/// <reference types="react-scripts" />

export {}

declare global {
	interface Window {
		onCloseCallback: {
			id: string | null
			cb: (() => void) | null
		}
		notificationPull: {
			id: string
			notificationIsGoingToCloseTimeout?: NodeJS.Timeout
			notificationClosingTimeout?: NodeJS.Timeout
		}[]
	}
}
