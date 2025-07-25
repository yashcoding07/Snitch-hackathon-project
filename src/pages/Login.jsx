import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Login.css';
import { useEffect } from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    reset(); 
  };

    useEffect(() => {
        const heroText = document.querySelector('.loginherotext p');

        if (heroText) {
            const text = heroText.textContent;
            const words = text.split(' ');

            heroText.innerHTML = words.map(word =>
                `<span class="word">${word}</span>`
            ).join(' ');
        }
    }, []);



  return (
    <div className='login'>
      <div className='loginform'>
        <h1>Welcome Back</h1>
        <p className='wel'>Welcome back! Please enter your details</p>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='loginemail'>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              {...register("email", {
                required: { value: true, message: "Email is required" },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address"
                }
              })}
            />
            {errors?.email && <small style={{ color: "red" }}>{errors.email.message}</small>}
          </div>

          <div className='loginpassword'>
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              {...register("password", {
                required: { value: true, message: "Password is required" },
                minLength: { value: 6, message: "Password must be at least 6 characters" }
              })}
            />
            {errors?.password && <small style={{ color: "red" }}>{errors.password.message}</small>}
          </div>

          <div className='logincheck'>
            <span>
              <input type="checkbox" />Remember me
            </span>
            <p>Forgot password</p>
          </div>

          <div className="loginbuttons">
            <button type="submit" className='signinbtn'>Sign in</button>
            <button className='google' type="button">
              {/* Updated image path */}
              <img src='public/Login/google.png' alt="Google Icon" />
              Sign in with Google
            </button>
          </div>
           <p className='switchpage'>
            Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
        </form>
      </div>

      <div className='loginhero'>
        {/* Updated image path */}
        <img src="public/Login/loginandsignup.jpg" alt="Fashion Hero" />
        <div className='loginherotext'>
          <p>
            "For those who love a tactile experience, SNITCH stores provide an immersive way to engage with premium fabrics, tailored fits, and contemporary aesthetics."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;