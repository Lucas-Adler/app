import './index.css';
import Navbar from './Content/Navbar'
import Home from './Content/Home'
import Sim from './Content/eficiedu'
import Contato from './Content/Contato'
import Bottom from './Content/Bottom'





 function App() {
     return (
     <div className="snap-y snap-mandatory overflow-scroll h-full scroll-smooth bg-grain scroll-m10">
     
         <Navbar/>
         <Home />
         <Sim />
         <Contato />
         <Bottom/>  
        
         
     
     </div>
   );
 }

 export default App;

