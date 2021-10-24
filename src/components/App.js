import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function posCheck(number) {
  return number >= 0.00;
}
function billCalc(bill, tax) {
    return bill + (bill * tax / 100);
}

function twodigitRound(number) {
  return Math.round(number * 100) / 100;
}

function inputConverter(input) {
  const numbered = parseFloat(input);
  if (Number.isNaN(numbered)) {
    return '';
  } 
  const converted = twodigitRound(numbered);
  if (posCheck(converted)) {
    return converted;
  } else {
    return false;
  }
  
}


function getTotal(bill, tax) {
  const myBill = inputConverter(bill);
  const myTax = inputConverter(tax);
  if (!myBill || !myTax) {
    return "0";
  }
  const myTotal = billCalc(myBill, myTax);
  const roundTotal = twodigitRound(myTotal);
  return roundTotal;
}


function App() {
    const [bill, setBill] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    
    const handleBillChange = (event) => { 
      setBill(event.target.value);
                                  } 
    
    const handleTaxChange = (event) => { 
      setTax(event.target.value);
                                  } 
             
    return (
      <div class = "container text-center">
        <h1 class = "display-5">Simple Bill Calculator</h1>
        <p class="lead fs-6">Enter a positive number for both bill and tax.
          <br/>
          (Up to 2 decimal places.)</p>
        <form>
          
          <label class="form-label">
             <span class="input-group-text">Bill $:</span> 
            <input 
              name="bill"
              id="bill"
              type="number"
              min="0.00"
              step=".01"
              placeholder="3.50"
              class="form-control"
              value={bill}
              onChange={handleBillChange} 
                      /> 
              
          </label>
          
          <br/>
          
          <label class ="form-label">
             <span class="input-group-text"> Tax %: </span>
            <input 
              name="tax"
              id="tax"
              type="number"
              min="0.00"
              step=".01"
              placeholder="7.25"
              class="form-control"
              value={tax}
              onChange={handleTaxChange} 
                      />   
          </label>
          
        </form>
        <p class = "lead fs-2">Total: ${ getTotal(bill, tax) }</p>  
       
      </div> 
      )
    }



export default App;