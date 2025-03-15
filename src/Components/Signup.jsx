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
                className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
            >
                <div className="mb-2 flex text-center  justify-center">
                    <span className="inline-block w-full max-w-full max-w[100px]">
                    <Logo/>
                    </span>
                </div>
                <h2 className="texte-center text-center text-2xl font-bold leading-tight">
                    Sigh in
                </h2>
                <p className="mt-2 text-center text-base text-black-">
                    Don't have an account?
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        sign up
                    </Link>
                </p>
                {error && <p className="text-red-600">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="space-y-5">
                        <Input
                            label="name: "
                            placeholder="fullname"
                            {...register("name", { required: true })}
                        />
                        <Input
                            label="Email: "
                            placeholder=" Enter your email"
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
                            label="password: "
                            type="password"
                            placeholder=" Enter your password"
                            {...register("password", { required: true })}
                        />
                        <Button
                            type="submit"
                            className="w-full">Create account</Button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
