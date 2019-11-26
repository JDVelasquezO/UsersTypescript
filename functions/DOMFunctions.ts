export class DOMFunction {
    
    /**
     * resetForm
     */
    public static resetForm(form: Element) {

        form.getElementsByTagName('input')[0].focus();
        for (let index = 0; index < form.getElementsByTagName('input').length; index++) {
            form.getElementsByTagName('input')[index].value = '';
        }
    }
}