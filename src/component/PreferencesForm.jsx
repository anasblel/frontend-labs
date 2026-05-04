import { useState } from 'react';

export default function PreferencesForm() {
  const [username, setUsername] = useState('');
  const [color, setColor] = useState('Red');
  const [subscribed, setSubscribed] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [source, setSource] = useState('friend');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      username,
      color,
      subscribed,
      accepted,
      source
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label>Favorite Color:</label>
        <select value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="Red">Red</option>
          <option value="Green">Green</option>
          <option value="Blue">Blue</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={subscribed}
            onChange={() => setSubscribed(!subscribed)}
          />
          Subscribe to newsletter
        </label>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={accepted}
            onChange={() => setAccepted(!accepted)}
          />
          Accept terms and conditions
        </label>
      </div>

      <div>
        <label>How did you hear about us?</label>
        <label>
          <input
            type="radio"
            value="friend"
            checked={source === 'friend'}
            onChange={(e) => setSource(e.target.value)}
          />
          Friend
        </label>
        <label>
          <input
            type="radio"
            value="google"
            checked={source === 'google'}
            onChange={(e) => setSource(e.target.value)}
          />
          Google
        </label>
        <label>
          <input
            type="radio"
            value="socialMedia"
            checked={source === 'socialMedia'}
            onChange={(e) => setSource(e.target.value)}
          />
          Social Media
        </label>
        <label>
          <input
            type="radio"
            value="other"
            checked={source === 'other'}
            onChange={(e) => setSource(e.target.value)}
          />
          Other
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}