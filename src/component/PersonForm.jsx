import { useState } from 'react';

export default function PersonForm() {
  const [firstName, setFirstName] = useState('Anas');
  const [age, setAge] = useState(23);
  const [isStudent, setIsStudent] = useState(false);

  return (
    <div>
      <p>Name: {firstName}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>

      <button onClick={() => setAge(age + 1)}>Increment Age</button>
      <button onClick={() => setIsStudent(!isStudent)}>Toggle Student</button>
      <button onClick={() => setFirstName(firstName === 'Anas' ? 'dali' : 'Anas')}>Change Name</button>
    </div>
  );
}