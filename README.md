# hello-threejs-gltf-lkg

"known good" example of working three.js > looking glass display setup

original source:
https://codesandbox.io/s/hello-three-js-gltf-c4uyw2?from-embed=&file=/src/index.js

from these docs:
https://docs.lookingglassfactory.com/developer-tools/webxr/three.js#the-basics

modified to use a different hdr and scenes exported from 3dstreet in glb format

## Instructions to view your 3DStreet scene on a Looking Glass Display
* Open or create a 3DStreet scene that you'd like to view in 3D on the Looking Glass
* In 3DStreet Editor, click Save > Save as GLB (or Share > Download as GLB)
* Clone this repository and copy your saved 3DStreet glb into /src/assets of this repository as target.glb
* Run `npm install` then run `npm start`
* Ensure that Looking Glass Bridge is installed for your OS and has recognized your looking glass as described here:
* Ensure that your Looking Glass shows your second desktop as described in WebXR instructions:
* Open your browser to http://localhost:1234/
* Click "enter vr"
* Manually move the new window that pops up to your Looking Glass display
* Double click on the window
* Now zoom out a little bit by scrolling up or down, and use the new controls to modify the appearance of your scene
* Experiment with the levers, they can really change the feeling and mood of the scene
