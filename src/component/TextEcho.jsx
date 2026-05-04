import { useState } from 'react';

export default function TextEcho() {
  const [text, setText] = useState('');  

  const handleChange = (e) => {
    setText(e.target.value);  
  };

  return (
    <div>
      <input
        type="text"
        value={text}  
        onChange={handleChange}  
        placeholder="Type something"
      />
      <p>You typed: {text}</p>
      <p>Characters: {text.length}</p>
      <p>Words: {text.trim().split(' ').filter(word => word.length > 0).length}</p>
    </div>
  );
}