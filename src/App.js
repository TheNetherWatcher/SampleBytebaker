import React, {useState} from 'react';              //Importing React 
import Navbar from './MyComponents/Navbar';           //Importing Navbar
import './App.css';           //Importing css file
import { VerticalLine} from './MyComponents/splitscreen';     //Importing various sections
import Footer from './MyComponents/footer';
import './App.css'
import './MyComponents/buttonsection.css'
import './MyComponents/sectioncontent.css'
import './MyComponents/sectioncontent2.css'
import CryptoJS from 'crypto-js';



function App() {  
  const [text, setText] = useState("");
  const [value, setValue] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  // let x = text
  // setValue(text)
  const handleMD5 = () => {
    setValue(CryptoJS.MD5(text))
  }
  const handleSHA1 = () => {
    setValue(CryptoJS.SHA1(text))
  }
  const handleSHA224 = () => {
    setValue(CryptoJS.SHA224(text))
  }
  const handleSHA256 = () => {
    setValue(CryptoJS.SHA256(text))
  }
  return (
    <>
    <div>
      <Navbar/>
    </div>
    <div className="app">
      <div className='left-section' >
      <div className="section-content-2">
    <span className="span-area my-2">OPERATIONS</span>
    
    </div>
      <div className="button-group">
     
        <button className="custom-button" onClick={handleMD5}>MD5</button>
        <button className="custom-button" onClick={handleSHA1}>SHA-1</button>
        <button className="custom-button" onClick={handleSHA224}>SHA-224</button>
        <button className="custom-button" onClick={handleSHA256}>SHA-256</button>
        <button className="custom-button">RSA</button>
        <button className="custom-button">Base64</button>
        <button className="custom-button">URL encoding</button>
        <button className="custom-button">HTML encoding</button>
        <button className="custom-button">Hexadecimal</button>
        <button className="custom-button">Binary</button>
        <button className="custom-button">Lorem</button>
        <button className="custom-button">Ipsum</button>
        <button className="custom-button">Lorem</button>
        <button className="custom-button">Ipsum</button>
        <button className="custom-button">Lorem</button>
      </div>
      </div>
      <VerticalLine />
      <div className='last-section'>
      <div className="section-content-2">
    <span className="span-area my-2">More About It</span>
    <textarea className="text-area-2" ></textarea>
    </div>
    </div>
   
      <VerticalLine />
      <div className='right-section'>
      <div className="section-content">
        <span className="span-area my-2">INPUT</span>
        <textarea className="text-area" value={text} onChange={handleOnChange}></textarea>
        </div>
        <div className="section-content">
        <span className="span-area my-2">OUTPUT</span>
        <textarea className="text-area" value={value}></textarea>
      </div>  
      </div> 
    </div>
    <div>
    <Footer/>
    </div>
    </>
  );
}

export default App;