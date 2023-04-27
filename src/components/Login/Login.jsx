import React from 'react';

const Login = () => {
    return (
        <div>
            <h3>this is login</h3>
            <form>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name='email' className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />

                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' className="form-control" id="password" placeholder="Password" required />
                </div>
                <div className="form-check mb-3">
                    <input type="checkbox" className="form-check-input" id="rememberMe" />
                    <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;