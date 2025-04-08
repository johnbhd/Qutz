import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import Bg from "./Bg"

const Quotes = () =>  {
  return (
  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 relative left-0 md:left-7.5">
        <div className="bg-gray-100 shadow-lg px-10 py-5 w-80 rounded-xl ">
            <FontAwesomeIcon icon={faQuoteLeft} className="relative bottom-10 right-1 text-2xl bg-black px-3 py-2 text-white rounded-xl"/>
            <div className="flex flex-col gap-y-3 text-center">
            <h2 className="text-3xl font-semibold mb-2">Qutz Daily</h2>                
            <p className="mb-2">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <h4 className="text-xl font-semibold">- John Doe</h4></div>   
            <FontAwesomeIcon icon={faQuoteRight} className="relative top-10 left-50 text-2xl bg-black px-3 py-2 text-white rounded-xl" />
        </div>
        <Bg />
    </div>
  )
}

export default Quotes