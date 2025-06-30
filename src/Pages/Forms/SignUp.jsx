
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../Context/AuthProvider';

import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
import { FadeLoader, PropagateLoader } from 'react-spinners';

const SignUp = () => {
    useTitle('SignUp');
    const [loading, setLoading] = useState(false)
    const [formError, setFormError] = useState('');
    const { createUser, GoogleLogIn, updateUser } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm('');
    const navigate = useNavigate();
    const [enteredEmail, setEnteredEmail] = useState('');
    const [token] = useToken(enteredEmail)

    if (token) {
        navigate('/');
    }

    // Submit Handler 
    const submitHandler = data => {
        setLoading(true);
        setFormError('');
        // console.log(data);
        createUser(data?.email, data?.password)
            .then(result => {
                const user = result?.user;
                console.log(user);
                toast.success('Registered successfully!');
                const userInfo = {
                    displayName: data?.name
                }

                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email, data.role);
                    })
                    .catch(err => console.error(err));
            })
            .catch(err => {
                console.error(err);
                setFormError(err.message);
            });
    }
    // // Saving User 
    const saveUser = (name, email, role) => {
        const user = { name, email, role };
        console.log(user);
        fetch('https://repair-mobile-market.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then((data) => {
                // console.log(data);
                setLoading(false)
                setEnteredEmail(email);
            })
    }

    return (
         <div className="hero min-h-screen py-6 mx-auto w-full flex justify-center items-center">
                <div className="grid lg:grid-cols-2 gap-6 w-full max-w-4xl p-8 shadow-lg rounded-lg">
                    {/* Left Section - Sidebar */}
                    <div className=" lg:flex flex-col items-center justify-center p-4">
                        <FaUser className='text-3xl mx-auto' />
                        <h1 className="text-3xl font-bold text-center">Register now!</h1>
                        <p className="py-6">Register Now to Explore Awesome and Special Features</p>
                    </div>
                    {/* Right Section - Form */}
                    <div className="card w-full shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit(submitHandler)}>
                                {/* Role Selection */}
                                <div>
                                    <label className="label">
                                        <span className="label-text text-lg pb-2">Select what you're Registering for:</span>
                                    </label>
                                    <select {...register("role", { required: 'role is required' })} placeholder="Register as Seller/Buyer" className="select select-bordered w-full">
                                        <option value="user">User</option>
                                        <option value="admin">Admin</option>
                                    </select>
                                </div>
                                {/* NamePassword Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: 'Name is required' })} placeholder="Your Name" className="input input-bordered w-full" />
                                    {errors.name && <p className='text-error'>{errors.name.message}</p>}
                                </div>
                                {/* Email Field */}
                                <div className="form-control w-full">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Your email" className="input input-bordered w-full" />
                                    {errors.email && <p className='text-error'>{errors.email.message}</p>}
                                </div>
                                {/* Password Field */}
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

                                {/* <input type="submit" value='Register' className='w-full btn mt-8 font-bold' /> */}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className='w-full btn mt-3 mb-1 bg-secondary text-white hover:bg-sky-500 rounded-md border-sky-500'
                                    disabled={loading}>
                                    {loading ? <PropagateLoader color='blue' size={10} /> : "Register"}
                                </button>

                                {/* Form Error */}
                                {/* <p className='text-error'>{formError}</p> */}
                                {formError && <p className='text-error text-xs text-center'>{formError}</p>}

                                {/* LogIn Link  */}
                                <p>Already have an account? Please, <Link className='link-hover text-blue-500 mt-3' to='/logIn'>Login</Link></p>

                                {/* Divider  */}
                                <div className='divider'>OR</div>

                                {/* Google Login Button */}
                                <button onClick={() => GoogleLogIn()
                                    .then(result => {
                                        const user = result.user;
                                        const buyerInfo = {
                                            name: user.displayName,
                                            email: user.email,
                                            role: 'buyer',
                                        }
                                        saveUser(buyerInfo.name, buyerInfo.email, buyerInfo.role);
                                        console.log(user);
                                        navigate('/')
                                        toast.success('Signed in Successfully!');
                                    })
                                    .then(err => console.error(err))
                                } className='btn btn-outline hover:bg-secondary w-full'><FaGoogle className='mx-5 font-bold' /><p className='lg:flex hidden'>CONTINUE WITH GOOGLE</p></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default SignUp
