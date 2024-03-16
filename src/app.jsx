// App.js
import React from 'react';
import Card from './Card';

const App = () => {
  return (
    <div>
      <Card 
        imageSrc="path/to/image1.jpg"
      />
      <Card 
        imageSrc="path/to/image2.jpg"
      />
      <Card 
        imageSrc="path/to/image1.jpg"
      />
    </div>
  );
};

export default App;
