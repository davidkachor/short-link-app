import { ApiError, ApiItem } from '../types/api'
import BASE_URL from "./base-url";

const apiPostLink = async (url: string) => {
	try {
		const res = await fetch(`${BASE_URL}/api/links`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ url }),
		})
		return (await res.json()) as ApiError | ApiItem
	} catch (error) {
		return { error: String(error) } as ApiError
	}
}

export default apiPostLink
