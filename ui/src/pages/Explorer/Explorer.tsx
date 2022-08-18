import React, { useEffect, useState } from 'react'
import { Container, ResWrapper } from './Explorer.style'
import RequestForm from '../../components/RequestForm/RequestForm'
import useFetch from '../../hooks/useFetch'
import useNotification from '../../hooks/useNotification'

const Explorer = () => {
	const [url, setUrl] = useState('')
	const { data, error } = useFetch(url)
	const { Notification, showNotification } = useNotification(2000, 'negative')

	useEffect(() => {
		if (error) showNotification(error)
	}, [error])

	return (
		<Container>
			<RequestForm onSubmit={value => setUrl(value)} />
			{!!data && <ResWrapper>{JSON.stringify(data)}</ResWrapper>}
			<Notification />
		</Container>
	)
}

export default Explorer
