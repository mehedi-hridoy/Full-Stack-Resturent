import React, { useContext, useState } from 'react';
import authBg from '../../../assets/others/authentication.png';
import authIllustration from '../../../assets/others/authentication1.png';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa6';
import { AuthContext } from '../../../providers/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);

    const [errors, setErrors] = useState({});
    const [showPwHints, setShowPwHints] = useState(false);

        const [pw, setPw] = useState('');
        const validators = {
            name: (v) => v && v.trim().length >= 2,
            email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v),
            // Min 8 chars, at least 1 upper, 1 lower, 1 number and 1 special
            password: (v) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/.test(v),
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const nextErrors = {};
        if (!validators.name(name)) nextErrors.name = 'Please enter at least 2 characters.';
        if (!validators.email(email)) nextErrors.email = 'Enter a valid email like name@example.com';
        if (!validators.password(password)) nextErrors.password = 'Password must be 8+ chars with upper, lower, number, special.';
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length) return;

        createUser(email, password)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Account Created!',
                    text: 'Your account has been successfully created. Welcome!',
                    confirmButtonColor: '#D1A054',
                    timer: 2000
                });
                navigate('/');
            })
            .catch((err) => {
                setErrors((prev) => ({ ...prev, submit: err.message }));
                Swal.fire({
                    icon: 'error',
                    title: 'Sign Up Failed',
                    text: err.message,
                    confirmButtonColor: '#D1A054'
                });
            });
    };

    const handleGoogle = () => {
        googleSignIn()
            .then((result) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Welcome!',
                    text: `Signed in with Google as ${result.user.displayName || result.user.email}`,
                    confirmButtonColor: '#D1A054',
                    timer: 2000
                });
                navigate('/');
            })
            .catch((err) => {
                setErrors((prev) => ({ ...prev, submit: err.message }));
                Swal.fire({
                    icon: 'error',
                    title: 'Sign In Failed',
                    text: err.message,
                    confirmButtonColor: '#D1A054'
                });
            });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${authBg})`, backgroundRepeat: 'repeat' }}
        >
            <div className="max-w-6xl w-full mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left form */}
                <div className="bg-white/90 shadow-sm rounded-md p-8 md:p-10 order-2 md:order-1">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Sign Up</h2>

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block mb-2 font-medium">Name</label>
                            <input name="name" type="text" className="input input-bordered w-full h-12" placeholder="Type here" onBlur={(e)=>setErrors(p=>({...p, name: validators.name(e.target.value)? undefined: 'Please enter at least 2 characters.'}))} />
                            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Email</label>
                            <input name="email" type="email" className="input input-bordered w-full h-12" placeholder="Type here" onBlur={(e)=>setErrors(p=>({...p, email: validators.email(e.target.value)? undefined: 'Enter a valid email like name@example.com'}))} />
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">Password</label>
                                            <input
                                name="password"
                                type="password"
                                className="input input-bordered w-full h-12"
                                placeholder="Enter your password"
                                                onChange={(e)=> setPw(e.target.value)}
                                                onFocus={()=>setShowPwHints(true)}
                                                onBlur={(e)=>{setShowPwHints(false); setErrors(p=>({...p, password: validators.password(e.target.value)? undefined: 'Password must be 8+ chars with upper, lower, number, special.'}));}}
                            />
                                            {(showPwHints || errors.password) && (
                                <ul className="mt-2 text-sm space-y-1">
                                                    <li className={/.{8,}/.test(pw)? 'text-green-600':'text-gray-500'}>• Minimum 8 characters</li>
                                                    <li className={/(?=.*[A-Z])/.test(pw)? 'text-green-600':'text-gray-500'}>• At least 1 uppercase letter</li>
                                                    <li className={/(?=.*[a-z])/.test(pw)? 'text-green-600':'text-gray-500'}>• At least 1 lowercase letter</li>
                                                    <li className={/(?=.*\d)/.test(pw)? 'text-green-600':'text-gray-500'}>• At least 1 number</li>
                                                    <li className={/[^A-Za-z0-9]/.test(pw)? 'text-green-600':'text-gray-500'}>• At least 1 special character</li>
                                </ul>
                            )}
                        </div>

                        {errors.submit && <p className="text-red-600 text-sm">{errors.submit}</p>}

                        <button type="submit" className="w-full h-14 rounded-md text-lg font-semibold text-white bg-[#D1A054] border-0 border-b-4 border-[#B5892F]">
                            Sign Up
                        </button>
                    </form>

                    <p className="text-center mt-6">
                        <span className="text-gray-600">Already registered? </span>
                        <Link to="/login" className="text-[#D1A054] font-semibold link link-hover">Go to log in</Link>
                    </p>

                    <div className="text-center mt-6">
                        <p className="text-gray-700 mb-4">Or sign up with</p>
                        <div className="flex items-center justify-center gap-6">
                            <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm hover:bg-[#D1A054] hover:text-white hover:border-[#D1A054] transition-colors duration-300" disabled>
                                <FaFacebookF />
                            </button>
                            <button onClick={handleGoogle} type="button" className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm hover:bg-[#D1A054] hover:text-white hover:border-[#D1A054] transition-colors duration-300">
                                <FaGoogle />
                            </button>
                            <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm hover:bg-[#D1A054] hover:text-white hover:border-[#D1A054] transition-colors duration-300" disabled>
                                <FaGithub />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Illustration */}
                <div className="hidden md:block order-1 md:order-2">
                    <img src={authIllustration} alt="Authentication" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default SignUp;