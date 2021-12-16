import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import getStudentsByName from './APIfunctions';
import { getStudents } from './APIfunctions';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// let data = []
// getStudents().then((response) => {
//   data = response
//   console.log(data)
// })

console.log(getStudentsByName('Harry'))

getStudentsByName('hArry').then((response)=>{
  console.log(response)
})


