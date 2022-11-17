export default function LoginRegister() {
  return (
    <div className="login-container">
      <p className="title">Login</p>
      <p className="welcome-message">
        Welcome to the private area. Please, provide login credential to proceed
        and have access to all our services
      </p>

      <form className="login-form">
        <div className="form-control">
          <input type="text" placeholder="Username" />
          <i className="fas fa-user"></i>
        </div>
        <div className="form-control">
          <input type="password" placeholder="Password" />
          <i className="fas fa-lock"></i>
          <p className="forgot-password">Forgot Password?</p>
        </div>

        <button className="submit">Login</button>
      </form>

      <div className="social-login">
        <label>Or login with</label>
        <div className="social-container">
          <button>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button>
            <i className="fab fa-google"></i>
          </button>
          <button>
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </div>

      <div className="additional-action">
        <p>Not an account? Sign in</p>
      </div>
    </div>
  );
}
