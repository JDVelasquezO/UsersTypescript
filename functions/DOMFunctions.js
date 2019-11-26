var DOMFunction = /** @class */ (function () {
    function DOMFunction() {
    }
    /**
     * resetForm
     */
    DOMFunction.resetForm = function (form) {
        form.getElementsByTagName('input')[0].focus();
        for (var index = 0; index < form.getElementsByTagName('input').length; index++) {
            form.getElementsByTagName('input')[index].value = '';
        }
    };
    return DOMFunction;
}());
export { DOMFunction };
