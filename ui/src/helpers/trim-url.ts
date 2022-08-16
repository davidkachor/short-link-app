const trimUrl = (url: string) => {
	if (url.includes('https://')) return url.split('https://')[1]
	if (url.includes('http://')) return url.split('http://')[1]
	return url
}

export default trimUrl
