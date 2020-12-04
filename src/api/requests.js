import * as axios from "axios";

const defaultOptions = {
    baseURL: "https://localhost:44315/api/",
    allowCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
};

let instance = axios.create(defaultOptions);

instance.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const getProblems = () => {
    return instance.get('Problems/GetProblemsPreview'
    ).then(response => {
        return response.data;
    });
}
export const getProblem = (id) => {
    return instance.get('Problems/GetProblem/' + id
    ).then(response => {
        return response.data;
    });
}
export const getAuthToken = (usr, pass) => {
    return new Promise(function (resolve, reject) {
        instance.get('Auth/GetToken/usr=' + usr + "/pass=" + pass)
        .then(response => {
            if (response.status === 200) {
                debugger;
                resolve(response.data);
            }
        }).catch(e => {
            reject(e.status);
        })
    });
}