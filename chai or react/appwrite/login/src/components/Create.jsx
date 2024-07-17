import React, { useState } from 'react';
import authService from '../appwrite/authservice';

function Create() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Iscreated, setIscreated] = useState(false);

  async function createAc({ email, password, name }) {
    try {
      return await authService.CreateAccount({ email, password, name });
    } catch (error) {
      console.log(error);
    }
  }

  const handlesubmit = async (e) => {
    e.preventDefault();

    let res = await createAc({ email, password, name });

    if (res) {
      setIscreated(true);
      alert('Account created successfully');
    } else {
      alert("Can't create account");
    }
  };

  return (
    <>
      {Iscreated ? (
        <h1 className="text-center text-green-500 text-xl mt-4">
          Account created successfully. Now you can login.
        </h1>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <form onSubmit={handlesubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                placeholder="Enter your name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="flex items-center justify-between">
              <input
                type="submit"
                value="Submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              />
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Create;
