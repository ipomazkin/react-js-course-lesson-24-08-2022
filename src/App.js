import logo from './logo.svg';
import './App.css';
import { Button } from "./FuttonFunc";
import { Dropdown } from "./Dropdown";
import { TodoList } from "./TodoList";

function App() {
  const html = `<div><p>Lorem ipsum dolor sit amet</p></div>`

  return (
    <div className="App" id="1234" title={123 * 10 / 2} tabIndex="0" data-test={123} aria-atomic={123}>
      {/*<Dropdown />*/}
      {/*<div dangerouslySetInnerHTML={{__html: html}} />*/}
      <TodoList />
    </div>
  );
}

export default App;
