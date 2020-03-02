export default {
    loginState: false,
    login() {
        this.loginState = true;
    },
    unLogin() {
        this.loginState = false;
    }
}