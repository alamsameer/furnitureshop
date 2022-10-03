

function TestimonialItem({ name, position, saying }) {
    return (
        <article className="bg-white dark:bg-white-900 rounded-lg group border-2 hover:border-orange-500 hover:border-2">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                <figure className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-gray-400 group-hover:text-orange-500 " viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                    </svg>
                    <blockquote>
                        <p className="text-xl font-medium text-gray-500 ">{saying}</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"> */}
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                            <div className="pr-3 font-medium text-gray-900 dark:text-white group-hover:text-orange-500">{name}</div>
                            <div className="pl-3 text-sm font-light text-gray-600 dark:text-gray-400">{position}</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </article>
    )

}
export default function Testimonial() {
  
    const testimonialContent = [{
        name: "Denis Zakerburg",
        position: "Marketing Management Remmi",
        saying: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
    }, {
        name: "Robert Anyino",
        position: "Marketing Management Remmi",
        saying: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
    }, {
        name: "Mehmet Parblo",
        position: "Marketing Management Remmi",
        saying: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration ."
    }]
    return (
        <section className='bg-slate-200 p-12'>
            <div className='grid gap-4 content-center place-items-center p-12'>
                <h2 className='font-bold text-3xl md:text-5xl '>TESTIMONIAL</h2>
                <p>What The People Thinks About Our Service</p>
            </div>
            <div className='grid grid-cols-1 gap-4 place-items-center content-center sm:grid-cols-2 my-4 md:grid-cols-3'>
                {
                    testimonialContent.map((testimonial,i) => {
                        const { name, position, saying } = testimonial
                        return <TestimonialItem key={i} name={name} position={position} saying={saying} />
                    })
                }
            </div>
        </section>
    )
}
