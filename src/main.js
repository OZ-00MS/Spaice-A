    const mercuryContainer = document.getElementById("mercury");
// Mercury Renderer
const mercuryRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
mercuryRenderer.setSize(200, 200);
mercuryContainer.appendChild(mercuryRenderer.domElement);

// Mercury Scene and Camera
const mercuryScene = new THREE.Scene();
const mercuryCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
mercuryCamera.position.z = 6;

// Mercury Geometry and Material
const mercuryGeometry = new THREE.SphereGeometry(2, 64, 64);
const mercuryTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/mercury.jpg"); // Make sure this file path is correct
const mercuryMaterial = new THREE.MeshStandardMaterial({ map: mercuryTexture });
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryScene.add(mercuryMesh);

// Mercury Lighting
const mercuryAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const mercuryPointLight = new THREE.PointLight(0xffffff, 1.2);
mercuryPointLight.position.set(5, 5, 5);
mercuryScene.add(mercuryAmbientLight, mercuryPointLight);

// Mercury Animation loop
function animateMercury() {
  requestAnimationFrame(animateMercury);
  mercuryMesh.rotation.y += 0.003;
  mercuryRenderer.render(mercuryScene, mercuryCamera);
}
animateMercury();

const venusContainer = document.getElementById("venus");

// Venus Renderer
const venusRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
venusRenderer.setSize(200, 200);
venusContainer.appendChild(venusRenderer.domElement);

// Venus Scene and Camera
const venusScene = new THREE.Scene();
const venusCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
venusCamera.position.z = 6;

// Venus Geometry and Material
const venusGeometry = new THREE.SphereGeometry(2, 64, 64);
const venusTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/venus.jpg"); // Update path if needed
const venusMaterial = new THREE.MeshStandardMaterial({ map: venusTexture });
const venusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
venusScene.add(venusMesh);

// Venus Lighting
const venusAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const venusPointLight = new THREE.PointLight(0xffffff, 1.2);
venusPointLight.position.set(5, 5, 5);
venusScene.add(venusAmbientLight, venusPointLight);

// Venus Animation loop
function animateVenus() {
  requestAnimationFrame(animateVenus);
  venusMesh.rotation.y += 0.003;
  venusRenderer.render(venusScene, venusCamera);
}
animateVenus();

const marsContainer = document.getElementById("mars");

// Mars Renderer
const marsRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
marsRenderer.setSize(200, 200);
marsContainer.appendChild(marsRenderer.domElement);

// Mars Scene and Camera
const marsScene = new THREE.Scene();
const marsCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
marsCamera.position.z = 6;

// Mars Geometry and Material
const marsGeometry = new THREE.SphereGeometry(2, 64, 64);
const marsTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/mars.jpg"); // Adjust path if needed
const marsMaterial = new THREE.MeshStandardMaterial({ map: marsTexture });
const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsScene.add(marsMesh);

// Mars Lighting
const marsAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const marsPointLight = new THREE.PointLight(0xffffff, 1.2);
marsPointLight.position.set(5, 5, 5);
marsScene.add(marsAmbientLight, marsPointLight);

// Mars Animation loop
function animateMars() {
  requestAnimationFrame(animateMars);
  marsMesh.rotation.y += 0.003;
  marsRenderer.render(marsScene, marsCamera);
}
animateMars();

const jupiterContainer = document.getElementById("jupiter");

// Jupiter Renderer
const jupiterRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
jupiterRenderer.setSize(200, 200);
jupiterContainer.appendChild(jupiterRenderer.domElement);

// Jupiter Scene and Camera
const jupiterScene = new THREE.Scene();
const jupiterCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
jupiterCamera.position.z = 6;

// Jupiter Geometry and Material
const jupiterGeometry = new THREE.SphereGeometry(2, 64, 64);
const jupiterTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/jupiter.jpg"); // Adjust path if needed
const jupiterMaterial = new THREE.MeshStandardMaterial({ map: jupiterTexture });
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterScene.add(jupiterMesh);

// Jupiter Lighting
const jupiterAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const jupiterPointLight = new THREE.PointLight(0xffffff, 1.2);
jupiterPointLight.position.set(5, 5, 5);
jupiterScene.add(jupiterAmbientLight, jupiterPointLight);

// Jupiter Animation loop
function animateJupiter() {
  requestAnimationFrame(animateJupiter);
  jupiterMesh.rotation.y += 0.003;
  jupiterRenderer.render(jupiterScene, jupiterCamera);
}
animateJupiter();

const uranusContainer = document.getElementById("uranus");

// Uranus Renderer
const uranusRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
uranusRenderer.setSize(200, 200);
uranusContainer.appendChild(uranusRenderer.domElement);

// Uranus Scene and Camera
const uranusScene = new THREE.Scene();
const uranusCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
uranusCamera.position.z = 6;

// Uranus Geometry and Material
const uranusGeometry = new THREE.SphereGeometry(2, 64, 64);
const uranusTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/uranus.jpg"); // Adjust path if needed
const uranusMaterial = new THREE.MeshStandardMaterial({ map: uranusTexture });
const uranusMesh = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranusScene.add(uranusMesh);

// Uranus Lighting
const uranusAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const uranusPointLight = new THREE.PointLight(0xffffff, 1.2);
uranusPointLight.position.set(5, 5, 5);
uranusScene.add(uranusAmbientLight, uranusPointLight);

// Uranus Animation loop
function animateUranus() {
  requestAnimationFrame(animateUranus);
  uranusMesh.rotation.y += 0.003;
  uranusRenderer.render(uranusScene, uranusCamera);
}
animateUranus();
const neptuneContainer = document.getElementById("neptune");  
// Neptune Renderer
const neptuneRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
neptuneRenderer.setSize(200, 200);
neptuneContainer.appendChild(neptuneRenderer.domElement); 
// Neptune Scene and Camera
const neptuneScene = new THREE.Scene();
const neptuneCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
neptuneCamera.position.z = 6;

// Neptune Geometry and Material
const neptuneGeometry = new THREE.SphereGeometry(2, 64, 64);  
const neptuneTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/neptune.jpg"); // Adjust path if needed
const neptuneMaterial = new THREE.MeshStandardMaterial({ map: neptuneTexture });
const neptuneMesh = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptuneScene.add(neptuneMesh);

// Neptune Lighting
const neptuneAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const neptunePointLight = new THREE.PointLight(0xffffff, 1.2);
neptunePointLight.position.set(5, 5, 5);
neptuneScene.add(neptuneAmbientLight, neptunePointLight);
// Neptune Animation loop
function animateNeptune() {
  requestAnimationFrame(animateNeptune);
  neptuneMesh.rotation.y += 0.003;
  neptuneRenderer.render(neptuneScene, neptuneCamera);
}
animateNeptune();

// saturn
const saturnContainer = document.getElementById("saturn");
// Saturn Renderer
const saturnRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
saturnRenderer.setSize(200, 200);
saturnContainer.appendChild(saturnRenderer.domElement);
// Saturn Scene and Camera
const saturnScene = new THREE.Scene();
const saturnCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
saturnCamera.position.z = 6;
// Saturn Geometry and Material
const saturnGeometry = new THREE.SphereGeometry(2, 64, 64);
const saturnTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/saturn.jpg"); // Adjust path if needed
const saturnMaterial = new THREE.MeshStandardMaterial({ map: saturnTexture });
const saturnMesh = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturnScene.add(saturnMesh);
// Saturn Lighting
const saturnAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const saturnPointLight = new THREE.PointLight(0xffffff, 1.2);
saturnPointLight.position.set(5, 5, 5);
saturnScene.add(saturnAmbientLight, saturnPointLight);
// Saturn Animation loop
function animateSaturn() {
  requestAnimationFrame(animateSaturn);
  saturnMesh.rotation.y += 0.003;
  saturnRenderer.render(saturnScene, saturnCamera);
}
animateSaturn();

// sun
const sunContainer = document.getElementById("sun");
// Sun Renderer
const sunRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
sunRenderer.setSize(200, 200);
sunContainer.appendChild(sunRenderer.domElement);
// Sun Scene and Camera
const sunScene = new THREE.Scene();
const sunCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
sunCamera.position.z = 8;
// Sun Geometry and Material
const sunGeometry = new THREE.SphereGeometry(3, 60, 60);
const sunTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/sun.jpg"); // Adjust path if needed
const sunMaterial = new THREE.MeshStandardMaterial({ map: sunTexture });
const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
sunScene.add(sunMesh);
// Sun Lighting
const sunAmbientLight = new THREE.AmbientLight(0xffffff, 0.6);
const sunPointLight = new THREE.PointLight(0xffffff, 1.2);
sunPointLight.position.set(5, 5, 5);
sunScene.add(sunAmbientLight, sunPointLight);
// Sun Animation loop
function animateSun() {
  requestAnimationFrame(animateSun);
  sunMesh.rotation.y += 0.003;
  sunRenderer.render(sunScene, sunCamera);
}
animateSun(); 
// moon
const moonContainer = document.getElementById("moon");
// Moon Renderer
const moonRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
moonRenderer.setSize(200, 200);
moonContainer.appendChild(moonRenderer.domElement);
// Moon Scene and Camera
const moonScene = new THREE.Scene();
const moonCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
moonCamera.position.z = 2;
// Moon Geometry and Material
const moonGeometry = new THREE.SphereGeometry(0.54, 64, 64); // Moon is smaller than Sun
const moonTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/moon.jpg"); // Adjust path if needed
const moonMaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
const moonMesh = new THREE.Mesh(moonGeometry, moonMaterial);
moonScene.add(moonMesh);
// Moon Lighting (ambient + point light to simulate Sun light)
const moonAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const moonPointLight = new THREE.PointLight(0xffffff, 1);
moonPointLight.position.set(5, 5, 5);
moonScene.add(moonAmbientLight, moonPointLight);

// Animation loop for Moon (rotating on its own axis)
function animateMoon() {
  requestAnimationFrame(animateMoon);
  moonMesh.rotation.y += 0.01;
  moonRenderer.render(moonScene, moonCamera);
}
animateMoon();

// ceres
const ceresContainer = document.getElementById("ceres");
// Ceres Renderer
const ceresRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
ceresRenderer.setSize(200, 200);
ceresContainer.appendChild(ceresRenderer.domElement);
// Ceres Scene and Camera
const ceresScene = new THREE.Scene();
const ceresCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
ceresCamera.position.z = 3;
// Ceres Geometry and Material
const ceresGeometry = new THREE.SphereGeometry(1, 64, 64); // bigger size for visibility
const ceresTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/ceres.jpg"); // Adjust texture path
const ceresMaterial = new THREE.MeshStandardMaterial({ map: ceresTexture });
const ceresMesh = new THREE.Mesh(ceresGeometry, ceresMaterial);
ceresScene.add(ceresMesh);
// Ceres Lighting
const ceresAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const ceresPointLight = new THREE.PointLight(0xffffff, 1);
ceresPointLight.position.set(5, 5, 5);
ceresScene.add(ceresAmbientLight, ceresPointLight);

// Animation loop for Ceres rotation
function animateCeres() {
  requestAnimationFrame(animateCeres);
  ceresMesh.rotation.y += 0.005; // slow rotation
  ceresRenderer.render(ceresScene, ceresCamera);
}
animateCeres();

// haumea
const haumeaContainer = document.getElementById("haumea");
// Haumea Renderer
const haumeaRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
haumeaRenderer.setSize(200, 200);
haumeaContainer.appendChild(haumeaRenderer.domElement);
// Haumea Scene and Camera
const haumeaScene = new THREE.Scene();
const haumeaCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
haumeaCamera.position.z = 4;
// Haumea Geometry and Material
const haumeaGeometry = new THREE.SphereGeometry(0.8, 64, 64); // base sphere
const haumeaTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/haumea.jpg"); // Use Haumea texture
const haumeaMaterial = new THREE.MeshStandardMaterial({ map: haumeaTexture });
const haumeaMesh = new THREE.Mesh(haumeaGeometry, haumeaMaterial);

// Scale to get ellipsoid shape (elongated along x-axis)
haumeaMesh.scale.set(1.7, 0.7, 0.7);

haumeaScene.add(haumeaMesh);

// Lighting
const haumeaAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const haumeaPointLight = new THREE.PointLight(0xffffff, 1);
haumeaPointLight.position.set(5, 5, 5);
haumeaScene.add(haumeaAmbientLight, haumeaPointLight);

// Animation loop for Haumea rotation (fast spin!)
function animateHaumea() {
  requestAnimationFrame(animateHaumea);
  haumeaMesh.rotation.y += 0.02; // fast rotation
  haumeaRenderer.render(haumeaScene, haumeaCamera);
}
animateHaumea();

// makemake
const makemakeContainer = document.getElementById("makemake");
// Makemake Renderer
const makemakeRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
makemakeRenderer.setSize(200, 200);
makemakeContainer.appendChild(makemakeRenderer.domElement);
// Makemake Scene and Camera
const makemakeScene = new THREE.Scene();
const makemakeCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
makemakeCamera.position.z = 2;
// Makemake Geometry and Material
const makemakeGeometry = new THREE.SphereGeometry(0.7, 64, 64); // radius 0.7 for size
const makemakeTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/makemake.jpg"); // use a Makemake texture image
const makemakeMaterial = new THREE.MeshStandardMaterial({ map: makemakeTexture });
const makemakeMesh = new THREE.Mesh(makemakeGeometry, makemakeMaterial);
makemakeScene.add(makemakeMesh);
// Lighting
const makemakeAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const makemakePointLight = new THREE.PointLight(0xffffff, 1);
makemakePointLight.position.set(5, 5, 5);
makemakeScene.add(makemakeAmbientLight, makemakePointLight);

// Animation loop for Makemake rotation
function animateMakemake() {
  requestAnimationFrame(animateMakemake);
  makemakeMesh.rotation.y += 0.01;
  makemakeRenderer.render(makemakeScene, makemakeCamera);
}
animateMakemake();

// eris
const erisContainer = document.getElementById("eris");
// Eris Renderer
const erisRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
erisRenderer.setSize(200, 200);
erisContainer.appendChild(erisRenderer.domElement);
// Eris Scene and Camera
const erisScene = new THREE.Scene();
const erisCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
erisCamera.position.z = 3;
// Eris Geometry and Material
const erisGeometry = new THREE.SphereGeometry(0.8, 64, 64); // a bit bigger radius
const erisTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/eris.jpg"); // Eris texture image
const erisMaterial = new THREE.MeshStandardMaterial({ map: erisTexture });
const erisMesh = new THREE.Mesh(erisGeometry, erisMaterial);
erisScene.add(erisMesh);
// Lighting
const erisAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const erisPointLight = new THREE.PointLight(0xffffff, 1);
erisPointLight.position.set(5, 5, 5);
erisScene.add(erisAmbientLight, erisPointLight);

// Animation loop for Eris rotation
function animateEris() {
  requestAnimationFrame(animateEris);
  erisMesh.rotation.y += 0.01;
  erisRenderer.render(erisScene, erisCamera);
}
animateEris();

// earth
const earthContainer = document.getElementById("earth");
// Earth Renderer
const earthRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
earthRenderer.setSize(200, 200);
earthContainer.appendChild(earthRenderer.domElement);
// Earth Scene and Camera
const earthScene = new THREE.Scene();
const earthCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
earthCamera.position.z = 3;
// Earth Geometry and Material
const earthGeometry = new THREE.SphereGeometry(1.1, 64, 64); // Slightly larger than Moon
const earthTexture = new THREE.TextureLoader().load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/earth.jpg"); // Use realistic Earth texture
const earthMaterial = new THREE.MeshStandardMaterial({ map: earthTexture });
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthScene.add(earthMesh);
// Earth Lighting
const earthAmbientLight = new THREE.AmbientLight(0xffffff, 0.4);
const earthPointLight = new THREE.PointLight(0xffffff, 1);
earthPointLight.position.set(5, 5, 5);
earthScene.add(earthAmbientLight, earthPointLight);

// Animation loop for Earth rotation
function animateEarth() {
  requestAnimationFrame(animateEarth);
  earthMesh.rotation.y += 0.01; // Slow spin
  earthRenderer.render(earthScene, earthCamera);
}
animateEarth();





// earthClouds
const earthCloudsContainer = document.getElementById("earth-clouds");

// Renderer
const earthCloudsRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
earthCloudsRenderer.setSize(200, 200);
earthCloudsContainer.appendChild(earthCloudsRenderer.domElement);

// Scene & Camera
const earthCloudsScene = new THREE.Scene();
const earthCloudsCamera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
earthCloudsCamera.position.z = 3;

// Textures
const earthCloudsTextureLoader = new THREE.TextureLoader();
const cloudTextureMap = earthCloudsTextureLoader.load("https://raw.githubusercontent.com/OZ-00MS/source/refs/heads/main/space%20a/planet/earth%20clouds.jpg"); // Transparent PNG clouds

// Geometry & Material
const cloudSphereGeometry = new THREE.SphereGeometry(1.13, 64, 64); // Slightly larger than Earth
const cloudSphereMaterial = new THREE.MeshStandardMaterial({
  map: cloudTextureMap,
  transparent: true,
  opacity: 0.8,
});
const cloudSphereMesh = new THREE.Mesh(cloudSphereGeometry, cloudSphereMaterial);
earthCloudsScene.add(cloudSphereMesh);

// Lighting
const earthCloudsAmbientLight = new THREE.AmbientLight(0xffffff, 0.3);
const earthCloudsDirectionalLight = new THREE.DirectionalLight(0xffffff, 1);
earthCloudsDirectionalLight.position.set(5, 5, 5);
earthCloudsScene.add(earthCloudsAmbientLight, earthCloudsDirectionalLight);

// Animation
function animateEarthCloudsOnly() {
  requestAnimationFrame(animateEarthCloudsOnly);
  cloudSphereMesh.rotation.y += 0.01; // Cloud drift
  earthCloudsRenderer.render(earthCloudsScene, earthCloudsCamera);
}
animateEarthCloudsOnly();

    // Generate stars
const starsContainer = document.getElementById('stars');
for(let i=0; i<150; i++){
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = Math.random() * window.innerHeight + 'px';
    star.style.left = Math.random() * window.innerWidth + 'px';
    star.style.width = star.style.height = Math.random()*2 + 1 + 'px';
    star.style.animationDuration = 1 + Math.random()*3 + 's';
    starsContainer.appendChild(star);
}

// Scroll button
const scrollBtn = document.getElementById('scroll-btn');
scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});
