import {Component} from 'react'
import axios from 'axios'

let instance = axios.create()
instance.defaults.headers['Content-Type'] = undefined


export const backEnd = /*`${window.location.protocol}` +*/ "https://" + (process.env.REACT_APP_BACKEND || 'jsonplaceholder.typicode.com');

class HttpRequest extends Component {


    static post(url, params = {}, config = null) {
        config = Object.assign({}, config, {
            withCredentials: true, headers: {
                'Content-Type': 'application/json'
            }
        })
        return instance.post(backEnd + url, params, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status)
                return payload
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static put(url, params = {}, config = null) {
        config = Object.assign({}, config, {
            withCredentials: true, headers: {
                'Content-Type': 'application/json'
            }
        })
        return instance.put(backEnd + url, params, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status)
                return payload
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static patch(url, params = {}, config = null) {
        config = Object.assign({}, config, {
            withCredentials: true, headers: {
                'Content-Type': 'application/json'
            }
        })
        return instance.patch(backEnd + url, params, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status)
                return payload
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static head(url, params = {}, config = null) {
        config = Object.assign({}, config, {
            withCredentials: true, headers: {
                'Content-Type': 'application/json'
            }
        })
        return instance.head(backEnd + url, params, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status)
                return payload
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static delete(url) {
        return instance.delete(backEnd + url, {
            withCredentials: true
        })
            .then(payload => {
                return payload
            })
            .catch(error => {
                if (error.response) {

                    return Promise.reject(error.response.status)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static get(url, urlParams = {}, body = {}) {
        return instance.get(backEnd + url, {
            params: urlParams, headers: {'x-api-key': 'DEMO-API-KEY'}, ...{data: body}
        })
            .then(payload => {
                return payload
            })
            .catch(error => {
                if (error.response) {

                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

    static postFile(url, formData) {
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
            withCredentials: true,
        };
        return instance.post(backEnd + url, formData, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status);
                return payload;
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            });
    };

    static fileUpload(url, formData, event) {

        const config = {
            withCredentials: true,
            headers: {
                'content-type': 'multipart/form-data'
            },
            onUploadProgress: function (progressEvent) {
                let percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                HttpRequest.eventEmitterClient.emit(event, percentCompleted)
            }
        }
        return instance.post(backEnd + url, formData, config)
            .then(payload => {
                if (payload.status !== 200) return Promise.reject(payload.status)
                return payload
            })
            .catch(error => {
                if (error.response) {
                    if (error.response.status === 500) return Promise.reject({data: {error_message: 'Server Error!'}})
                    else if (error.response.status === 404) return Promise.reject({data: {error_message: error.response.data.error_message}})
                    return Promise.reject(error.response)
                } else if (error) {

                    return Promise.reject(error)
                } else {
                    return Promise.reject(400)
                }
            })
    }

}

export default HttpRequest

