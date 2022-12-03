import React from 'react';
import ReactDOM from 'react-dom/client';
import Calculator from './Calculator';
import Home from './Home';
import EventCompo from './EventCompo';
import MapCompo from './MapCompo';

const root = ReactDOM.createRoot(document.getElementById('root'));
function friendObj2(name, family, placeName){
  this.name = name;
  this.family = family;
  this.placeName = placeName;
}

function calcObj(num1,num2,operator){
  this.num1 = num1;
  this.num2 = num2;
  this.operator = operator;
}
const calc1 = new calcObj("1.7","5.3","+");

const friend1 = new friendObj2("Luke1","Shin1","Vancouver");

const friend ={
  name: "Luke",
  family: "Shin",
  placeName: "Vancouver"
}

root.render(
  <>
    <Home color='red' type="heading" friendObj={friend1}/>
    <Home color='green' type="text" friendObj={friend}/>
    <Calculator num1={calc1.num1} num2={calc1.num2} operator={calc1.operator} />
    <MapCompo/>
    <EventCompo name = "Luke" age='16'/>

  </>
);
