import Data from "../data"
import Item from "./Item";

export default function NewArrival() {
    return (
        <div className="grid place-items-center">
            <h2 className="text-center text-5xl p-6 font-bold mt-4 mb-4">New Arivals</h2>
            <div className="grid grid-cols-1 gap-8 place-items-center sm:grid-cols-2 md:grid-cols-4  mt-8 mx-4 ">
                {Data.newarival.map((item, i) => {
                    const { name, price, img } = item
                    return <Item key={i} name={name} price={price} image={img} />
                })
                }
            </div>
        </div>
    )
}
