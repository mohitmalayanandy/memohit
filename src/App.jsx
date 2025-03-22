import { useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Router from './router';

function App() {
  const [isEntered, setIsEntered] = useState(false);

  if (!isEntered) return <Banner onSubmit={() => setIsEntered(true)} />;

  return (
    <div className="flex">
      <Dashboard />
      <div className="flex-grow">
        <Header />
        <Router />
      </div>
    </div>
  );
}

export default App;
