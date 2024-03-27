const EmailInput = ({ email, setEmail, error }) => {
  return (
    <section>
      <p className='font-semibold'>Telstra email</p>
      <span className='mt-2'>
        <label className='text-[#707070]'>Example: john@bigpond.com</label>
        <input
          type='email'
          className='form-input'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className='text-red-500 text-lg'>{error}</p>}
      </span>

      <p className='text-blue-600 underline text-lg mt-4'>
        Forgot Telstra email
      </p>
      <span className=' flex items-center gap-3 mt-10 md:mt-16'>
        <input type='checkbox' className='size-6' />
        <label className='text-lg'>Remember Telstra email</label>
      </span>
    </section>
  )
}

export default EmailInput
