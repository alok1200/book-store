import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"


const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = (data) => {
        console.log(data)
      }
  return (
    <>
      <div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Login</h3>
              {/* this is for email */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("Email", { required: true })}
              />
              <br/>
              {errors.Email && <span className='text-small text-red-500'>This field is required</span>}
            </div>
         
          {/* this is for password */}
          <div className="mt-4 space-y-2">
            <span>password</span>
            <br />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-80 px-3 py-1 border rounded-md outline-none"
              {...register("password", { required: true })}
            />
            <br/>
            {errors.password && <span className='text-small text-red-500'>This field is required</span>}
          </div>
          <div className="mt-4 justify-around flex">
            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">Login</button>
          <p>Not registered? <Link to="/signup" className="text-blue-500 cursor-pointer underline">Sign up</Link></p>
          </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
