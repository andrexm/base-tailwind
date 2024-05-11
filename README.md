# Base Tailwind CSS
This is a project set up for Tailwind CSS projets. It uses PHP as server but it is pretty easy to adapt any other tool.

### Running
Start the server by running
```
  npm run serve
```
It starts both PHP server (on port 8100) and Tailwind CSS server for building the style (with the help of _concurrently_).
You can change the tool to use instead of PHP on the "server" command, by replacing the PHP command with that you want.

### Building
The "build" command uses only css-minify to minify the _assets/css/style.css_, whose output file will be inside the _dist/css/_ folder:
```
  npm run build
```
