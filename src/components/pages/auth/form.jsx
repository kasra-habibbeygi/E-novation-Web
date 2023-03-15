import validator from 'validator';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authStateHandler, infoHandler } from '@/src/state-manager/reducers/user';

// Assets
import { AuthField } from './form.style';
import ViewEye from '@/src/assets/images/icons/view.svg';
import HideEye from '@/src/assets/images/icons/hide.svg';

// Component
import Input from '../../form-group/input';
import Button from '../../form-group/button';

// Tools
import { Errors } from '@/src/utils/constasts';

// API
import { LoginApi } from '@/src/api-request/auth';
import Image from 'next/image';

const LoginForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [errorText, setErrorText] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordType, setPasswordType] = useState('hide');
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
            setErrorText(Errors.EMPTY_FIELD);
        } else if (!validator.isEmail(inputValues.email)) {
            setErrorText(Errors.IS_NOT_EMAIL);
        } else {
            setLoading(true);
            LoginApi(inputValues)
                .then(res => {
                    localStorage.setItem('userInfo', JSON.stringify(res.data));
                    dispatch(authStateHandler(true));
                    dispatch(infoHandler(res.data));
                    router.push('/current-jobs');
                })
                .catch(e => {
                    if (e.response.status === 409) {
                        setErrorText('Email or password is invalid !');
                    }
                })
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
            <div className='password_field'>
                <Image
                    src={passwordType === 'show' ? ViewEye : HideEye}
                    alt=''
                    width={50}
                    onClick={() => setPasswordType(passwordType === 'show' ? 'hide' : 'show')}
                />
                <Input
                    label='Password'
                    name='password'
                    placeholder='Please enter your password'
                    type={passwordType === 'show' ? 'text' : 'password'}
                    valueGetter={inputValueHandler}
                    value={inputValues.password}
                />
            </div>
            <Button text='Login' loading={loading} color='warning' clickHandler={submitHandler} />
            <p className='alerts'>{errorText}</p>
        </AuthField>
    );
};

export default LoginForm;
