export class AuthService {
  loddedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loddedIn);
      }, 8000);
    });

    return promise;
  }

  login() {
    this.loddedIn = true;
  }

  logout() {
    this.loddedIn = false;
  }

}
