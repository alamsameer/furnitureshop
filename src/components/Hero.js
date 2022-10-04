import Background from "../images/furnitureHeroImg.jpg"
export default function Hero() {
  return (
    <div className=" rounded-lg grid place-items-center  h-96 lg:h-100 bg-cover bg-center bg-no-repeat mt-4 mx-4 relative" style={{ backgroundImage: "url(" + Background + ")" }}>
      <div className=" grid place-items-center ">
        <p className="font-medium leading-tight text-3xl lg:text-5xl mt-0 mb-2 lg:mb-4 text-white">SPRING</p>
        <p className="font-medium leading-tight text-5xl lg:text-7xl mt-0 mb-2  lg:mb-4 text-white">Collection</p>
        <p className="font-medium leading-tight text-xl mt-0 mb-2 lg:mb-4 text-white">Start from $ 40</p>
        <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-8 py-3 mx-4 my-8 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
          Shop now
        </button>
      </div>
    </div>
  )
}
