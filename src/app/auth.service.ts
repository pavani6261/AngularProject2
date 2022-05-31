export class AuthServiceHandler {
    loggedIn : any = false;

    isAuthentcated() {
        return this.loggedIn;
    }

    loginHandler() {
        this.loggedIn = true;
    }

    logouthandler() {
        this.loggedIn = false;
    }
}