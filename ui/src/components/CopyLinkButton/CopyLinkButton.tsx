import React, { useState } from 'react'
import { CopyButton } from './CopyLinkButton.style'
import Notification from '../Notification/Notification'

const CopyLinkButton: React.FC<{ text: string }> = props => {
	const [isClicked, setIsClicked] = useState(false)

	const clickHandler = () => {
		navigator.clipboard.writeText(props.text).then(res => console.log(res))
		setIsClicked(true)
	}

	return (
		<>
			<CopyButton onClick={clickHandler}>{props.text}</CopyButton>
			{isClicked && (
				<Notification
					text={'URL was copied to your clipboard'}
					type={'positive'}
				/>
			)}
		</>
	)
}

export default CopyLinkButton
