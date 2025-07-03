import React from 'react';
import Banner from '../../components/user/Banner';
import Chips from '../../components/user/Chips';
import TextArea from '../../components/user/TextArea';
import SongList from '../../components/user/SongList';

const Home = () => {
  return (
    <>
      <Chips/>
      {/* <Banner/> */}
      <TextArea title="Latest songs"/>
      <SongList/>
      <TextArea title="Top Trending"/>
      <SongList/>
      <TextArea title="Recommended For You"/>
      <SongList/>
    <div className="text-white p-6">
      <h1 className="text-3xl font-bold">Welcome to MoonBeats 🎧</h1>
      <p className="mt-2 text-slate-300">Your music world begins here.</p>
    </div>
    </>
  );
};

export default Home;
