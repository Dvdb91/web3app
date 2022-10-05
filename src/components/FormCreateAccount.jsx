import React, {useState} from 'react';
import FormInput from '../components/FormInput';

function Home() {

    const [state,setState] = useState({
        ethAddress: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
      };

    console.log(state);
    return (
        <div>
        <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
            <div>
                <a href="/">
                    <h3 className="text-4xl font-bold text-purple-600">
                        Logo
                    </h3>
                </a>
            </div>
            <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                <form>
         <FormInput name="ethAddress" placeholder="0X... here" labelText="Eth Address:" value={state.ethAddress} onChange={handleChange} />
         <FormInput name="userName" placeholder="type username here" labelText="Username:" value={state.userName} onChange={handleChange} />
         <FormInput name="email" placeholder="type email here" labelText="Email:" value={state.email} onChange={handleChange}/>
         <FormInput name="password" placeholder="type password here" labelText="Password:" value={state.password} onChange={handleChange}/>
         <FormInput name="confirmPassword" placeholder="confirm password here" labelText="Confirm Password:" value={state.confirmPassword} onChange={handleChange}/>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="flex items-center mt-4">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                            Register
                        </button>
                    </div>
                </form>
                <div className="mt-4 text-grey-600">
                    Already have an account?{" "}
                    <span>
                        <a className="text-purple-600 hover:underline" href="#">
                            Log in
                        </a>
                    </span>
                </div>
                

            </div>
        </div>
    </div>
    );
}

export default Home;