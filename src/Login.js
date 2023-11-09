import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="container">
                <form>
                    <div className="mb-3">
                        <lable for="exampleInputEmail" class="form-label">Email</lable>
                        <input type="email" class="form-control" id="exampleInputEmail" placeholder="Enter your email" />
                    </div>

                    <div className="mb-3">
                        <lable for="exampleInputPassword">password</lable>
                        <input type="email" class="form-control" id="exampleInputName" placeholder="password" />
                    </div>
                    <div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default Login
