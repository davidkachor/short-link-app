import styled from 'styled-components'
import NotificationType from '../../types/notification-type'

export const NotificationWrapper = styled.div<{
	type: NotificationType,
	isClosing: boolean
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
	animation: ${props => props.isClosing ? 'appear .5s reverse running infinite' : 'appear 0.5s ease-in-out'};

	@keyframes appear {
		0% {
			opacity: 0;
			bottom: -100px;
		}
		100% {
			opacity: 1;
		}
	}
`
