import './App.css';
import React,{useState, useEffect} from 'react';

function App() {

  const [currentSum,setCurrentSum]=useState(0);
  const [clear,setClear]=useState(false);
  
useEffect(()=>{
  document.querySelector('#result').value="";
},[])

  const Add=(e)=>{
    e.preventDefault();
    if(clear) setClear(false);
    let Num1=document.querySelector('#num1').value;
    let Num2=document.querySelector('#num2').value;

    if(Num1==='' || Num2==='')  {
      document.getElementById('success').style.display = 'none';
      document.getElementById('error').style.display = 'block';
      document.getElementById('result').style.display = 'none';
      return;
    }

    document.getElementById('result').innerText = `Result = ${parseInt(Num1)+parseInt(Num2)}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('success').style.display = 'block';
    document.getElementById('error').style.display = 'none';
}

const sub=(e)=>{
  e.preventDefault();
  if(clear) setClear(false);
  let Num1=document.querySelector('#num1').value;
  let Num2=document.querySelector('#num2').value;

  if(Num1==='' || Num2==='')  {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    return;
  }

  document.getElementById('result').innerText = `Result = ${Num1-Num2}`;
  document.getElementById('result').style.display = 'block';
  document.getElementById('success').style.display = 'block';
  document.getElementById('error').style.display = 'none';
}

const multi=(e)=>{
  e.preventDefault();
  if(clear) setClear(false);
  let Num1=document.querySelector('#num1').value;
  let Num2=document.querySelector('#num2').value;

  if(Num1==='' || Num2==='')   {
    document.getElementById('error').style.display = 'block';
    document.getElementById('success').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    return;
  }
  console.log(Num1*Num2);

  document.getElementById('result').innerText = `Result = ${Num1*Num2}`;
  document.getElementById('result').style.display = 'block';
  document.getElementById('success').style.display = 'block';
  document.getElementById('error').style.display = 'none';
}

const div=(e)=>{
  e.preventDefault();
  if(clear) setClear(false);
  let Num1=document.querySelector('#num1').value;
  let Num2=document.querySelector('#num2').value;

  if(Num1==='' || Num2==='')  {
    document.getElementById('success').style.display = 'none';
    document.getElementById('error').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    return;
  }

  document.getElementById('result').innerText = `Result = ${Num1/Num2}`;
  document.getElementById('result').style.display = 'block';
  document.getElementById('success').style.display = 'block';
  document.getElementById('error').style.display = 'none';
}

const Clear=(e)=>{
  e.preventDefault();
  console.log('sum:', currentSum);
  document.querySelector('form').reset();
  document.getElementById('result').innerText = '';
  document.getElementById('success').style.display = 'none';
  document.getElementById('error').style.display = 'none';
  setClear(true);
  setCurrentSum(0);
}

  return (
    <div className="App">
        <form className="container">
          <h1 id="heading">React Calculator</h1>
          <input id= "num1" type="text" placeholder="Num 1"/>
          <br/>
          <input id="num2" type="text" placeholder="Num 2"/>
          <br/>
          <div className="operation">
              <button id="add" onClick={Add}>+</button>
              <button id="sub" onClick={sub}>-</button>
              <button id="multi" onClick={multi}>*</button>
              <button id="div" onClick={div}>/</button>
              <button onClick={Clear}>Clear</button>
          </div>
          <div id="result"></div>
          <div id="error">Error :  Inputs cannot be empty</div>
          <div id="success">Success : Your result is shown above!</div>
      </form>
    </div>
  );
}

export default App;
