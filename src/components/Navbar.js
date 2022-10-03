import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import authfn from "../firebase/Auth";
import AuthState from "./context/AuthState";

function ShowtoLoginSignup() {
    return (
        <>
            <Link to="/login" className="hover:bg-orange-700  hover:text-white px-3 py-2 md:px-4 md:py-3 lg:text-lg text-sm font-medium">Login</Link>
            <Link to="/signup" className="hover:bg-orange-700  hover:text-white px-3 py-2 md:px-4 md:py-3 lg:text-lg text-sm font-medium">signUp</Link>

        </>)
}
function LogedinUser({user}) {
    console.log(user);
    return (
        <>
        <h3 className="text-orange-600 px-3 py-2 text-md md:px-4 md:py-3 lg:text-lg font-medium">{user.displayName}</h3>
            <button onClick={authfn.logout} className="">logout </button>
        </>
    )
}
function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(AuthState)
    console.log(user);
    return (
        <div>
            <nav className="  mx-4 py-2">
                <div className=" mx-auto  ">
                    <div className="flex items-center justify-between h-16 ">
                        <div className="flex items-center ">
                            <div className="flex-shrink-0 pr-2 md:py-2 border-r-2  border-black">
                                <img
                                    className="h-8 lg:h-10 w-24"
                                    src="https://demo.phlox.pro/shop-furniture-2/wp-content/uploads/sites/258/2020/11/cropped-Group-7843.png"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block ">
                                <div className=" flex items-baseline space-x-4 ">

                                    <Link
                                        to="/"
                                        className="  hover:bg-orange-700 hover:text-white px-3 py-2 text-sm  md:px-4 md:py-3 lg:text-lg  font-medium"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/shop"
                                        className="  hover:bg-orange-700 hover:text-white px-3 py-2 text-sm  md:px-4 md:py-3 lg:text-lg  font-medium"
                                    >
                                        Shop
                                    </Link>

                                    <Link
                                        to="/contact"
                                        className="  hover:bg-orange-700 hover:text-white px-3 py-2 text-sm md:px-4 md:py-3 lg:text-lg   font-medium"
                                    >
                                        Contact
                                    </Link>

                                    <Link
                                        to="/aboutus"
                                        className=" hover:bg-orange-700 hover:text-white px-3 py-2 text-sm md:px-4 md:py-3 lg:text-lg  font-medium"
                                    >
                                        About us
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-16 justify-center place-items-center">
                            <div className="flex gap-4">
                                {
                                    user ? <LogedinUser user={user}/> : <ShowtoLoginSignup/>
                                }
                                <Link to="/cart" className="hover:bg-orange-700 hover:text-white px-3 py-2 text-sm md:px-4 md:py-3 lg:text-lg font-medium">Basket</Link>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-orange-700 inline-flex items-center justify-center p-2 text-gray-200 hover:text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">Open main menu</span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link
                                    to="#"
                                    className="  hover:bg-orange-700 hover:text-white block px-3 py-2 text-base font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    to="#"
                                    className="  hover:bg-orange-700 hover:text-white block px-3 py-2 text-base font-medium"
                                >
                                    Shop
                                </Link>

                                <Link
                                    to="#"
                                    className="  hover:bg-orange-700 hover:text-white block px-3 py-2 text-base font-medium"
                                >
                                    Contact
                                </Link>

                                <Link
                                    to="#"
                                    className="  hover:bg-orange-700 hover:text-white block px-3 py-2 text-base font-medium"
                                >
                                    Abouts
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
}

export default Nav;