import logo from './logo.svg';
import './App.css';
import Team from'./comps/team'
import Price from'./comps/price'

function App() {
  let he = 
    {
      title:"Notre équipe",  
    } 
    
  
  let co = 
    {
      title:"Présentation de notre formidable équipe", 
      desc:" Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène."
    }
    
  let u = [
    {
      name:"Lucas", 
      img:"/assets/edouard.jpg", 
      occupation:"CEO"
    }, 
    {
      name:"Mathisse", 
      img:"./assets/amelie.avif", 
      occupation:"co-CEO "
    },
    {
      name:"Gillou", 
      img:"./assets/gilles.jpg", 
      occupation:"Sympa"
    }
  ]

  return (
    <div className="App">
        <Team header={he} content={co} userTab={u}/>
        <Price header={he} content={co} userTab={u}/>
    </div>
  );
}

export default App;
