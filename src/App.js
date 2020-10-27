import React from 'react';
import './App.css';
// import NavBar from './components/NavBar'
// import MainContent from './components/MainContent'
// import Footer from './components/Footer'
import Time from './components/Time'
// import Todo from './components/Todo'
// import Joke from './components/Joke'
// import jokesData from './jokesData'

const App = () => {

  //mapping components
  //using maps
  // const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)

  //using Filters
  // const jokeFilter = jokesData.filter(joke => joke.question !== '')
  // const jokeComponents = jokeFilter.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)


  return (
    <div className="App-header">      
      {/* <NavBar/>
      <MainContent />
      <Footer /> */}
      <Time/>
      {/* <h6>Todo-List</h6> */}
      {/* <div className="todo-list">
        <Todo question="hey how are you?"/> //using props
        <Todo/>
        <Todo/>
        <Todo/>
      </div> */}
      {/* <h5>Jokes! have a laugh mate </h5> */}
      {/* <div> */}
        {/* mapping components */}
        {/* {jokeComponents}  */}
        {/* <Joke />
        <Joke />
        <Joke question="" punchLine=""/> */}
      {/* </div> */}
    </div>
  );
}

export default App;
