import { get_city_list } from '../../api/city';
import * as types from './mutation-types';

export default {
    async getCityList ({commit, state}) {
        let res = await get_city_list();
        if (!res.errno) {
            commit(types.SET_CITY_LIST, res.data.data.returnValue);
        }
    }
};
