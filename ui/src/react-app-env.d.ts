/// <reference types="react-scripts" />

export {}

declare global {
	interface Window {
		notificationIsGoingToCloseTimeout: NodeJS.Timeout
		notificationClosingTimeout: NodeJS.Timeout
	}
}
