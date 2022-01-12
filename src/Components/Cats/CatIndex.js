import React, { Component } from 'react';
import CatList from './CatList';

class CatIndex {
  constructor(props) {
    super(props)
    this.state = {
      breeds: ['persian', 'siamese', 'maine coon', 'ragdoll', 'scottish fold', 'sphynx', 'british shorthair', 'bengal', 'american shorthair']
    }
  }

  render(props) {
    <div>
      <CatList cats={this.state.breeds} />
    </div>
  }
  ;

}

