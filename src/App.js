import './App.css';
import Form from "./components/Form";
import Result from "./components/Result";
import {useState} from "react";

function App() {
  const [obj, setObj] = useState({__html: ''});

  const onChangeText = (i) => setObj(i);

  return (
    <div className="wrapper">
      <div className="left">
        <Form onChangeText={onChangeText}/>
      </div>
      <div className="right">
        <Result obj={obj} />
      </div>
    </div>
  );
}

export default App;
