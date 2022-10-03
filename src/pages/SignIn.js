import { useContext, useState } from "react";
import authfn from "../firebase/Auth"
import AuthState from "../components/context/AuthState";

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {checkAuth}=useContext(AuthState)

  const handleSubmit =async (event) => {
    event.preventDefault();
    console.log({ email, password });
    try {
      await authfn.signIn(email, password)
      checkAuth()
      
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleChange = (e) => {
    let value = e.target.value
    //  console.log(value)
    switch (e.target.type) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        return null
    }
  }


  return (
    <section className="bg-blueGray-50">
      <div className="w-full lg:w-4/12 px-4 mx-auto pt-6">
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
          <div className="rounded-t mb-0 px-6 py-6">
            <div className="text-center mb-3">
              <h6 className="text-blueGray-500 text-sm font-bold">
                Sign in with
              </h6>
            </div>
            <div className="btn-wrapper text-center">
              <button className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/github.svg" />Github</button>
              <button className="bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150" type="button">
                <img alt="..." className="w-5 mr-1" src="https://demos.creative-tim.com/notus-js/assets/img/google.svg" />Google </button>

            </div>
            <hr className="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div className="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign in with credentials</small>
            </div>
            <form>
              <div className="relative w-full mb-6">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Email</label><input onChange={handleChange} type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Email" />
              </div>
              <div className="relative w-full mb-6">
                <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">Password</label><input onChange={handleChange} type="password" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" placeholder="Password" />
              </div>
              <div className="text-center mt-6">
                <button onClick={handleSubmit} className="bg-blue-600  active:bg-blue-800 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150" type="button"> Sign In </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}