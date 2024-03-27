import { useState } from 'react'
import { IoChevronBackOutline } from 'react-icons/io5'

const PasswordInput = ({
  email,
  password,
  setPassword,
  error,
  setShowPassword,
}) => {
  const [show, setShow] = useState(false)
  const handleShow = () => {
    setShow(!show)
  }

  const handleBack = () => {
    setShowPassword(false)
  }

  return (
    <div>
      <section className='mb-5' onClick={handleBack}>
        <p>Back to previous for:</p>
        <div className='flex items-center gap-2 form-input cursor-pointer'>
          <span>
            <IoChevronBackOutline />
          </span>
          <p className='font-normal'>{email}</p>
        </div>
      </section>
      <span className=''>
        <label className='font-bold'>Password</label>
        <div className='flex items-center form-input'>
          <input
            type={!show ? 'password' : 'text'}
            className='w-[90%] outline-none'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className='text-blue-500 underline cursor-pointer'
            onClick={handleShow}
          >
            Show
          </button>
        </div>
        {error && <p className='text-red-500 text-lg'>{error}</p>}
      </span>
    </div>
  )
}

export default PasswordInput
