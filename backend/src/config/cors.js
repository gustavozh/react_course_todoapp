module.exports = function(req, res, next) {
    res.header('Access-Control-ALlow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-ALlow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()
}