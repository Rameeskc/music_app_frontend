import React from 'react';

const Chips = () => {
  const categories = [
    'Relax', 'Sad', 'Party', 'Romance', 'Energetic', 'Jazz',
    'Alternative', 'Pop', 'Hip-Hop', 'Rock', 'Chill', 'Workout'
  ];

  return (
    <div className="flex gap-2 px-6 pt-4 flex-wrap">
      {categories.map((category, index) => (
        <p
          key={index}
          className="px-4 py-2 bg-[rgb(40,40,40)] text-white text-sm rounded-full whitespace-nowrap border border-[rgb(1,238,254)] hover:bg-[rgb(3,155,166)] transition"
        >
          {category}
        </p>
      ))}
    </div>
  );
};

export default Chips;
