import React from 'react';
import Banner from '../../components/user/Banner';

const Home = () => {
  return (
    <>
      <Banner/>
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold">Welcome to MoonBeats 🎧</h1>
      <p className="mt-2 text-slate-300">Your music world begins here.</p>
    </div>
    </>
  );
};

export default Home;
