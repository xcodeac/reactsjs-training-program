import Welcome from './Components/Welcome/Welcome';
import './App.css';
import ProfileCard from './Components/Profile/ProfileCard';

function App() {

  const user = {
    name: 'Virat Kohli',
    age: 35,
    country: 'India',
    profession: 'Cricketer'
  };

  
  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center items-center h-20 text-white gap-4">
          <ProfileCard
            className="p-4"
            image="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
            name="Virat"
            title="Cricketer"
          />
          <ProfileCard 
            image="https://documents.iplt20.com/ipl/IPLHeadshot2025/2.png"
            name="Dhoni"
            title="Cricketer"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
