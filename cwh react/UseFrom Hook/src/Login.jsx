import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [accountType, setAccountType] = useState("Student");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm();

  const onSubmit = (data) => {
    // Custom error handling
    if (data.username === "manishkeer19@gmail.com") {
      setError("username", {
        type: "custom",
        message: "This email is not allowed. Please use a different email.",
      });
      return;
    }

    console.log("Data submitted:", data);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#161D28] text-white">
      <div className="w-[40%] h-[70%] p-5">
        <div>
          <h1 className="text-4xl font-bold ml-[3vw]">Welcome Back</h1>
          <p className="w-[27vw] ml-[3vw] m-2">
            Build skills for today, tomorrow, and beyond.{" "}
            <span>Education to future-proof your career.</span>
          </p>
        </div>
        <div className="w-[16vw] h-[8vh] bg-[#161D29] flex ml-[2vw] rounded-full gap-4 items-center cursor-pointer mt-[2vh]">
          <h3
            className={`${
              accountType === "Student" ? "bg-[#000814]" : ""
            } pl-5 pr-5 pt-2 pb-2 rounded-3xl`}
            onClick={() => setAccountType("Student")}
          >
            Student
          </h3>
          <h3
            className={`${
              accountType === "Instructor" ? "bg-[#000814]" : ""
            } pl-5 pr-5 pt-2 pb-2 rounded-3xl`}
            onClick={() => setAccountType("Instructor")}
          >
            Instructor
          </h3>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="inputs w-full flex mt-5 flex-col gap-3 relative">
            <div className="flex flex-col w-[97%]">
              <label className="text-white">Email Address</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="bg-[#161D29] p-2 rounded border"
                {...register("username", {
                  required: {
                    message: "Email field is required",
                    value: true,
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3",
                  },
                })}
              />
              {errors.username && (
                <div className="text-red-500 font-semibold mt-1">
                  {errors.username.message}
                </div>
              )}
            </div>
            <div className="flex flex-col w-[97%] mt-4">
              <label className="text-white">Password</label>
              <input
                type="password"
                placeholder="Enter password"
                className="bg-[#161D29] p-2 rounded border"
                {...register("password", {
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                  maxLength: {
                    value: 8,
                    message: "Maximum length is 8",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum length is 3",
                  },
                })}
              />
              {errors.password && (
                <div className="text-red-500 font-semibold mt-1">
                  {errors.password.message}
                </div>
              )}
            </div>
            <span className="absolute bottom-[9vh] right-[2vw] cursor-pointer text-[#47A5C5]">
              Forget Password
            </span>
            <input
              type="submit"
              value="Submit"
              className={`w-[95%] text-black font-bold mt-[5vh] p-2 rounded-full cursor-pointer 
                ${isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-yellow-500"}`}
              disabled={isSubmitting}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
