import React, { useReducer, useRef } from 'react';

import './App.css';
const reducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: state.length,
          name: action.name
        }
      ]
    case 'remove':
      return [
        state.filter((id) => id !== action.id)
      ]

    case 'clear':
      return []


    default:
      return state;
  }


}
function App() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer(reducer, [])

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: 'add',
      name: inputRef.current.value
    });
    inputRef.current.value = '';

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} /> <br />
      </form>

      <button onClick={() => dispatch({ type: 'clear' })}>
        Clear List
          </button>

      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            <button> {item.name}</button>
            <button
              onClick={(id) => dispatch({ type: 'remove', id })}
            >
              X
            </button>
          </li>
        ))}

      </ul>


    </div>

  );
}

export default App;
