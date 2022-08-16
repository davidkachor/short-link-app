const getHash = (url: string) => {
	const arr = url.split('/')
	return arr[arr.length - 1]
}

export default getHash
