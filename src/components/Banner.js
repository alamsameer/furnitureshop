import Modernfurniture from "../images/modernFurniture.jpg"
import Lighting from "../images/lighting.jpg"



export default function Banner() {
  return (
    <div className="grid  grid-cols-1 gap-10 md:grid-cols-2 w-full  mt-8 px-4 ">
      <div className=" rounded modern_furniture h-64 sm:h-72 md:h-80 bg-cover bg-center bg-no-repeat " style={{ backgroundImage: "url(" + Modernfurniture + ")" }}>
        <div className=" grid place-items-end mr-12 mt-14 ">
          <p className="font-medium leading-tight text-2xl lg:text-3xl mt-0  lg:mb-4 ">SPRING</p>
          <p className="font-medium leading-tight text-4xl lg:text-5xl  lg:mb-4 ">Collection</p>
          <p className="font-medium leading-tight  lg:mb-4 ">Start from $ 40</p>
          <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-base px-5 py-2 sm:px-8 sm:py-3 mx-4 my-8 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Shop now
          </button>
        </div>
      </div>
      <div className=" rounded lighting h-64 sm:h-72  md:h-80 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url(" + Lighting + ")" }}>
        <div className=" grid place-items-end mr-12 mt-14">
          <p className="font-medium leading-tight text-2xl lg:text-3xl mt-0  lg:mb-4 ">SPRING</p>
          <p className="font-medium leading-tight text-4xl lg:text-5xl mt-0   lg:mb-4 ">Collection</p>
          <p className="font-medium leading-tight mt-0 lg:mb-4 ">Start from $ 40</p>
          <button className=" text-white bg-orange-500 active:bg-orange-600 font-bold uppercase text-base px-5 py-2 sm:px-8 sm:py-3 mx-4 my-8 rounded shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
            Shop now
          </button>
        </div>
      </div>
    </div>
  )
}
