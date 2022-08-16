import { ApiError, ApiItem } from '../types/api'

const apiGetOriginal = async (hash: string) => {
	try {
		const res = await fetch(`http://localhost:5000/links/${hash}`)
		return (await res.json()) as ApiError | ApiItem
	} catch (error) {
		return { error: String(error) } as ApiError
	}
}

export default apiGetOriginal
