
findProp = function (obj, cb) {
    for (let prop in obj) {
        if (cb(obj[prop], prop) === true) {
            return prop;
        }
    }
    return null;
};

module.exports = { findProp };
