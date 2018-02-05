"use strict";

var R = require('ramda');

var square = function square (x) { return x * x; };
var squares = R.chain(square, [1, 2, 3, 4, 5]);

// document.getElementById('response').innerHTML = squares;

var THREE = require('three');
var OrbitControls = require('three-orbit-controls')(THREE)

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var controls = new OrbitControls( camera );
controls.target.set( 0, 2, 0 );
controls.update();

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.1;
  cube.rotation.y += 0.1;

  renderer.render(scene, camera);
};

animate();
