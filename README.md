# NamasteReact
# Topics
CDNs, CORS, React, ReactDOM, Props, NPM, Bundler (webpack, babel, parcel), Transitive dependencies, package.json and package-lock.json file, node_modules

# About
1. React - Is a Library, not a framework. So we can use React in our existing apps whereever we need, no need to create an entire app from scratch using React.
2. React - Common React code which can be used anywhere
3. ReactDOM - Specific to DOM which are used in webpages and DOM Manipulation.
4. Every thing is a react element (object).
5. Everything is rendered only inside the root element (which we decide). When render is called, React Element gets converted to HTML
6. React Create Element -> needs 3 inputs -> html tag to be created, attributes, children of this element -> attributes and children together called as *PROPS*.

# NPM-JS It does not stand for Node Package Manager
Standard repo for managing packages

# Bundler (webpack, babel, parcel)


# Parcel - Build's inside dist folder
 - HMR (Hot Module Replacement)
 - Create build of our code - BUNDLING (Faster build using `parcel-cache`)
 - Hosts a local server (using command `npx parcel index.html`)
 - Uses File watching algorithm (written in C++)
 - Image optimization (mostly costlier ops in browser/webapp)
 - Minify & Compress file for prod build (using command `npx parcel build index.html`)
 - Consistent Hashing, Code Splitting, Differential Bundling, Diagnostics of app, Handle Errors
 - HTTPs (SSL)

# Dependencies
Dev Dependencies - Required in Development phase (using -D)
Normal Dependencies - Used in prod / published apps.
Transitive Dependencies - Dependencies which are indirectly needed (because our project has a dependency and that dependency have dependencies of it's own).

# node_modules
collection of all the dependecies needed for our project and it's dependencies
use "npm_install" to get all the node_modules needed by our project

# Inject React
1. Using CDNs
2. Using NPM to install react
