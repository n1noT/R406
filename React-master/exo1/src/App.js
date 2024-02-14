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
        price:"29 999", 
        offerList:[
          {key: '16846', check: true, text: "Offre 1 "},
          {key: '1486', check: true, text: "Offre 2 "},
          {key: '1684468', check: false, text: "Offre 3 "},
          {key: '164868', check: false, text: "Offre 4"},
          {key: '1', check: false, text: "Offre 5 "},
          {key: '1684684', check: false, text: "Offre 6 "},
          {key: '168468', check: false, text: "Offre 7 "},
        ],
        form: {
          link:'#',
          btn: 'Start'
        }
      }, 
      {
        name:"Pro", 
        price:"59 999", 
        offerList:[
          {key: '2', check: true, text: "Offre 1 "},
          {key: '166', check: true, text: "Offre 2 "},
          {key: '16846', check: true, text: "Offre 3 "},
          {key: '16848', check: true, text: "Offre 4 "},
          {key: '168476', check: true, text: "Offre 5 "},
          {key: '1646', check: false, text: "Offre 6"},
          {key: '1254', check: false, text: "Offre 7 "},
        ],
        form: {
          link:'#',
          btn: 'Start'
        }
      }, 
      {
        name:"Super Pro", 
        price:"99 999", 
        offerList:[
          {key: '8', check: true, text: "Offre 1 "},
          {key: '1686', check: true, text: "Offre 2 "},
          {key: '168476', check: true, text: "Offre 3 "},
          {key: '168483', check: true, text: "Offre 4 "},
          {key: '1684763', check: true, text: "Offre 5 "},
          {key: '1646411', check: false, text: "Offre 6"},
          {key: '12542', check: false, text: "Offre 7 "},
        ],
        form: {
          link:'#',
          btn: 'Start'
        }
      }, 
    
  ]
};

  return (
    <div className="App">
        <Team {...data1}/>
        <Price {...data2}/>
      
    </div>
  );
}

export default App;
