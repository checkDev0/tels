const UserID = ({ userID, setUserID }) => {
  return (
    <div className='flex flex-col'>
      <label className='text-[#454B52] font-semibold text-sm mb-1'>
        User ID
      </label>
      <input
        type='text'
        className='border hover:border-blue-700 rounded-md h-12 px-5 outline-none'
        value={userID}
        onChange={(e) => setUserID(e.target.value)}
      />
    </div>
  )
}

export default UserID
