import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { HiKey, HiMail, HiOutlineKey, HiOutlineMail } from 'react-icons/hi';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import { toast } from 'react-toastify';
import useTitle from '../../Hooks/useTitle';
import { PropagateLoader } from 'react-spinners';

const LogIn = () => {
    useTitle('LogIn');
    const [formError, setFormError] = useState('');
    const { user, signIn, reset } = useContext(AuthContext);
    const { register, formState: { errors }, handleSubmit } = useForm('');
    const [loading, setLoading] = useState(false);
    const [showAdminInfo, setShowAdminInfo] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const [loggedInEmail, setLoggedInEmail] = useState('');
    const [token] = useToken(loggedInEmail);

    if (token) {
        navigate(from, { replace: true });
    }

    // Submit Handler 
    const submitHandler = async (data) => {
        setLoading(true);
        try {
            await signIn(data.email, data.password);
            toast.success('Logged in Successfully!');
            setLoggedInEmail(data.email);
        } catch (err) {
            setFormError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // Password Reset 
    const handlePasswordReset = async () => {
        try {
            await reset();
            toast.success('Password reset email sent!');
        } catch (err) {
            setFormError(err.message);
        }
    };

    return (
        

         <div className="hero min-h-screen py-6 mx-auto w-full flex justify-center items-center">
            <div className="grid lg:grid-cols-2 gap-6 w-full max-w-4xl shadow-lg p-8  rounded-lg">
                <div className=" lg:flex flex-col items-center justify-center p-4 ">
                    <FaUser className='text-3xl mx-auto ' />
                    <h1 className="text-3xl font-bold text-center">Login now!</h1>
                    <p className="py-6">Register Now to Explore Awesome and Special Features</p>
                    <div className='mx-auto'>
                        <button onClick={() => setShowAdminInfo(!showAdminInfo)} className="text-md text-secondary flex items-center justify-center">Admin Login Info ▼</button>
                        {showAdminInfo && (
                            <div className='text-xs p-2 border rounded-md mt-2 bg-gray-100'>
                                <p><HiOutlineMail className='inline mr-1' /> ad@min.com</p>
                                <p><HiOutlineKey className='inline mr-1' /> iamAdmin</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="card w-full ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(submitHandler)}>
                            <h2 className='text-2xl font-semibold text-center'>LogIn</h2>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: 'Email is required' })} placeholder="Your email" className="input input-bordered w-full" />
                                {errors.email && <p className='text-error'>{errors.email.message}</p>}
                            </div>
                            <div className="form-control w-full mt-2">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: 'Password is required',
                                    pattern: { value: /(?=.*[a-z])(?=.*[A-Z])/, message: 'Password must contain uppercase and lowercase letters' },
                                    minLength: { value: 6, message: 'Password must be at least 6 characters long' }
                                })} placeholder="Your Password" className="input input-bordered w-full mb-2" />
                                {errors.password && <p className='text-error'>{errors.password.message}</p>}
                            </div>
                            <label className="mt-1">Forgot password? <span onClick={handlePasswordReset} className="link-hover link-error cursor-pointer">Reset it</span></label>
                            <button 
                                type="submit" 
                                className='w-full btn my-3  font-bold bg-secondary text-gray-100 hover:bg-sky-500 shadow-md '
                                disabled={loading}>
                                {loading ? <PropagateLoader color='blue' size={10} /> : "LogIn"}
                            </button>
                            {formError && <p className='text-error'>{formError}</p>}
                            <p>New to Last Book? <Link className='text-secondary link-hover' to='/signUp'>SignUp</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LogIn
