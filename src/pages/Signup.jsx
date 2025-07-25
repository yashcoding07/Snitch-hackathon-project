import { Link } from 'react-router-dom';
import "./Signup.css";
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const heroText = document.querySelector('.loginherotext p');

        if (heroText) {
            const text = heroText.textContent;
            const words = text.split(' ');

            // Wrap each word in a span with class 'word'
            heroText.innerHTML = words.map(word =>
                `<span class="word">${word}</span>`
            ).join(' ');
        }
    }, []);

    const submitHandler = (data) => {
        reset();
    }

    return (
        <div className='login'>
            <div className='loginhero'>
                <img src="public/Login/loginandsignup.jpg" alt="Fashion Hero" />
                <div className='loginherotext'>
                    <p>
                        "SNITCH makes style effortless — from your first click to your first outfit. Join us and experience premium fashion made easy."
                    </p>
                </div>
            </div>
            <div className='loginform'>
                <h1>Create Account</h1>
                <p style={{marginBottom: "1rem"}}>Let's get you started with SNITCH</p>
                <form onSubmit={handleSubmit(submitHandler)}>
                    <div className='loginemail'>
                        <label htmlFor="name">Full Name</label>
                        <input
                            {...register("name", {
                                required: { value: true, message: "Full Name is required" },
                                maxLength: { value: 20, message: "Name cannot exceed 20 characters" }
                            })}
                            type="text"
                            placeholder='Enter your full name'
                        />
                        {errors?.name && <small style={{ color: "red" }} role="alert">{errors.name.message}</small>}
                    </div>

                    <div className='loginemail'>
                        <label htmlFor="email">Email</label>
                        <input {...register("email", {
                                required: { value: true, message: "Email is required" }
                            })} type="email" placeholder='Enter your email' />
                            {errors?.email && <small style={{ color: "red" }} role="alert">{errors.email.message}</small>}
                    </div>

                    <div className='loginpassword'>
                        <label htmlFor='password'>Password</label>
                        <input {...register("password", {
                                required: { value: true, message: "enter your password" }
                            })} type="password" placeholder='Create a password' />
                            {errors?.password && <small style={{ color: "red" }} role="alert">{errors.password.message}</small>}
                    </div>

                    <div className='loginpassword'>
                        <label htmlFor='confirmPassword'>Confirm Password</label>
                        <input {...register("confirmPassword", {
                                required: { value: true, message: "enter your password" }
                            })} type="password" placeholder='Confirm your password' />
                            {errors?.confirmPassword && <small style={{ color: "red" }} role="alert">{errors.confirmPassword.message}</small>}
                    </div>

                    <div className='loginbuttons'>
                        <button className='signinbtn'>Create Account</button>
                        <button className='google'>
                            <img src='public/Login/google.png' alt="Google Icon" />
                            Sign up with Google
                        </button>
                    </div>
                    <p className='switchpage'>
                        Already have an account? <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>

        </div>
    );
};

export default Signup;
