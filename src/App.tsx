import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();

  const { depositMoney, withdrawMoney, bankrupt } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State)=> state.bank)
  const [money, setMoney] = useState(0);
  
  return (
    <div className="App">
      <h1>{amount}</h1>
      <input type="number" placeholder='1000'onChange={event => setMoney(parseInt(event.target.value))}/>
      <div>
        <button onClick={()=>depositMoney(money)}>Deposit</button>
        <button onClick={()=>withdrawMoney(money)}>Withdraw</button>
        <button onClick={()=>bankrupt()}>Bankrupt</button>
      </div>
    </div>
  );
}

export default App;
