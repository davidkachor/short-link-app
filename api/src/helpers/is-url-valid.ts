function isUrlValid(url: string) {
	const regex = // eslint-disable-next-line max-len
		/^(http(s)?:\/\/)?(www\.)?[a-z0-9]+[a-z0-9-]+(\.[a-z0-9]+[a-z0-9-]+)+(\.a-z1-9-){0,64}(:[0-9]+)?(\/[a-zA-Z0-9-_=?.$%&@#!]+)*\/?$/gm

	return regex.test(url)
}

export default isUrlValid
