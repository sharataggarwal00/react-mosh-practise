import ListGroup from "./components/ListGroup"

function App() {
  return <div>
    <ListGroup
      heading={"Venues for GP"} 
      items={[ "Australia", "China", "Japan", "Austria", "Great Britain", "Azerbaijaan"]}
    />
  </div>
}

export default App;