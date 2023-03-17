import instaLogo from './logos/insta.svg';
import './App.css';
import './styles/TypeWriting.css'
import About from './components/About.js';
import { Gallery } from './components/Gallery/Gallery';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    

    <div className="App">

      <div className="body">
      {/* Header start */}
      <div id = 'header' className='flex vh-100'>
        <div className='container'>
        <div className='header-content header'>
                <h1 className=''>I'm a <br/><div className= "typewriter" > Photographer</div></h1>
                <h2>Kranthi Kiran K</h2>
                <div className= "social-links">
                      <div className='flex a'>
                    <img src={instaLogo}></img>
                    <a  className = "linkInsta" href="">@mr.kranthi_kiran</a>
                    </div>
                        
                 </div>               
        </div> 
            </div>
            </div>
            {/* Header end */}

            <About/>
            <Gallery/>
            <Contact/>
            


            
           
     </div> {/* end body */}
     </div>
      
  );
}

export default App;
