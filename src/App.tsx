import React,{useEffect} from 'react';

import Home from './pages/Home';
function App() {
  useEffect(() => {
      const script = document.createElement('script');
      script.src = '/js/script.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
      document.body.removeChild(script);
      };

  }, []);
  
  return (
    <Home />
  );
}

export default App;
