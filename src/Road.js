import Expo from 'expo'
import React, {Component} from 'react';

import ModelLoader from '../utils/ModelLoader';
import {TweenMax, Power2, TimelineLite} from "gsap";
import * as THREE from 'three';

export default class Road {
  models = [];
  constructor() {
  }

  getRandomRoad = () => {
    var keys = Object.keys(this.models)
    return this.models[keys[ keys.length * Math.random() << 0]];
  }

  setup = async () => {

    for (let i = 0; i < 2; i++) {

      try {
        const model = await ModelLoader(`road_${i}`);
        model.receiveShadow = true;
        model.castShadow = true;
        model.traverse( function( node ) { if ( node instanceof THREE.Mesh ) { node.castShadow = true; } } );
        this.models[`${i}`] = model;
      } catch (error) {
        console.error(error);
      }
    }
  }




}