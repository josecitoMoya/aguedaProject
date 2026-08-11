export class UserService {

    async createUser(userName: string, userEmail: string, userPassword: string) {
        //no tengo BD aun
        return {
            userName,
            userEmail
        }
    }
}