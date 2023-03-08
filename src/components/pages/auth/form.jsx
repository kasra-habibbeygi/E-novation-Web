import { useState } from 'react';
import { toast } from 'react-hot-toast';
import validator from 'validator';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authStateHandler } from '@/src/state-manager/reducers/user';

// Assets
import { AuthField } from './form.style';

// Component
import Input from '../../form-group/input';
import Button from '../../form-group/button';

// Tools
import { Errors } from '@/src/utils/constasts';

// API
import { LoginApi } from '@/src/api-request/auth';

const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [inputValues, setInputValues] = useState({
        email: '',
        password: ''
    });

    const inputValueHandler = e => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        });
    };

    const submitHandler = () => {
        if (validator.isEmpty(inputValues.email) || validator.isEmpty(inputValues.password)) {
            toast.error(Errors.EMPTY_FIELD);
        } else if (!validator.isEmail(inputValues.email)) {
            toast.error(Errors.IS_NOT_EMAIL);
        } else {
            setLoading(true);
            LoginApi(inputValues)
                .then(() => {
                    dispatch(authStateHandler(true));
                    router.push('/dashboard');
                })
                .catch(() => {})
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return (
        <AuthField>
            <Input
                label='Email'
                name='email'
                placeholder='Please enter your email'
                valueGetter={inputValueHandler}
                value={inputValues.email}
            />
            <Input
                label='Password'
                name='password'
                placeholder='Please enter your password'
                type='password'
                valueGetter={inputValueHandler}
                value={inputValues.password}
            />
            <Button text='Login' loading={loading} color='warning' clickHandler={submitHandler} />
        </AuthField>
    );
};

export default LoginForm;
