import { useState } from 'react'
import { IoArrowBackCircle, IoArrowBackCircleOutline } from 'react-icons/io5'

const PasswordHeader = ({ userID, setShowPassword, setError }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div>
      <h3 className='text-3xl font-bold text-center mb-7'>Welcome</h3>
      <section
        className='flex gap-2 items-center justify-center cursor-pointer'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => {
          setShowPassword(false)
          setError(false)
        }}
      >
        <span className='mt-1 text-3xl'>
          {isHovered ? <IoArrowBackCircle /> : <IoArrowBackCircleOutline />}
        </span>
        <p className='text-2xl font-light'>{userID}</p>
      </section>
    </div>
  )
}

export default PasswordHeader
