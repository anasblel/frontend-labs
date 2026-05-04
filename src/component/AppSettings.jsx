import { useState } from 'react';

export default function AppSettings() {
  const [settings, setSettings] = useState({
    theme: 'light',
    fontSize: 'medium',
    soundEnabled: true
  });

  const toggleTheme = () => {
    setSettings({
      ...settings,
      theme: settings.theme === 'light' ? 'dark' : 'light'
    });
  };

  const changeFontSize = () => {
    const nextFontSize = 
      settings.fontSize === 'small' ? 'medium' :
      settings.fontSize === 'medium' ? 'large' :
      'small';
    setSettings({ ...settings, fontSize: nextFontSize });
  };

  const toggleSound = () => {
    setSettings({ ...settings, soundEnabled: !settings.soundEnabled });
  };

  return (
    <div>
      <h2>App Settings</h2>
      <p>Theme: {settings.theme}</p>
      <p>Font Size: {settings.fontSize}</p>
      <p>Sound: {settings.soundEnabled ? 'On' : 'Off'}</p>
      
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={changeFontSize}>Change Font Size</button>
      <button onClick={toggleSound}>Toggle Sound</button>
    </div>
  );
}