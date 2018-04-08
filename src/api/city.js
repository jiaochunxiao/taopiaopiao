import { fetch } from '@/util/axios';

export function get_city_list(url, params) {
    return fetch('/movie/city',params);
}