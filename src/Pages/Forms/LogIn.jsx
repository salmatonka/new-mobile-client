import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiKey, HiMail, HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
const LogIn = () => {
    useTitle('LogIn');
    const [formError, setFormError] = useState('');
    const { user, signIn, reset } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [token] = useToken(loggedInEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    // Submit Handler 
    const submitHandler = data => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Logged in Successfully!!');
                setLoggedInEmail(data.email);
            })
            .catch(err => {
                console.error(err.message);
                setFormError(err.message);
            })
    }



    // Password Reset 
    return (
        <div className="hero min-h-screen py-24 mx-auto lg:w-full">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="text-center lg:text-left">
                    <FaUser className='text-5xl mx-auto' />
                    <h1 className="text-5xl font-bold text-center">Login now!</h1>
                    <p className="py-6">Register Now to Explore Awesome and Special Features</p>
                    <p><strong>Role as an Admin</strong>
                        <div className='flex items-center my-4'>
                            <HiOutlineMail className='mr-2' /> <span className='border rounded-md px-2 border-primary'>ad@min.com</span> <br />
                        </div>
                        <div className='flex items-center'>
                            <HiOutlineKey className='mr-2' /> <span className='border rounded-md px-2 border-primary'>iamAdmin</span>
                        </div>
                    </p>
                </div>
                <div className="card w-full shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <h2 className='text-4xl font-semibold text-center'>LogIn</h2>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Your email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-error'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: 'Password is required',
                                    pattern: { value: /(?=.*[a-z])(?=.*[A-Z])/, message: 'Password must contain Uppercase and LowerCase' },
                                    minLength: { value: 6, message: 'Password must be 6 characters or long' }
                                })} placeholder="Your Password" className="input input-bordered w-full" />
                                {errors.password && <p className='text-error'>{errors.password.message}</p>}
                            </div>
                            <label>forgotten password? <span
							 onClick={reset(user?.email)
                                .then(() => { })
                                .then(err => console.error(err))
                            } className="link-hover link-error">reset it</span></label>
                            <input type="submit" value='Login' className='w-full btn mt-8 font-bold' />
                            <p className='text-error'>{formError}</p>
                            <p>New to Last Book? Please, <Link className='text-blue-500 link-hover mt-3' to='/signUp'>Register</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LogIn
