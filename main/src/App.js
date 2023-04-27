import Age from "./Age";
import Welcome from "./Welcome";

function App(props) {
  if(props.age){return (
    <>
    <Welcome name = {"Maurilio"} />
    <Age age ={18}/>
    </>
  );}else{return(
    <><Welcome name = {"Maurilio"} /></>
  )}
  
}

export default App;
