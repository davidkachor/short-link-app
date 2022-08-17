class StatusCodeError extends Error {
	statusCode: number

	constructor(code: number, text: string) {
		super(text)
		this.statusCode = code
	}
}

export default StatusCodeError
