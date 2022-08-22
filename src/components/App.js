import React, { useReducer } from 'react';

import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';

import reducer, {initialState} from '../reducers/index'
import { applyNumber, ChangeOperation, ClearDisplay } from '../actions'

function App() {
  const [state, dispatch]= useReducer(reducer, initialState)

  const handleNumberClick = (number) => {
    dispatch(applyNumber(number))
  }

  const handleOperation = (operator) => {
    dispatch(ChangeOperation(operator))
  }

  const handleDisplay = () => {
    dispatch(ClearDisplay())
  }

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleNumberClick}/>
              <CalcButton value={2} onClick={() => handleNumberClick}/>
              <CalcButton value={3} onClick={() => handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleNumberClick}/>
              <CalcButton value={5} onClick={() => handleNumberClick}/>
              <CalcButton value={6} onClick={() => handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleNumberClick}/>
              <CalcButton value={8} onClick={() => handleNumberClick}/>
              <CalcButton value={9} onClick={() => handleNumberClick}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={() => handleOperation}/>
              <CalcButton value={"*"} onClick={() => handleOperation}/>
              <CalcButton value={"-"} onClick={() => handleOperation}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleDisplay}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
