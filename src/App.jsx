
import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/SearchBox/search-box.component';

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonster] = useState(monsters);

  const onSearchHandler = (event) => {
    const onSearchString = event.target.value.toLocaleLowerCase();
    setSearchField(onSearchString)
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => setMonsters(users))
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      // console.log(monsters);
      return monster.name.toLocaleLowerCase().includes(searchField);
    })
    setFilteredMonster(newFilteredMonsters);
  }, [monsters, searchField])


  monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  return (
    <div className="App">
      <div className="container">
       <div className="head">
       <h1>Search Your Monster Card</h1>
        <SearchBox className='monsters-search-box' onChangeHandler={onSearchHandler} placeholder="Search Monster"></SearchBox>
       </div>
        <CardList monsters={filteredMonsters} />
        <div>
        </div>
      </div>
    </div>
  );
}


export default App;
