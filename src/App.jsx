import tkwLogo from '../src/assets/TKW-Logo-Named.png'
import knot from '../src/assets/knot.png'


function App() {

  return (
    <>
      <div className="bg-[#224551] w-screen h-screen  flex flex-col justify-start items-center">
        <div className='mt-10'>
          <img src={tkwLogo} className='h-[100px] sm:h-[125px]' />
        </div>
        <div className='mt-64'>
          <h1 className='text-white text-4xl sm:text-7xl font-comfortaa'>Coming Soon!</h1>
          <img src={knot} className='h-[12.5px] sm:h-[25px] mt-1 sm:mt-4' />
        </div>
      </div>
    </>
  )
}

export default App
