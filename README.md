<h1 align="center"> Base Tailwind CSS</h1>

<p align="center">A project set up for Tailwind CSS and PHP.</p>

## Usage
Clone this repo and then install the nodejs packages:
```
  npm i
```
Make sure you have [NodeJs](https://nodejs.org/en) and npm installed on your
machine to get things working. After install the packages (listed on _package.json_),
you can start building stuff with this structure. Look at the __Running__ section (below).

## Running
After installing the necessary packages, you can start the server
and run Tailwind CSS by running the following command:
```
  npm run serve
```
It starts both PHP server (on port __8100__, you can change this inside the __serve__ file)
and Tailwind CSS server for building the style (with the help of
[concurrently](https://github.com/open-cli-tools/concurrently)).
You can change the tool to use instead of PHP on the "server" command,
by replacing the PHP command with that you want.

## Building
The "build" command uses only [css-minify](https://github.com/purple-force/css-minify)
to minify the _assets/css/style.css_, whose output file will be inside the _dist/css/_ folder:
```
  npm run build
```
Then, on development, the your css file is inside the _assets/css/style.css_ file, while
the build css minified is inside the folder _dist/css/_. Remember this detail when building
your styles.

## License
This project has no license.
