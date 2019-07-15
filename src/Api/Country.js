import AXIOS from '../Config/Axios';
import headers from '../helpers/headers';

const Country = {
    getAll() {
        return AXIOS.get('/country', { headers: headers() });
    },
    search(term) {
        return AXIOS.get(`/search-country?term=${term}`, { headers: headers() });
    },
};

export default Country;