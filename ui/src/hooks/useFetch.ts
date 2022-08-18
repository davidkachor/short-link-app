import { useState, useEffect } from 'react'
import { ApiError, ApiItem } from '../types/api'

const useFetch = (url: string, config?: RequestInit) => {
	const [data, setData] = useState<null | ApiItem | ApiError>(null)
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string>('')

	useEffect(() => {
		if (!url) return
		setIsLoading(true)
		fetch(url, config)
			.then(res => res.json())
			.then(data => {
				setIsLoading(false)
				setData(data)
				setError('')
			})
			.catch(err => {
				setIsLoading(false)
				setError(String(err))
				setData(null)
			})
	}, [url, config])

	return { data, isLoading, error }
}

export default useFetch
