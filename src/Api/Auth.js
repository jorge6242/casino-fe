import AXIOS from '../Config/Axios';
import Prefix from '../Config/ApiPrefix';

const Auth = {
    login(data) {
        return AXIOS.post(`${Prefix.api}/login`, {
            ...data
        });
    },
}

export default Auth;