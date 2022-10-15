import React, {useState} from 'react';
import '../styles/output.css';
import {Link} from 'react-router-dom';
import {get, post} from '../scripts/requests';
import image from '../assets/hire.png';


function Register() {
  if (localStorage.getItem('token')){
      window.location = '/'
  }

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [pass, setPass] = useState()

  const register = async (e) => {
    e.preventDefault()

    if (password === pass){
        const res = await post('https://recruiteasy.herokuapp.com/api/register/', null, {username: email, email: email, first_name: name, password: password})
        window.location = '/login'
    }
    else{
        return null
    }
  }


  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-mono">

    {/* Container */}
        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">

                {/* Row */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                    {/* Col */}
                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg" style={{backgroundImage: `url(${image})`}} />

                    {/* Col */}
                    <div className="w-full lg:w-6/12 bg-white p-5 rounded-lg lg:rounded-l-none">

                        <h3 className="pt-4 text-2xl text-center">Create an Account!</h3>

                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700">
                                    Company Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    type="text"
                                    placeholder="Company Name"
                                    onChange={(val) => setName(val.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block mb-2 text-sm font-bold text-gray-700" for="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                    id="email"
                                    type="email"
                                    placeholder="Email"
                                    onChange={(val) => setEmail(val.target.value)}
                                />
                            </div>

                            <div className="mb-4 md:flex md:justify-between">
                                <div className="mb-4 md:mr-2 md:mb-0">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="password">
                                        Password
                                    </label>
                                    <input
                                        className="w-52 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        id="password"
                                        type="password"
                                        placeholder="******************"
                                        onChange={(val) => setPassword(val.target.value)}
                                    />
                                </div>

                                <div className="md:ml-2">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                        Confirm Password
                                    </label>
                                    <input
                                        className="w-52 px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                                        id="c_password"
                                        type="password"
                                        placeholder="******************"
                                        onChange={(val) => setPass(val.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="mb-6 text-center">
                                <button
                                    className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={register}
                                >
                                    Register Account
                                </button>
                            </div>

                            <hr className="mb-6 border-t" />

                            <div className="text-center">
                                <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="#">
                                    Forgot Password?
                                </Link>
                            </div>

                            <div className="text-center">
                                <Link className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" to="/login">
                                    Already have an account? Login!
                                </Link>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register