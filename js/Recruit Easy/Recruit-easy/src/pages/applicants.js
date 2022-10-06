import React, {useEffect, useState} from 'react';
import '../styles/output.css';
import {get, post} from '../scripts/requests';
import {Link} from 'react-router-dom';


function Applicants() {
  if (!localStorage.getItem('token')){
      window.location = '/login'
  }

  const id = window.location.hash.replace('#', '')
  const token = localStorage.getItem('token')
  const name = localStorage.getItem('name')
  const [applicants, setApplicants] = useState([])
  const [interview, setInterview] = useState({title: ''})
  const [email, setEmail] = useState()

  useEffect(() => {
      (async () => {
          const res = await get('https://recruiteasy.herokuapp.com/api/applicant/', token, {interview: id})
          setApplicants(res)

          const data = await get(`https://recruiteasy.herokuapp.com/api/interview/${id}`, token)
          setInterview(data)
      })()
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    window.location = '/login'
  }

  const sendmail = async (id, em=null) => {
    const msg = [
        `Hey!! <br>${name} has invited you to take their job interview. <br><a href='http:localhost:3000/interview#${id}'>Click to give the interview</a>`,
        `Hey!! <br>Sorry to say that ${name} did not pass you in its job interview that you gave. <br>Don't get disheartened and keep trying your best. <br><br>We wish you all the best.`,
        `Hey!! <br>Congratulations!! <br>${name} has accepted you for its job. <br>Woohoooo!!`
    ]

    document.getElementById('sendbtn').disabled = true
    
    await post('https://recruiteasy.herokuapp.com/twilio/send/', token, {
        email: em ? em : email,
        subject: 'Interview Invite',
        msg: msg[id]
    })

    setEmail('')
    document.getElementById('sendbtn').disabled = false
  }

  return (
    <div className='bg-gray-100 h-screen'>
        <header className="text-blue-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                <Link to='/' className="flex title-font font-medium items-center text-blue-900 mb-4 md:mb-0">
                <img src='images/logo.png' style={{width: '70px'}} />
                <span className="ml-3 text-xl">RecruitEasy</span>
                </Link>

                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-9 text-lg hover:text-blue-900" href="#">Profile</a>
                <a className="mr-9 text-lg hover:text-blue-900" href="#">Archives</a>
                </nav>

                <button className="inline-flex text-lg items-center bg-blue-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-200 rounded text-base mt-4 mr-4 md:mt-0" onClick={logout}>Logout</button>
            </div>
        </header>

        <div className="container flex justify-center mx-auto pt-7">
            <div className="flex flex-col">
                <div className="w-screen">
                    <div className="border-gray-200">
                        <table className='w-9/12 m-auto'>
                            <thead className="bg-gray-50 text-left">
                                <tr>
                                    <th colSpan={5}>
                                        <h3 className="text-black text-2xl leading-tight font-bold mt-1 ml-4">
                                            {interview.title}
                                        </h3>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan={5}>
                                        <h5 className="text-gray-500 text-sm leading-tight font-medium mb-4 ml-4">
                                            {`http:localhost:3000/interview#${id}`}
                                            <button className="px-3 py-1 text-xs text-white bg-blue-400 rounded ml-10" onClick={() => {document.getElementById('share').classList.remove('hidden')}}>
                                                Share
                                            </button>
                                        </h5>
                                    </th>
                                </tr>

                                <tr>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        S. No.
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Name
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500">
                                        Email
                                    </th>
                                    <th className="px-6 py-2 text-xs text-gray-500" colSpan={2}>
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {applicants.map((item, key) => 
                                <tr className="whitespace-nowrap" key={key}>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {key+1}
                                    </td>
                                    <td className="px-6 py-4">
                                        <Link to={{pathname: '/applicant', hash: `${item.id}`}}>
                                        <div className="text-sm text-gray-900">
                                            {item.name}
                                        </div>
                                        </Link>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-500">{item.email}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-1 text-sm text-white bg-red-400 rounded w-1/2" onClick={() => sendmail(1, item.email)}>Fail</button>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="px-4 py-1 text-sm text-white bg-blue-400 rounded w-1/2" onClick={() => sendmail(2, item.email)}>Pass</button>
                                    </td>
                                </tr>
                                )}
        
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade bg-black bg-opacity-60 fixed hidden top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="share">
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none w-2/5 m-auto mt-48">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalScrollableLabel">
                        Share Link
                        </h5>

                        <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" onClick={() => {document.getElementById('share').classList.add('hidden')}}>X</button>
                    </div>

                    <div className="modal-body relative p-4">
                        <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" type="text" placeholder="Enter Email of Applicant" onChange={(val) => setEmail(val.target.value)} value={email} />
                    </div>

                    <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" onClick={() => sendmail(0)} id='sendbtn'>
                        Send Mail
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Applicants