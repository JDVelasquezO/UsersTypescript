var User = /** @class */ (function () {
    function User(_fullName, _age, _type) {
        if (_fullName === void 0) { _fullName = 'Not name set'; }
        if (_age === void 0) { _age = 'Not age set'; }
        this._fullName = _fullName;
        this._age = _age;
        this._type = _type;
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fullName) {
            this._fullName = fullName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (type) {
            this._type = type;
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
export { User };
