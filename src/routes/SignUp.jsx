import { useState } from "react";
import { z } from "zod";
import { User } from "../utils/validation";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errors, setErrors] = useState("");

  const navigate = useNavigate();
  const getRandomString = () => Math.random().toString(36).substring(2);

  const handleSignUp = () => {
    try {
      const userValidation = User.parse({ email, password });
      setErrors(null);

      if (repeatPassword !== password) throw new Error("Пароли не совпадают");

      const user = {
        id: Date.now() + getRandomString(),
        email,
        password,
        registrationDate: Date.now(),
      };

      fetch(`http://localhost:5001/users`, {
        method: "post",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      navigate("/login");
    } catch (error) {
      if (error instanceof z.ZodError) setErrors(error.format());
      else setErrors({ repeatError: error.message });
    }
  };

  return (
    <div className="flex flex-col min-w-full min-h-screen">
      <div
        className="flex flex-col gap-2 prose text-center mt-10 min-w-full prose-h1:text-5xl"
        style={{ flex: "1 1 auto" }}
      >
        <h1>Sign Up</h1>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2"
        />
        {errors?.email && (
          <div className="text-red-500 font-semibold font-serif text-xs sm:text-sm">
            {errors?.email?._errors}
          </div>
        )}
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2"
        />
        {errors?.password && (
          <div className="text-red-500 font-semibold font-serif text-xs sm:text-sm">
            {errors?.password?._errors[0]}
          </div>
        )}
        <input
          placeholder="repeat password"
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          className="mx-auto border border-black font-serif font-semibold px-2 min-w-1/2 max-w-1/2"
        />
        {errors?.repeatError && (
          <div className="text-red-500 font-semibold font-serif text-xs sm:text-sm">
            {errors?.repeatError}
          </div>
        )}
        <button
          onClick={handleSignUp}
          className="border min-w-1/5 mx-auto max-w-1/5 cursor-pointer font-bold text-xl border-black hover:bg-gray-200 my-5"
        >
          Sign Up
        </button>
      </div>
      <Footer />
    </div>
  );
}
