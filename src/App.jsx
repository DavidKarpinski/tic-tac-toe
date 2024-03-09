import './App.css'
import Board from './components/Board/Board';

const App = function () {
  return (
    <div className='App'>
      <main>
        <Board
        />
      </main>
      <div className='moves'>
        <p>Moves</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa delectus quidem sequi recusandae error, libero rem ut necessitatibus voluptates. Maxime pariatur rerum dolor sint architecto rem labore quaerat repellendus. Suscipit?</p>
      </div>
    </div>
  );
}

export default App
