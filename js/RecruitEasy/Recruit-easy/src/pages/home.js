import React, {useEffect, useState} from 'react';
import '../styles/output.css';
import { Link } from 'react-router-dom';
import {get, post} from '../scripts/requests';


function Home() {
  if (!localStorage.getItem('token')){
      window.location = '/login'
  }

  const [interview, setInterview] = useState([])
  const token = localStorage.getItem('token')

  useEffect(() => {
      (async () => {
        const res = await get('https://recruiteasy.herokuapp.com/api/interview/', token)

        setInterview(res)
      })()
  }, [])

  const logout = () => {
      localStorage.removeItem('token')
      window.location = '/login'
  }

  return (
    <div className='bg-gray-100 h-screen'>
        <header className="text-blue-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <a className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
                <img src='images/logo.png' style={{width: '70px'}} />
                <span className="ml-3 text-xl">RecruitEasy</span>
                </a>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-9 text-lg hover:text-blue-900" href="#">Profile</a>
                <a className="mr-9 text-lg hover:text-blue-900" href="#">Archives</a>
                </nav>

                <button className="inline-flex text-lg items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 mr-4 md:mt-0" onClick={logout}>Logout</button>
            </div>
        </header>

        {/* Card */}

        <div className="flex flex-wrap pl-8 mt-6">
            <div className="block p-10 rounded-lg shadow-lg bg-white max-w-sm mr-12 mb-10 w-80">
                <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Create an Interview</h5>

                <p className="text-gray-700 text-base mb-4">
                Create an Interview by clicking on this button.
                </p>

                <Link to='/create'><button type="button" className=" inline-block px-6 py-4 bg-blue-600 text-white font-medium text-xl leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">+</button></Link>
            </div>

            {interview.map((item, key) => 
                <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm mr-12 mb-10 w-80" key={key}>
                    <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">{item.title}</h5>
                    
                    <p className="text-gray-700 text-base mt-3">
                        {item.date}
                    </p>
                    <p className="text-gray-700 text-base mt-1">
                        {item.from_time} - {item.to_time}
                    </p>
                    <p className="text-gray-700 text-base mt-1">
                        {item.applicants} Applicants
                    </p>

                    <Link to={`/applicants#${item.id}`} >
                    <button type="button" className=" inline-block px-5 py-2 bg-blue-600 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mt-4">View</button>
                    </Link>
                </div>
            )}
        </div>
    </div>
  )
}

export default Home