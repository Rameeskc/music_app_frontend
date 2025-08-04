import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    // Add signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-cover bg-center bg-no-repeat pointer-events-none" style={{ backgroundImage: "url('/4.jpg')" }}>
      <div className="pointer-events-auto max-w-md w-full bg-white/10 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center mb-6 text-white font-[Pacifico]">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-white mb-1">
              Username
            </label>
            <input
              id="username"
              type="text"
              required
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="yourname"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              required
              className="w-full px-4 py-2 bg-white/20 text-white placeholder-white/80 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-white/80">
          Already have an account?{' '}
          <button onClick={() =>navigate("/login")} className="text-blue-300 hover:underline">
            log in
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
