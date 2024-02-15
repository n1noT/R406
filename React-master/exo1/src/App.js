import logo from './logo.svg';
import './App.css';
import Team from'./comps/team'
import Price from'./comps/price'

function App() {

  let data1 = {
    header:"Notre équipe",  
    content: {
      title:"Présentation de notre formidable équipe", 
      desc:" Découvrez les esprits créatifs qui propulsent Auto Innovation vers de nouveaux sommets dans le monde de la conduite à hydrogène."
    },
    employees:[
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
};

  let data2 = {
    header:"Prix et offres",  
    content: {
      title:"Théorie", 
      desc:"Détails des prix et offres GC corp"
    },
    offers:[
      {
        name:"Start", 
        price: {
          buy: "29 999",
          leasing: "299"
        }, 
        offerList:[
          {check: true, text: "Assurance auto complémentaire"},
          {check: true, text: "Première recharge offerte"},
          {check: true, text: "Assurance contre le vol"},
          {check: true, text: "Service de rappel d'entretien"},
          {check: true, text: "Nettoyage hebdomadaire"},
          {check: false, text: "Service de diagnostic à distance"},
          {check: false, text: "Service de remplissage du réservoir"},
          {check: false, text: "Service de réparation à domicile"},
          {check: false, text: "Entretien régulier"},
          {check: false, text: "Recharge d'hydrogène illimité"}
        ],
        form: {
          link:'#',
        }
      }, 
      {
        name:"Pro", 
        price: {
          buy: "59 999",
          leasing: "599"
        },  
        offerList:[
          {check: true, text: "Assurance auto complémentaire"},
          {check: true, text: "Première recharge offerte"},
          {check: true, text: "Assurance contre le vol"},
          {check: true, text: "Service de rappel d'entretien"},
          {check: true, text: "Nettoyage hebdomadaire"},
          {check: true, text: "Service de diagnostic à distance"},
          {check: true, text: "Service de remplissage du réservoir"},
          {check: false, text: "Service de réparation à domicile"},
          {check: false, text: "Entretien régulier"},
          {check: false, text: "Recharge d'hydrogène illimité"}

        ],
        form: {
          link:'#',
        }
      }, 
      {
        name:"Super Pro", 
        price: {
          buy: "99 999",
          leasing: "999"
        },  
        offerList:[
          {check: true, text: "Assurance auto complémentaire"},
          {check: true, text: "Première recharge offerte"},
          {check: true, text: "Assurance contre le vol"},
          {check: true, text: "Service de rappel d'entretien"},
          {check: true, text: "Nettoyage hebdomadaire"},
          {check: true, text: "Service de diagnostic à distance"},
          {check: true, text: "Service de remplissage du réservoir"},
          {check: true, text: "Service de réparation à domicile"},
          {check: true, text: "Entretien régulier"},
          {check: true, text: "Recharge d'hydrogène illimité"}

        ],
        form: {
          link:'#',
        }
      }, 
    
  ]
};

let cb_buy = function (){
  alert("oui")
}

  return (
    <div className="App">
        <Team {...data1}/>
        <Price {...data2, cb_buy}/>
      
    </div>
  );
}

export default App;
