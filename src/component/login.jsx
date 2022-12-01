const Login = () => {
  return (
    <div className="vh-100  row justify-content-center align-items-center">
      <div className="card col-12 col-md-8 col-lg-5">
        <div className="card-body">
          <h5 className="card-title text-center mb-4">Login</h5>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-4 col-form-label">
              Email
            </label>
            <div className="col-8">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-4 col-form-label">
              Password
            </label>
            <div className="col-8">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
              />
            </div>
          </div>
          <button className="btn btn-primary float-end">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
