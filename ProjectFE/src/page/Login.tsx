import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleRegisterStudent = async () => {
    try {
      await fetch(`http://localhost:4411/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[500px] border rounded-md min-h-[200px] p-4">
        <h1 className="text-[20px] font-semibold">Login</h1>

        <div className="mt-10">
          <div className="flex flex-col mb-4">
            <label className="text-[12px] mb-1 font-semibold">Email</label>
            <input
              className="border rounded-md h-[45px] outline-none pl-2"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-[12px] mb-1 font-semibold">Password</label>
            <input
              className="border rounded-md h-[45px] outline-none pl-2"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button
              className="w-full h-[45px] rounded-md bg-blue-500 text-white font-semibold"
              onClick={handleRegisterStudent}
            >
              Login
            </button>
            <p className="mt-4 text-[12px] text-center">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
