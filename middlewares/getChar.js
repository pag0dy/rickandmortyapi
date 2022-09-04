const getChar = (request, response, next) => {
    console.log(request.params)
    next();
}

module.exports = getChar;