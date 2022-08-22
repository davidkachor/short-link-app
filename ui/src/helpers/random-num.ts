const randomNum = (start = 0, end = 100) => {
    return Math.floor(Math.random() * end + 1) + start
}

export default randomNum