import './index.css';
import Navbar from './Content/Navbar'
import Home from './Content/Home'
import Sim from './Content/eficiedu'
import Contato from './Content/Contato'





 function App() {
   return (
     <div className="snap-y snap-mandatory overflow-scroll h-full scroll-smooth bg-[url('/src/assets/BG.png')] bg-fixed bg-cover">
     
         <Navbar/>
         <Home />
         <Sim />
         <Contato />
         
        
         
     
     </div>
   );
 }

 export default App;

