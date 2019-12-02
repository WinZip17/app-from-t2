import * as axios from "axios";
import {RegistResult} from "../components/article/Block06Register/RegForms";

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1/',
});

export const API = {
    getUsers(page, count = 6 ) {
        return instance.get(`users?page=${page}&count=${count}`)
            .then(response => {
                return response.data;
            })
    },
    getUserById(id) {
        return instance.get(`users/${id}`)
            .then(response => {
                return response.data;
            })
    },
    getPositions() {
        return instance.get(`positions`)
            .then(response => {
                return response.data;
            })
    },
    getToken() {
        return instance.get(`token`)
            .then(response => {
                return response.data.token;
            })
    },
    postUsers(data, setIsVisible, resetList, getUsers, token, updatePhoto) {
        console.log(data)
        let formData = new FormData();
        formData.append('position_id', data.position);
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('phone', data.phone);
        formData.append('photo', data.photo.file.originFileObj);
        fetch('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
            method: 'POST',
            body: formData,
            headers: {
                'Token': token, // get token with GET api/v1/token method
            },
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.success) {
                    RegistResult(setIsVisible, resetList, getUsers, updatePhoto)
                } else {
                    // proccess server errors
                }
            })
            .catch(function (error) {
                // proccess network errors
            });

    }
};
