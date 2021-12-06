import { useState } from 'react'
import './App.css';
import contacts from './contacts.json'

function App() {
  

  const [allContacts, setContacts] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4], contacts[5]])


  function handleAdd() {
    let randomPerson = contacts[Math.floor(Math.random() * contacts.length - 5)];
    setContacts([randomPerson, ...allContacts]);
  }

  function handleSortByPopularity() {
    let clone = JSON.parse(JSON.stringify(allContacts))
    clone.sort((first, second) => {
      if (first.popularity > second.popularity) {
        return 1
      } else if (first.popularity < second.popularity) {
        return -1
      } else {
        return 0
      }
    })
    setContacts(clone)
  }

  function handleSortByName() {
    let clone = JSON.parse(JSON.stringify(allContacts));
    clone.sort((first, second) => {
      if (first.name > second.name) {
        return 1;
      } else if (first.name < second.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setContacts(clone);
  }


  
    function handleDelete(id) {
      let filteredContacts = allContacts.filter((ele) => {
        return ele.id !== id;
      });
      // Updating the state 'allPeople' with the filtered list
      setContacts(filteredContacts);
    }



  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={handleAdd}>Add Random Contact</button>
      <button onClick={handleSortByPopularity}>Sort By Popularity</button>
      <button onClick={handleSortByName}>Sort By Name</button>
      {allContacts.map((ele) => {
        return (
          <div>
            <h1>Name: {ele.name}</h1>
            <p>Popularity: {ele.popularity}</p>
            <img src={ele.pictureUrl} />
            <p>Won an Oscar: {ele.wonOscar == true && "🏆"} </p>
            <p>Won an Emmy: {ele.wonEmmy == true && "🏆"} </p>
            <button
              onClick={() => {
                handleDelete(ele.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}


export default App;
