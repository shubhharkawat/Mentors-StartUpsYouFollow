import './App.css';
import Header from './Header'
import SearchBar from './SearchBar'
import Content from './Content'
function App() {
  return (
    <div className="App">
      <div className="App__Header">
        <Header />
      </div>
      <div className="App__SearchBar">
        <SearchBar />
      </div>
      <div className="App__Body">
        <Content />
      </div>
    </div>
  ); 
}

export default App;
