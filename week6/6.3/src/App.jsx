import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useMemo } from 'react';

function App() {
  const [exchangeData1, setExchangeData1] = useState({});
  const [exchangeData2, setExchangeData2] = useState({});
  const [bankData, setBankData] = useState({});

  console.log("in the app.jsx");

  useEffect(()=>{
    // console.log("inside useeffect hook 3s");
    setTimeout( ()=>{
      setBankData({
        income : 300
      });
    }, 30000);
  }, []);


  useEffect(()=>{
    // console.log("inside useeffect hook 1s");
    setTimeout( ()=> {
      setExchangeData1({
        returns : 100
      });
    }, 10000);
  }, []);

  useEffect(()=>{
    // console.log("inside useeffect hook 1s");
    setTimeout( ()=> {
      setExchangeData2({
        returns : 200
      });
    }, 10000);
  }, []);

  const cryptoReturns = useMemo( ()=>{
    console.log(`inside use memo`);
    return exchangeData1.returns + exchangeData2.returns;
  }, [exchangeData1, exchangeData2] );
  const incomeTax = ((bankData.income || 0) + (cryptoReturns || 0)) * 0.3;

  return (
    <>
      hi there, your income tax returns are {incomeTax}
    </>
  )
}

export default App
