import React, { useEffect, useState } from 'react';
import authBg from '../../../assets/others/authentication.png';
import authIllustration from '../../../assets/others/authentication1.png';
import { FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa6';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
  const [captchaOk, setCaptchaOk] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');

  useEffect(() => {
    // Initialize captcha with 6 chars
  try { loadCaptchaEnginge(6); } catch { /* ignore */ }
  }, []);

  const handleCaptchaChange = (e) => {
    const v = e.target.value;
    setCaptchaValue(v);
    setCaptchaOk(validateCaptcha(v));
  };

  const handleLogin = (event) => {
    event.preventDefault();
    
    if (!validateCaptcha(captchaValue)) {
      setCaptchaOk(false);
      return;
    }
    // TODO: wire to your auth flow
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${authBg})`,
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="max-w-6xl w-full mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Illustration */}
        <div className="hidden md:block">
          <img src={authIllustration} alt="Authentication" className="w-full h-auto" />
        </div>

        {/* Right Form */}
        <div className="bg-white/90 shadow-sm rounded-md p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Login</h2>

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full h-12"
                placeholder="Type here"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full h-12"
                placeholder="Enter your password"
                required
              />
            </div>

            {/* Captcha Canvas */}
            <div>
              <div className="input input-bordered w-full h-12 flex items-center">
                <div className="w-full">
                  <LoadCanvasTemplate />
                </div>
              </div>
              {/* Text input to type captcha */}
              <input
                id="captcha"
                type="text"
                value={captchaValue}
                onChange={handleCaptchaChange}
                className="input input-bordered w-full h-12 mt-3"
                placeholder="Type here"
              />
            </div>

            <button
              type="submit"
              disabled={!captchaOk}
              className="w-full h-14 rounded-md text-lg font-semibold text-white bg-[#D1A054] border-0 border-b-4 border-[#B5892F] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </form>

          <p className="text-center mt-6">
            <span className="text-gray-600">New here? </span>
            <a className="text-[#D1A054] font-semibold link link-hover">Create a New Account</a>
          </p>

          <div className="text-center mt-6">
            <p className="text-gray-700 mb-4">Or sign in with</p>
            <div className="flex items-center justify-center gap-6">
              <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm">
                <FaFacebookF />
              </button>
              <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm">
                <FaGoogle />
              </button>
              <button className="w-12 h-12 rounded-full bg-white border flex items-center justify-center shadow-sm">
                <FaGithub />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;