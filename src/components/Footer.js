import BgFooter from "../images/footer.jpg"
export default function () {
  return (
    <section className='p-8 bg-slate-200'>
      <div className=' grid content-center rounded-2xl w-full h-64 sm:h-80 md:h-98 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${BgFooter})` }}>
        <div className='mt- grid place-items-end'>
          <div className='p-8'>
            <p className='text-2xl text-white font-bold sm:text-3xl  md:text-5xl'>GET $20 OFF <br />YOUR FIRST ORDER?</p>
            <p className='text-white px-2 md:text-lg'>Join our mailing list</p>
            <article className='p-2 rounded-2xl mt-8 relative flex  bg-white'>
              <input type="text" placeholder='Enter your email' id="large-input" class=" w-full block py-2 px-4  bg-gray-50 rounded-lg b sm:text-md focus:ring-blue-500 focus:border-blue-500  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
              <button className=' text-white rounded-2xl text-lg bg-slate-800 py-2 px-4 p min-w-fit'> shop Now</button>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}