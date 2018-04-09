import * as types from './mutation-types';

export default {
    [types.SET_CITY_LIST] (state, cityList) {
        state.cityList = cityList;
    }
};
