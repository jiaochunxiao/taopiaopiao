import { fetch } from '@/util/axios';

export function getCityList(url, params) {
    return fetch('/movie/city',params);
}