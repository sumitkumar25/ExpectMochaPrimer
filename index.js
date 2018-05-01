var addAsync = (a, b, callback) => {
    setTimeout(function() {
        callback(a + b);
    }, 1000);
}
var sqrAsync = (a, callback) => {
    setTimeout(function() {
        callback(a * a);
    }, 1000);
}
module.exports.addAsync = addAsync;
module.exports.sqrAsync = sqrAsync;