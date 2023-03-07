import { useEffect, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Nav from "./components/nav";
function App() {
  useEffect(() => {
    //A Scene
    const scene = new THREE.Scene();

    // Renderer
    const canvas = document.getElementById("threeJsCanvas");
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    // the geometry is more like the shape and the parameters defines how the shapes are going to be
    const geometry = new THREE.SphereGeometry(6, 64, 7);

    // the material comes in various types, so as the geometry, we can apply styles and attribute to our geometry using material
    const materials = new THREE.MeshStandardMaterial({ color: "#00ff83" });

    const light = new THREE.PointLight("#ffffff", 1, 80);
    light.position.set(5, 9, 25);
    scene.add(light);

    //mesh takes the geometry defined and apply the materials, so we can add to our scenes
    const mesh = new THREE.Mesh(geometry, materials);
    // scene. we will add our mesh to the scene
    scene.add(mesh);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );

    camera.position.z = 20;

    const controls = new OrbitControls(camera, canvas);
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.02;
      mesh.rotation.y += 0.02;
      renderer.render(scene, camera);
    };
    animate();
  });
  return (
    <div className="App">
      <Nav />
      <p className="spin-text">Give it a Spin</p>
      <canvas id="threeJsCanvas" />
    </div>
  );
}

export default App;
