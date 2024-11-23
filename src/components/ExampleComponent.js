import React, { useRef } from 'react';

const ExampleComponent = () => {
  const myRef = useRef(null);

  return <div ref={myRef}>Hello, this is a reference example.</div>;
};

export default ExampleComponent;
