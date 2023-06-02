import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {
  // Nos pide el enunciado que creemos una variable de estado para guardar todos los contactos. Copiamos el array de objetos con el operador de spread
  const [allContacts, setAllContacts] = useState([...contacts]);
  const [orderBy, setOrderBy] = useState("");

  if (orderBy === "name") {
    allContacts.sort((a, b) => a.name.localeCompare(b.name));

    // contacts.sort((a, b) => b.name - a.name)
  } else if (orderBy === "popularity") {
    allContacts.sort((a, b) => b.popularity - a.popularity);
  }

  const handleOrder = (event) => {
    console.log(event.target.value);
    setOrderBy(event.target.value);
    // let sortedCelebrities = [];
  }
  
  

   const handleDelete = (id) => {
      const newArray = allContacts.filter((c) => c.id !== id);
      setAllContacts(newArray);
    };

  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button style={{ color: "black", border: "1px solid black" }}>
        Add Random Contact
      </button>
      <button
        value="name"
        onClick={handleOrder}
        style={{ color: "black", border: "1px solid black" }}
      >
        Sort by name
      </button>
      <button
        value="popularity"
        onClick={handleOrder}
        style={{ color: "black", border: "1px solid black" }}
      >
        Sort by Popularity
      </button>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {allContacts.map((c) => (
            <tr key={c.id}>
              <td>
                <img
                  style={{ width: 100 }}
                  src={c.pictureUrl}
                  alt={c.name}
                ></img>
              </td>
              <td>{c.name}</td>
              <td>{c.popularity.toFixed(2)}</td>
              <td>{c.wonOscar ? "🏆" : ""}</td>
              <td>{c.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button
                  onClick={() => handleDelete(c.id)}
                  style={{ color: "black", border: "1px solid black" }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
