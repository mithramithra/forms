import React,{ useState} from "react";

const App = () => {
  const [name, setName] = useState("");
  const[list,setlist] = useState([]);

  console.log(list)
  
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleAdd = (event) => {
    event.preventDefault();
    setlist([...list, name]);
    setName("")
  };
  return (
  <form className="form" onSubmit={handleAdd}>
    <label>Name:</label>
    <input placeholder="your Name" value={name} onChange={handleChange} />
    
    
    <button>Add</button>
    </form>
  );
  
};

export default App;
