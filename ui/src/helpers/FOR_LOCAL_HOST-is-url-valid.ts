const FOR_LOCAL_HOST_IsUrlValid = (url: string) => {
    if (url.includes('localhost:')) return true

    const regexp =
        /^(http(s)?:\/\/)?(www\.)?[a-z0-9]+[a-z0-9-]+(\.[a-z0-9]+[a-z0-9-]+)+(\.a-z1-9-){0,64}(:[0-9]+)?(\/[a-zA-Z0-9-_=?.$%&@#!]+)*\/?$/gm
    return regexp.test(url)
}

export default FOR_LOCAL_HOST_IsUrlValid