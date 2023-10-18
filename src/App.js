
import './App.css';
import MainContent from './component/Main-content';
import Sidebar from './component/dashboard';

function App() {
  return (
    <div className="App  ">
     <div className='section_one'>
      <Sidebar/>
     </div>
     <div className='section_two'>
     <div><MainContent/></div>
     </div>
   
  
    </div>
  );
}

export default App;
