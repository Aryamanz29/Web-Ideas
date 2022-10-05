import React, {useState} from 'react'
import '../styles/output.css'
import {Link} from 'react-router-dom';
import {get, post} from '../scripts/requests';


function Login() {
  if (localStorage.getItem('token')){
      window.location = '/'
  }
  
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const login = async (e) => {
    e.preventDefault()
      
    const res = await post('https://recruiteasy.herokuapp.com/api-token-auth/', null, {username: email, password: password})

    if (res.token){
        const user = await get('https://recruiteasy.herokuapp.com/api/user/', res.token)

        localStorage.setItem('token', res.token)
        localStorage.setItem('user', user[0].id)
        localStorage.setItem('name', user[0].first_name)

        window.location = '/'
    }
  }

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">

            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            </div>

            <h3 className="text-2xl font-bold text-center">Login to your account</h3>

            <form onSubmit={login}>
                <div className="mt-4">
                    <div>
                        <label className="block" htmlFor="email">Email</label>
                        <input type="email" placeholder="Email" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(val) => {setEmail(val.target.value)}} />
                    </div>

                    <div className="mt-4">
                        <label className="block">Password</label>
                        <input type="password" placeholder="Password" className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" onChange={(val) => {setPassword(val.target.value)}} />
                    </div>

                    <div className="flex items-baseline justify-between">
                        <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Login</button>
                        <Link to="/register" className="text-sm text-blue-600 hover:underline">Create an Account</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>
    
    <div>
        <img style={{width: "100px", height: "40px"}} src="images/login.svg" alt="" />
    </div>
    </>
  )
}

export default Login