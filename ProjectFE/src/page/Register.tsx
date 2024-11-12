import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [schoolName, setSchoolName] = useState<string>("");

  const handleRegisterStudent = async () => {
    try {
      await fetch(`http://localhost:4411/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phoneNumber,
          password,
          schoolName,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          if (res.status === 201) {
            navigate("/login");
          } else {
            alert("Registration Failed");
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-[500px] border rounded-md min-h-[200px] p-4">
        <h1 className="text-[20px] font-semibold">Register</h1>

        <div className="mt-10">
          <div className="flex flex-col mb-4">
            <label className="text-[12px] mb-1 font-semibold">Name</label>
            <input
              className="border rounded-md h-[45px] outline-none pl-2"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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

          <div className="flex flex-col mb-4">
            <label className="text-[12px] mb-1 font-semibold">
              School Name
            </label>
            <input
              className="border rounded-md h-[45px] outline-none pl-2"
              placeholder="Enter School Name"
              value={schoolName}
              onChange={(e) => setSchoolName(e.target.value)}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label className="text-[12px] mb-1 font-semibold">
              Phone Number
            </label>
            <input
              className="border rounded-md h-[45px] outline-none pl-2"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div>
            <button
              className="w-full h-[45px] rounded-md bg-blue-500 text-white font-semibold"
              onClick={handleRegisterStudent}
            >
              Register
            </button>
            <p className="mt-4 text-[12px] text-center">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
