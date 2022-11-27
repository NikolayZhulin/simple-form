import React, {ChangeEvent, FormEvent, useState} from 'react';
import logo from './logo.svg';
import './App.css';

type ValuesType = {
    firstName: string,
    lastName: string,
    email: string,
}

function App() {

    const [values, setValues] = useState<ValuesType>({
        firstName: '',
        lastName: '',
        email: '',
    })
    const [valid, setValid] = useState<boolean>(false)
    const [submitted, setSubmitted] = useState<boolean>(false)

    const onChangeFirstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValues({...values, firstName: e.currentTarget.value})
    }
    const onChangeLastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValues({...values, lastName: e.currentTarget.value})
    }
    const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
            setValues({...values, email: e.currentTarget.value})
    }

    const submitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (values.firstName && values.lastName && values.email) {
            setValid(true)
        }
        setSubmitted(true)
    }

    return (
        <div className="form-container">
            <form className={'register-form'} onSubmit={submitHandler}>
                {submitted && valid ? <div className={'success-message'}>Thank you for submitted!</div> : null}
                <input
                    onChange={onChangeFirstNameHandler}
                    value={values.firstName}
                    className={'form-field'}
                    placeholder={'First name'}
                    name={'firstName'}/>
                {submitted && !values.firstName ? <span className={'error-message'}>Please enter a first name</span> : null}
                <input
                    onChange={onChangeLastNameHandler}
                    value={values.lastName}
                    className={'form-field'}
                    placeholder={'Last name'}
                    name={'lastName'}/>
                {submitted && !values.lastName ? <span className={'error-message'}>Please enter a last name</span> : null}
                <input
                    onChange={onChangeEmailHandler}
                    value={values.email}
                    className={'form-field'}
                    placeholder={'Email'}
                    name={'Email'}/>
                {submitted && !values.email ? <span className={'error-message'}>Please enter a email</span> : null}
                <button
                    className={'form-field'}
                    type={"submit"}>Register
                </button>
            </form>

        </div>
    );
}

export default App;
