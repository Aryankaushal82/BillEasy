// import InputField from "components/fields/InputField";
// import { FcGoogle } from "react-icons/fc";
// import Checkbox from "components/checkbox";
// import { Link } from "react-router-dom";

// export default function SignIn() {
//   return (
//     <div className="-mt-12 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
//       {/* Sign in section */}
//       <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
//         <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
//           Sign In
//         </h4>
//         <p className="mb-9 ml-1 text-base text-gray-600">
//           Enter your email and password to sign in!
//         </p>
//         {/* Email */}
//         <InputField
//           variant="auth"
//           extra="mb-3"
//           label="Email*"
//           placeholder="mail@simmmple.com"
//           id="email"
//           type="text"
//         />

//         {/* Password */}
//         <InputField
//           variant="auth"
//           extra="mb-3"
//           label="Password*"
//           placeholder="Min. 8 characters"
//           id="password"
//           type="password"
//         />
//         {/* Checkbox */}
//         <div className="mb-4 flex items-center justify-between px-2">
          
//           <a
//             className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
//             href=" "
//           >
//             Forgot Password?
//           </a>
//         </div>
//         <Link to={'/admin'}>
//         <button className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200">
//           Sign In
//         </button>
//         </Link>
        
//         <div className="mt-4">
//           <span className=" text-sm font-medium text-navy-700 dark:text-gray-600">
//             Not registered yet?
//           </span>
//           <Link to={'/auth/sign-up'}
//             href=" "
//             className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
//           >
//             Create an account
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputField from "components/fields/InputField";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

// Zod schema for Sign In
const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export default function SignIn() {
  const navigate = useNavigate();
  const [role, setRole] = useState("user");

  // Form handling with React Hook Form and Zod
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(signInSchema),
  });

  // Handle role change
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  // Handle form submission
  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/user/sign-in", {
        ...data,
        role,  // Include the role in the login request
      });
      if (response.data.success) {
        navigate('/admin');
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login failed", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="-mt-12 mb-16 flex h-full w-full items-center justify-center px-2 md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
      {/* Sign In Section */}
      <div className="mt-[10vh] w-full max-w-full flex-col items-center md:pl-4 lg:pl-0 xl:max-w-[420px]">
        <h4 className="mb-2.5 text-4xl font-bold text-navy-700 dark:text-white">
          Sign In
        </h4>
        <p className="mb-9 ml-1 text-base text-gray-600">
          Enter your email and password to sign in!
        </p>

        {/* Role Selection */}
        <label className="mb-2 block text-base font-medium text-gray-700">
          Sign in as:
          <select
            value={role}
            onChange={handleRoleChange}
            className="ml-2 rounded-md border-gray-300 text-sm text-gray-700"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        {/* Sign In Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Email*"
            placeholder="mail@simmmple.com"
            id="email"
            type="text"
            {...register("email")}
            error={errors.email?.message}
          />

          {/* Password */}
          <InputField
            variant="auth"
            extra="mb-3"
            label="Password*"
            placeholder="Min. 8 characters"
            id="password"
            type="password"
            {...register("password")}
            error={errors.password?.message}
          />

          {/* Forgot Password */}
          <div className="mb-4 flex items-center justify-between px-2">
            <a
              className="text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
              href=" "
            >
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="linear mt-2 w-full rounded-xl bg-brand-500 py-[12px] text-base font-medium text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-4">
          <span className="text-sm font-medium text-navy-700 dark:text-gray-600">
            Not registered yet?
          </span>
          <Link
            to="/auth/sign-up"
            className="ml-1 text-sm font-medium text-brand-500 hover:text-brand-600 dark:text-white"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
