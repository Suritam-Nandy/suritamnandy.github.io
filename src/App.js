import './App.css';
import Header from './components/Header';
import resumeData from './resumeData';

const App =()=> {
  return (
    <div className="App">
    <Header resumeData={resumeData}/>
    </div>
  );
}

export default App;
