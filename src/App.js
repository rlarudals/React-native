import React from 'react';
import "./styles.css"

// JSX : javascript XML
// 역할 : javascript가 html 제어
// 1. js에서 html 생성
// 2. js에서 html 제어

const people = ["123", "456", "789"]

function App() {
  return ( <>
          <h1>Hello World!!</h1>
          <p>REAECT</p>;

          <h3>{people}</h3>

          </>
         );
}

export default App;
