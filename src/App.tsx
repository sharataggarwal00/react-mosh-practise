import { useState } from "react";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"

function App() {
  const handleSelectItem = (item: string) => {
    console.log(item);
    
  }

  const [ count, setCount ] = useState(0);

  const handleButtonClick = () => {
    console.log("Button Clicked");
    setCount(count + 1);
  }

  return <div>
    <ListGroup
      heading={"Venues for GP"} 
      items={[ "Australia", "China", "Japan", "Austria", "Great Britain", "Azerbaijaan"]}
      onSelectItem={handleSelectItem}
    />
    <p>
      <Button onClick={handleButtonClick} variant="primary">
        First Button
      </Button>

      <Button onClick={handleButtonClick} variant="secondary">
        {count}
      </Button>

      <Button onClick={handleButtonClick} variant="success">
        Success
      </Button>
    </p>
  </div>
}

export default App;