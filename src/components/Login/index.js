import React from 'react'
import { userLogin } from '../../services'

export const Login = () => {
    return (
        <>
            <h3>Please login to continue</h3>
            <form onSubmit={(e) => userLogin(e.target.username.value, e.target.password.value)}>
                <label>
                    <h3>Username: </h3>
                    <input type="text" name="username" />
                </label>
                <label>
                    <h3>Password: </h3>
                    <input type="password" name="password" />
                </label>
                <br />
                <br />
                <input type="submit" name="submit" value="Submit" width="1000px" />
            </form>
        </>
    )
}