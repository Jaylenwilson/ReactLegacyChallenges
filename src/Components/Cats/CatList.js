import React, { Component } from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.cats.Map(cat => <li>{cat}</li>)}
    </div>
  )
}

CatList;
