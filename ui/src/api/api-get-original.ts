import { ApiError, ApiItem } from '../types/api'
import BASE_URL from "./base-url";

const apiGetOriginal = async (hash: string) => {
	try {
		const res = await fetch(`${BASE_URL}/api/links/${hash}`)
		return (await res.json()) as ApiError | ApiItem
	} catch (error) {
		return { error: String(error) } as ApiError
	}
}

export default apiGetOriginal
