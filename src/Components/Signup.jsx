import React from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice";
// import { Button, Input, Logo } from "../Components/index";
// import Button from "../Components/button";
// import Input from "../Components/input";
import Input from "./input";
import { Button } from ".";
import Logo from "./logo"
// import Logo from "../Components/logo";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const create = async (data) => {
        setError("");
        try {
            const userData = await authService.createAccount(data);
            if (userData) {
                const userData = await authService.getCurrentUser();
                if (userData) dispatch(login(userData));
                navigate("/");
            }
        } catch (error) {
            return error;
        }
    };
    return (
        <div className="flex items-center justify-center">
            <div
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-gray-600`}
            >
                 <div className="mb-2 flex justify-center">
                  <span className="inline-block w-full max-w-[100px]">
                      <Logo width="100%" />
                  </span>
      </div>
                <h2 className="texte-center text-center text-2xl font-bold leading-tight mt-3 mb-5">
                    Sign in
                </h2>
              
                {error && <p className="text-red-600">{error}</p>}
                <form onSubmit={handleSubmit(create)}>
                    <div className="space-y-5">
                        <Input
                            label="Name: "
                            placeholder=" Enter your fullname"
                            className="w-100"
                            autoComplete="username"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email: "
                            placeholder=" Enter your email"
                            className="w-100"
                            type="email"
                            {...register("email", {
                                required: true,
                                validate: {
                                    matchPatern: (value) =>
                                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                                            value
                                        ) || "email must be valid",
                                },
                            })}
                            
                        />
                        <Input
                            label="Password: "
                            type="password"
                            className="w-100"
                            placeholder=" Enter your password"
                            autoComplete="current-password"
                            {...register("password", { required: true })}
                        />
                        <Button
                            type="submit"
                            className="w-full hover:bg-blue-800 duration-300 hover:text-white">Create account</Button>
                    </div>
                    <p className="mt-2 text-center text-base text-black-">
                    Already have an account? <br/>
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-300 hover:underline hover:text-blue-800"
                    >
                            Login
                    </Link>
                </p>
                </form>
            </div>
        </div>
    );
}

export default Signup;
