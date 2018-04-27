module.exports = {
    '/': '/templates/index.html',
    '/tables': '/templates/tables.html',
    '/reservation': '/templates/reserve.html',
    getRoute : function(res, req){
        const here = __dirname;
        return res.sendFile(here + this[req.url]);
    }
}