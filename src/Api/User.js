import AXIOS from '../Config/Axios';
import headers from '../helpers/headers';
import Prefix from '../Config/ApiPrefix';

const User = {
  getAll() {
    return AXIOS.get(`${Prefix.api}/user`, { headers: headers() });
  },
  getUsersAvailable() {
    return AXIOS.get(`${Prefix.api}/users-available`, { headers: headers() });
  },
  create(data) {
    return AXIOS.post(
      `${Prefix.api}/user`,
      {
        ...data,
      },
      { headers: headers() },
    );
  },
  get(id) {
    return AXIOS.get(`${Prefix.api}/user/${id}`, { headers: headers() });
  },
  update(data) {
    return AXIOS.put(
      `${Prefix.api}/user/${data.id}`,
      {
        ...data,
      },
      { headers: headers() },
    );
  },
  remove(id) {
    return AXIOS.delete(`${Prefix.api}/user/${id}`, { headers: headers() });
  },
};

export default User;