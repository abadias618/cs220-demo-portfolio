
'use client';

import { useState } from 'react';

export default function ButtonPage() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  const [message, setMessage] = useState('');



  return (
    <div className="flex justify-center items-center min-h-screen bg-black">
      <button onClick={handleClick}>Click me ({clickCount})</button>
    </div>
  );
}
