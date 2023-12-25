import { SphereGeometry, MeshStandardMaterial, Mesh } from 'three';

// Create eye geometry
const eyeGeometry = new SphereGeometry(0.1, 32, 32);
const eyeMaterial = new MeshStandardMaterial({ color: 0xffffff }); // You can adjust the color
const eye = new Mesh(eyeGeometry, eyeMaterial);
