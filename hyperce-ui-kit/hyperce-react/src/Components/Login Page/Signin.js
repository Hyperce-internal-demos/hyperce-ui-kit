import React from 'react';
import Demo from '../Login Page/images/sidepic.png'
import { Link} from 'react-router-dom';

export default function Signin() {
  return (
    <div className="relative top-10 sm:grid sm:grid-cols-2 m-10 bg-gray-900  xl:shadow-2xl shadow-indigo-800 rounded-3xl">
    <div className="p-3 xl:p-20">
        <div className="rounded-xl border-none bg-white shadow-lg shadow-gray-200">
            <div className="p-3 sm:p-10">
                <div className="text-center">
                    <h1 className="block text-base sm:text-xl font-bold text-gray-800">Sign in</h1>
                    <p className="mt-2 text-xs sm:text-sm text-gray-600">
                        Don't have an account yet?&nbsp;
                        <Link to="/signup" className="text-blue-600 decoration-2 hover:underline font-medium" >
                            Sign up here
                        </Link>
                    </p>
                </div>
                
                <div className="mt-3 mb-3 ">
                    <button type="button" className="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border bg-white  text-base text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="28" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        <span className="text-base">Sign in with Google</span>
                    </button>
                    
                    <div className="py-3 flex items-center text-xs lg:text-base text-gray-400 uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ml-6">Or</div>
                    
                    <form>
                        <div className="grid gap-y-4">
                            <div>
                                <label for="email" className="block text-sm mb-2">Email address</label>
                                <div className="relative">
                                    <input type="email" id="email" name="email" className="py-2 px-2 mb-2 block w-full border  border-gray-300 rounded-md text-sm focus:border-blue-200 focus:ring-blue-500" required aria-describedby="email-error"/> 
                                </div>
                            </div>
                            

                            <div>
                                <div className="flex justify-between items-center">
                                    <label for="password" className="block text-sm mb-2">Password</label>
                                    <a className="text-sm text-blue-600 decoration-2 hover:underline font-medium" href="www.example.com">Forgot password?</a>
                                </div>
                                <div className="relative">
                                    <input type="password" id="password" name="password" className="py-2 px-2 mb-2 block w-full border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500" required aria-describedby="password-error" />
                                </div>
                            </div>
                            
                             {/* Checkbox */}
                            <div className="flex items-center mb-5">
                                <div className="flex">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="w-3 h-3 border-gray-200 rounded text-blue-600 focus:ring-blue-500" />
                                </div>
                                <div className="ml-3">
                                    <label for="remember-me" className="text-sm">Remember me</label>
                                </div>
                            </div>
                            
                            {/* Sign in Button */}
                            <button type="submit" className="py-2 px-3 w-full rounded-md border border-transparent text-base font-semibold bg-blue-500 text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500">Sign in</button>
                        </div>
                    </form>
                    {/* End Form */}
                </div>
            </div> 
        </div>
    </div>
    {/* Second Column */}
    <div className="bg-white hidden sm:block rounded-3xl">
        <img src={Demo} alt="demo" className="w-full h-full rounded-e-3xl" />
       </div>
</div>

  )
}
