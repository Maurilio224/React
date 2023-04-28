import Age from "./Age";
import Welcome from "./Welcome";

function App(props) {
  return (
    <>
      <Welcome name={"Maurilio"} />
      <Age age={64} />
    </>
  );

}

export default App;
