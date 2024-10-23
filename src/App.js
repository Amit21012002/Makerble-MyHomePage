import './App.css';
import Contact from './Components/Contact';
import CreatePost from './Components/CreatePost';
import Menubar from './Components/Menubar';
import Boards from './Components/Boards';
import Projects from './Components/Projects';
import Progress from './Components/Progress';
import Albums from './Components/Albums';
import Tasks from './Components/Tasks';
import Organisations from './Components/Organisations';
import Followers from './Components/Followers';
import PeoplesYouFollow from './Components/PeoplesYouFollow';
import Stories from './Components/Stories';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Menubar />
      <div className='body-section'>
        <div className='left-section'><Contact /><Projects /><Albums /><Organisations /><Followers /><PeoplesYouFollow /> </div>
        <div className='middle-section'> <CreatePost /><Stories/></div>

        <div className='right-section'><Boards /><Progress /><Tasks /></div>
        </div>
        <Footer/>


     
    </div>
  );
}

export default App;
