import {fetchUtils} from 'react-admin';
import {stringify} from 'query-string';
import {getWithExpiry} from "../../utils/localStorage";

const apiUrl = `${process.env.REACT_APP_API_URL}/api`;
// const httpClient = fetchUtils.fetchJson;

const httpClient = (url: any, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = getWithExpiry('access_key');
    options.headers.set('Authorization', `Bearer ${token}`);
    return fetchUtils.fetchJson(url, options);
}

export default {
    getList: (resource: any, params: any) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([page, perPage]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;


        return httpClient(url).then(({headers, json}) => {
            return {
                data: json.data.map((resource: any) => {
                    return {...resource, id: resource._id}
                }),
                total: parseInt(headers.get('content-range')?.split('/').pop() || '', 10),
            }
        });
    },
    getOne: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({json}) => ({
            data: {...json, id: json._id}, //!
        })),

    getMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({json}) => ({
            data: json.map((resource: any) => ({...resource, id: resource._id})),
        }));
    },

    getManyReference: (resource: any, params: any) => {
        const {page, perPage} = params.pagination;
        const {field, order} = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({headers, json}) => ({
            data: json.map((resource: any) => ({...resource, id: resource._id})),
            total: parseInt(headers.get('content-range')?.split('/').pop() || '', 10),
        }));
    },

    update: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PATCH',
            body: JSON.stringify(params.data),
        }).then(({json}) => {
            const resJson = {...json.data, id: json.data._id}
            return {data: resJson}
        }),

    updateMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },

    create: (resource: any, params: any) =>
        httpClient(`${apiUrl}/${resource}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({
            data: {...params.data, id: json._id},
        })),

    delete: (resource: any, params: any) => {
        console.log(resource)
        console.log(params)
        return httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
            body: '',
        }).then(({json}) => {
            console.log(json)
            const resJson = {...json.data, id: json.data._id}
            return {
                data: resJson
            }
        })
    },

    deleteMany: (resource: any, params: any) => {
        const query = {
            filter: JSON.stringify({id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
            body: JSON.stringify(params.data),
        }).then(({json}) => ({data: json}));
    },
};