import FormContainer from '../component/FormContainer'
import Top from '../component/Top'

const MainPage = () => {
  return (
    <div className='md:h-screen md:w-screen flex items-center flex-col '>
      <Top />
      <FormContainer />
    </div>
  )
}

export default MainPage
