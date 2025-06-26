import Welcome from './Components/Welcome/Welcome';
import ProfileCard from './Components/Profile/ProfileCard';
import Login from './Components/Login/Login';

function App() {
  
  return (
    <div className="App">
      <header className="bg-gray-200">
        <div className="flex justify-center items-center text-white gap-4">
          <Login />
        </div>
      </header>
    </div>
  );
}

export default App;
