export default class Utl {
    static generateGUID() {
        function S4() {
            return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
        }

        return S4() + S4();
    }

    static formatCurrency(cents: number) {
        return `$${Math.floor(cents / 100)}${cents % 100 ? `.${cents % 100}` : '.00'}`
    }
}