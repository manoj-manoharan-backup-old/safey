function safey(obj) {

    var self = this;

    self.obj = obj;

    return function (key, default_value, strict) {

        strict = (strict) ? true : false;

        key = (key) ? key : "";

        return key.split('.').reduce(function (nestedObject, key) {
            try {
                if (nestedObject && key in nestedObject) {
                    return nestedObject[key];
                }
            } catch (e) {
                if (strict) {
                    console.error("\x1b[31mWARN: ", e.toString(), '\n', "\x1b[0m");
                }
            }

            return (strict) ? default_value || undefined : default_value || "";

        }, self.obj);
    }
}

module.exports = safey;




