const baseURL = 'http://154.26.136.182:8001/USER/login/';

export const URLS = {
    BaseURL: 'http://154.26.136.182:8001/',
    Authentication: 'USER/login/',
    ProfileImage: 'media/',
    Jobs: 'USER/opproject/',
    alternativeImageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTU2fQ_VCPdrSaseCDEo_dTbhRo7_Kuoz5zQ&usqp=CAU'
};

export const stateOfRequest = {
    None: 'none',
    Success: 'success',
    Error: 'error',
    Loading: 'loading',
    Finish: 'finish'
};

export const regularExpressions = {
    ValidationEmail: /[a-z|0-9|\-|\ـ]*@[a-z]*\.[a-z]/i
};

export const ValidationMassages = {
    size: 'Must be greater than 6 characters',
    email: 'Email is not valid',
    password: 'Password is not valid',
    notFound: 'Email or password is not correct'
};

export const localStorageNames = {
    user: 'user'
};
