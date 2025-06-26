import React, { useRef, useState } from 'react';

const Login = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username && password) {
      alert(`Login successful!\nUsername: ${username}\nPassword: ${password}`);
    } else {
      // alert('Please fill in both fields.');
      setError('Both fields are required.');
      usernameRef.current.focus();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-500 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium mb-2">
              Username:
            </label>
            <input
              type="text"
              id="username"
              ref={usernameRef}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
              className="border rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;