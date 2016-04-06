import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

// import AppRoot from './components/AppRoot.jsx';

// ReactDOM.render(
//   AppRoot,
//   document.getElementById('app-root')
// );
import expect from 'expect'
import deepFreeze from 'deep-freeze'

const incrementCounter = (list,index) =>{
  return [
  ...list.slice(0, index),
  list[index] + 1,
  ...list.slice(index + 1)
  ]
};

const addCounter = (list) => {
  return [...list, 0];
};

const removeCounter = (list,index) => {
  
  return [
    ...list.slice(0,index),
    ...list.slice(index +1)
    ]
};

const testIncrementCounter = () => {
  const listBefore = [0,10,20];
  const listAfter = [0,11,20];
  
  deepFreeze(listBefore);
  expect(
    incrementCounter(listBefore,1)
    ).toEqual(listAfter);
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];

  deepFreeze(listBefore);

  expect(
    addCounter(listBefore)
    ).toEqual(listAfter);
}

const textRemoveCounter = () => {
  const listBefore = [0, 10, 20];
  const listAfter = [0, 20];

  deepFreeze(listBefore);

  expect(
    removeCounter(listBefore,1)
    ).toEqual(listAfter);
}

testAddCounter();
textRemoveCounter();
testIncrementCounter();

console.log('all tests passed!!!')
