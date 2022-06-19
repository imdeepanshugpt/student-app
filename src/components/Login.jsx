import React from "react";
import useAuth from '../hook/useAuth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    console.log(event.target[0].value, event.target[1].value);
    if(event.target[0].value === 'student@gmail.com'){
      setAuth({user:event.target[0].value, pwd: event.target[1].value, roles:['student']});
      window.sessionStorage.setItem("username", event.target[0].value);
    }
    if(event.target[0].value === 'staff@gmail.com'){
      setAuth({user:event.target[0].value, pwd: event.target[1].value, roles:['staff']});
      window.sessionStorage.setItem("username", event.target[0].value);
    }
    
    navigate('/home');
  };
  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <form className="mt-8 space-y-6" onSubmit={(event) => submitForm(event)}>
        <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">
              User Name
            </label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="user name"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
