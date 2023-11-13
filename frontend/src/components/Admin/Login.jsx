import React, { useEffect, useState } from "react";   
import { useDispatch, useSelector } from "react-redux";    
import { login } from "../../actions/user";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "CLEAR_ERRORS" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "CLEAR_MESSAGE" });
    }
  }, [error, message, dispatch]);

  return (
        <div className="py-12 mb-16 mt-44">
          <div className="mb-12 text-center">
            <p className="text-3xl font-medium font-roboto text-newblue">PORTFOLIO LOGIN</p>
          </div>
            <form className="flex flex-col items-center justify-center gap-5 " onSubmit={submitHandler}>
                <input
                className="border-2 border-bgcolor px-5 py-2  min-w-[320px] rounded-lg"
                type="email"
                placeholder="Admin Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
                <input
                className="border-2 border-bgcolor px-5 py-2  min-w-[320px] rounded-lg"
                type="password"
                placeholder="Admin Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                />
                <button className="px-10 py-2 font-medium text-white rounded-full bg-bgcolor" type="submit" variant="contained" disabled={loading}>   
                Login
                </button>
            
            </form>
        </div>
    );
    };

    export default Login;