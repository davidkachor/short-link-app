import styled from 'styled-components'
import NotificationType from '../../types/notification-type'

export const NotificationWrapper = styled.div<{
	type: NotificationType
	isClosing: boolean
	isOpen: boolean
}>`
	background-color: ${props =>
		props.type === 'positive'
			? '#52b652'
			: props.type === 'negative'
			? '#ff3f3f'
			: '#9d9d9d'};
	color: white;
	font-weight: 700;
	border-radius: 5px;
	padding: 15px;
	position: fixed;
	left: 10px;
	bottom: 10px;
	${({ isOpen, isClosing }) =>
		!isOpen && isClosing
			? 'animation: appear .5s reverse running infinite;'
			: !isOpen && !isClosing
			? 'animation: appear 0.5s ease-in-out;'
			: ''}
	max-width: 400px;

	@keyframes appear {
		0% {
			opacity: 0;
			bottom: -100px;
		}
		100% {
			opacity: 1;
		}
	}

	@media (max-width: 300px) {
		width: calc(100% - 20px);
	}
`
