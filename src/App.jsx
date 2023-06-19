import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
//  ************  General Example **********
// const ComponentC=()=>{
//   return(
//     <h3>Component C</h3>
//   )
// }

// const ComponentB=()=>{
//   return(
//     <div>
//       <h3>Component B</h3>
//       <ComponentC/>
//     </div>
//   )
//  }
// const ComponentA=()=>{
//   return<h3>Component A</h3>
// }
// const App = () => {
//   return (
//     <main>
//       < ComponentA/>
//       <ComponentB/>
//     </main>
//   );
// };

const ComponentC = ({ userName }) => {
  return <h3>Component C:{userName}</h3>;
};

const ComponentB = (props) => {
  return (
    <div>
      <h3>Component B</h3>
      <ComponentC {...props} />
    </div>
  );
};
const ComponentA = (props) => {
  return (
    <div>
      <h3>Component A</h3>
      <ComponentB {...props} />
    </div>
  );
};

const App = () => {
  const userName = "Oscar Isaac";
  return (
    <main>
      <ComponentA userName={userName} />
    </main>
  );
};

export default App;
