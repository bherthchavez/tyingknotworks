import tkwLogo from '../src/assets/TKW-Logo-Named.png'
import knot from '../src/assets/knot.png'
import { AiOutlineMail } from "react-icons/ai";

function App() {

  return (
    <>
      <div className="bg-[#224551] h-screen  flex flex-col justify-between py-5 items-center font-comfortaa">
        <div className=''>
          <img src={tkwLogo} className='h-[80px] sm:h-[110px]' />
        </div>
        <div className='flex flex-col justify-center text-center'>
          <h1 className='text-white text-4xl sm:text-6xl'>Coming Soon!</h1>
          <img src={knot} className='h-[12.5px] sm:h-[21px] mt-1 sm:mt-4' />
         <div className='mt-5'>
          <a
            className="group relative inline-flex items-center overflow-hidden rounded-full border border-current px-8 py-2 text-[#527885] hover:text-slate-400 focus:outline-none"
            href='mailto:contact@tyingknotworks.com' target='_blank' rel='noreferrer noopener'
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg
                className="size-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </span>
            <AiOutlineMail size={24} className='pr-2 sm:mb-1' />
            <span className="text-xs transition-all group-hover:me-4 "> Email Us </span>
          </a>
         </div>
        </div>
        <div className=''>
          {/* <a href='mailto:contact@tyingknotworks.com' target='_blank' rel='noreferrer noopener'
            className='flex justify-between items-center w-full text-gray-400 hover:text-white  hover:-translate-y-1 hover:scale-102 duration-300' data-bs-toggle="tooltip" data-bs-placement="left" title="Email Me">
            contact@tyingknotworks.com
          </a> */}


        </div>
      </div>
    </>
  )
}

export default App
