import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

const Quotes = () =>  {
  return (
    <>
        <div className="bg-gray-100 shadow-lg p-10 w-80 rounded-xl ">
            <FontAwesomeIcon icon={faQuoteLeft} className="relative bottom-14 right-1 text-2xl bg-black px-3 py-2 text-white rounded-xl"/>
            <div className="flex flex-col gap-y-3 text-center">
                <h2 className="text-3xl  font-semibold">Qutz Daily</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>   
            <FontAwesomeIcon icon={faQuoteRight} className="relative top-14 left-50 text-2xl bg-black px-3 py-2 text-white rounded-xl" />
        </div>
    </>
  )
}

export default Quotes