import * as types from './mutation-types';
console.log(types);

export default {
    [types.SET_CITY_LIST] (state, cityList) {
        console.log(cityList);
        console.log(state);
        state.cityList = cityList;
    }
};
