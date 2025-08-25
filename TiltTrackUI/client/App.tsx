import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import './App.css'; // Optional: for styling

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <SearchBar />
        {/* Add more components here */}
      </main>
      <footer>
        <p>© 2025 My App</p>
      </footer>
    </div>
  );
}

export default App;
