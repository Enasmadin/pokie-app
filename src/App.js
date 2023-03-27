import axios from 'axios';
import{useEffect,useState} from "react";
import Pagination from './components/Pagination';
import Pokmoenlist from"./Pokmoenlist"

function App() {
  const [pokmon,setpokmon]=useState([]);
  const [loading,setloading]= useState(true);
  const [CurrentUrl,setCurrentUrl]=useState("https://pokeapi.co/api/v2/pokemon");
  const [NextPage,setNextPage] = useState();
  const [PrevPage,setPrevPage] = useState();
  useEffect(()=>{
    let cancel;
    axios.get(CurrentUrl,{
      cancelToken:new axios.CancelToken((c)=> (cancel= c))
    })
    .then( 
      (response)=>{
        setpokmon(response.data.results.map((p)=>p.name));
         setloading(false);
         setNextPage(response.data.next);
         setPrevPage(response.data.previous)
      } 
    )
    .catch((erorr)=>{
      console.log(erorr);
       setloading(true)
    });
    return()=>{
      cancel();
    }
 
  },[CurrentUrl])
  if(loading) return(<div> ...loading </div>);

  function GoToNextPage() {
    setCurrentUrl(NextPage)
  }
  function GoToPrevPage() {
    setCurrentUrl(PrevPage)
  }
  return (
    <div className="App">
      
      
      <Pokmoenlist  pokmon={pokmon}    />
      <Pagination GoToNextPage={NextPage ? GoToNextPage:null} GoToPrevPage={PrevPage ? GoToPrevPage:null}/>
    </div>
  );
}

export default App;
