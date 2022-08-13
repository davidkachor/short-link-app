const urlValidation: (url: string) => boolean = url => {
	const regexp = //eslint-disable-next-line
		/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/=]*)/gm

	return regexp.test(url)
}

export default urlValidation
