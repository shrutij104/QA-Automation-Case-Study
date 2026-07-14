import axios from 'axios';

export class AuthApi {

    async login(email: string, password: string) {

        const response = await axios.post(
            "https://app.workflowpro.com/api/login",
            {
                email,
                password
            }
        );

        return response.data;
    }

}