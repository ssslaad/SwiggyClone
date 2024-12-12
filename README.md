# React
Ref: https://react.dev/learn

# Topics
CDNs, CORS, React, ReactDOM, Props, NPM, Bundler (webpack, babel, parcel), Transitive dependencies, package.json and package-lock.json file, node_modules, jsx, React Components, Component Composition, Cross-site scripting attacks (XSS), Conditional Rendering, Rendering lists

# About
1. React - Is a Library, not a framework. So we can use React in our existing apps whereever we need, no need to create an entire app from scratch using React.
2. React - Common React code which can be used anywhere
3. ReactDOM - Specific to DOM which are used in webpages and DOM Manipulation.
4. Every thing is a react element (object).
5. Everything is rendered only inside the root element (which we decide). When render is called, React Element gets converted to HTML
6. React Create Element -> needs 3 inputs -> html tag to be created, attributes, children of this element -> attributes and children together called as **PROPS**.

# NPM-JS It does not stand for Node Package Manager
Standard repo for managing packages

# Bundler (webpack, babel, parcel)

# Babel - A JavaScript Compiler / Transpiler
 - package used by parcel to transpile the jsx code to React code.
 - 
# Parcel - Build's inside dist folder
 - HMR (Hot Module Replacement)
 - Create build of our code - BUNDLING (Faster build using `parcel-cache`)
 - Hosts a local server (using command `npx parcel index.html`)
 - Uses File watching algorithm (written in C++)
 - Image optimization (mostly costlier ops in browser/webapp)
 - Minify & Compress file for prod build (using command `npx parcel build index.html`)
 - Consistent Hashing, Code Splitting, Differential Bundling, Diagnostics of app, Handle Errors
 - HTTPs (SSL)
## Folders Created by Parcel:
### dist
Build folder created and used by parcel
### parcel-cache
Cache the files / build and helps in building the dev project faster.


# Dependencies
Dev Dependencies - Required in Development phase (using -D)
Normal Dependencies - Used in prod / published apps.
Transitive Dependencies - Dependencies which are indirectly needed (because our project has a dependency and that dependency have dependencies of it's own).

# Files and Folders
These are the files and folder present in React Project/Package:

## node_modules
collection of all the dependecies needed for our project and it's dependencies
use "npm_install" to get all the node_modules needed by our project

## package.json
Config file for our package/module/project. 

## package-lock.json
Config file containing exact versions of dependencies and transitive dependecies. Maintains integrity using HASH (to maintain consistency accross different platforms/machines).

# scripts in package.json
 - "dev_start": "parcel index.html" => This means if I use cmd - `npm run dev_start` (~ `npx parcel index.html`)
 - `start` keyword reserved by npm. `npm run start` is equivalent to `npm start` (This runs a predefined command specified in the "start" property of a package's "scripts" object)

# JSX
 - Helps in creating React elements (as it gets very tidy to create DOM using React.createElement)
 - Sanitizes data to prevent Cross-Site Scripting Attacks (XSS) 

# Injecting React In Our Project
1. Using CDNs
2. Using NPM to install react

# React Components
Name should start with Capital letter. (ex. FunctionNameLikeThis)

Types of Components:
 1. Class based Components:
    Created using JS Classes, old way, `ES6 classes that extends React.Component and must have a render method that returns React elements`

 2. Functional Components:
    Created using JS Functions, new way, `Normal JS Function that accepts Props as an argument & returns JSX / React Elements`

 3. Pure Components

 4. Higher-Order Components (HOCs)

 5. Controlled and Uncontrolled Components

# Component Composition
Component composition in React is a powerful pattern that allows you to build complex UIs from simple, reusable components. It involves combining multiple components to create a more complex component. This approach promotes reusability, maintainability, and separation of concerns.

## Key Concepts of Component Composition
 - Children Prop:
  The children prop allows you to pass components or elements as children to another component.

```javascript
// Example:
function Container(props) {
  return <div className="container">{props.children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Hello, world!</h1>
      <p>This is a paragraph inside the container.</p>
    </Container>
  );
}
```
 - Composition vs Inheritance:
  React encourages composition over inheritance. Instead of extending components, you compose them by including them as children or props.

```javascript
// Example:
function WelcomeDialog() {
  return (
    <Dialog>
      <h1>Welcome</h1>
      <p>Thank you for visiting our spacecraft!</p>
    </Dialog>
  );
}

function Dialog(props) {
  return (
    <div className="dialog">
      {props.children}
    </div>
  );
}
```

 - Specialization:
  You can create specialized components by composing more generic ones.

```javascript
// Example:
function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}
```

 - Containment:
  Some components don’t know their children ahead of time. They use the children prop to pass arbitrary children elements.

```javascript
// Example:
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}

function App() {
  return (
    <SplitPane
      left={<Contacts />}
      right={<Chat />}
    />
  );
}
```

 - Higher-Order Components (HOCs):
  HOCs are functions that take a component and return a new component with additional props or behavior.

```javascript
// Example:
function withLogging(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component mounted');
    }
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

const EnhancedComponent = withLogging(MyComponent);
```

## Benefits of Component Composition
 - Reusability: Components can be reused across different parts of the application.
 - Maintainability: Smaller, focused components are easier to maintain and debug.
 - Separation of Concerns: Each component handles a specific part of the UI, making the codebase more organized.



# Conditional Rendering
  Sometimes, we need to render our component based on condition. In React, we can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
  - In JSX, {cond ? <A /> : <B />} means “if cond, render <A />, otherwise <B />”.
  - In JSX, {cond && <A />} means “if cond, render <A />, otherwise nothing”.
  - You can return a JSX expression conditionally with an if statement.

  Reference: https://react.dev/learn/conditional-rendering

# Rendering List
Render multiple similar components from a collection of data using array's filter() and map() methods.

```javascript
const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];

export default function List() {
  const listItems = people.map(person =>
    <li>{person}</li>
  );
  return <ul>{listItems}</ul>;
}
```
Here we get warning on console:

> Each child in a list should have a unique "key" prop.
> Check the render method of `List`. See https://react.dev/link/warning-keys for more information.
> Warning: Each child in a list should have a unique “key” prop.

# Types of exports
Whenever we need to use our component in any other component, we need to export our component so that other components can use it.

## Default Export
Only 1 default export is allowed
```javascript
// export
const MyComponent = () => {}
export default MyComponent;

// import
import MyDefaultComponent from "./MyDefaultExport";
```
## Named Export
multiple named exports per file are allowed
```javascript
// export
export const MY_VARIABLE = "hi";
export const MyComponent = () => {}

// import
import { MyComponent } from "./MyComponent";
```

# Render and Commit
1. Triggering a render (delivering the guest’s order to the kitchen)
2. Rendering the component (preparing the order in the kitchen)
3. Committing to the DOM (placing the order on the table)

## Step 1: Triggering a render
There are two reasons for a component to render:
1. It’s the component’s initial render.
  - It’s done by calling createRoot with the target DOM node, and then calling its render method with your component.
2. The component’s (or one of its ancestors’) state has been updated.
  - Trigger further renders by updating its state with the set function. Updating your component’s state automatically queues a render.

## Step 2: Rendering a Component
“Rendering” is React calling your components.
1. On initial render, React will call the root component.
2. For subsequent renders, React will call the function component whose state update triggered the render.

## Step 3: React commits changes to the DOM
After rendering (calling) your components, React will modify the DOM.
- For the initial render, React will use the appendChild() DOM API to put all the DOM nodes it has created on screen.
- For re-renders, React will apply the minimal necessary operations (calculated while rendering!) to make the DOM match the latest rendering output.

# Hooks
Javascript functions that let you use different React features from your components.
Hooks are special functions that are only available while React is rendering. They let you “hook into” different React features.
Hooks—functions starting with use
  - can only be called at the top level of your components or your own Hooks.
  - can’t be called inside conditions, loops, or other nested functions.

# useState hook
References:
https://react.dev/learn/state-a-components-memory
https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e


Problems with local variables:
- Local variables don’t persist between renders.
- Changes to local variables won’t trigger renders.

To update a component with new data, two things need to happen:

1. Retain the data between renders.
2. Trigger React to render the component with new data (re-rendering).

The `useState` Hook provides those two things:

- A state variable to retain the data between renders.
- A state setter function to update the variable and trigger React to render the component again.

```javascript
let index = 0; //local variable
const [index, setIndex] = useState(0); //state variable

```

`State is isolated and private`
State is local to a component instance on the screen. In other words, if you render the same component twice, each copy will have completely isolated state! Changing one of them will not affect the other.


# Reconciliation, diif algorithm, react fibre, virtual DOM

References: 
- https://legacy.reactjs.org/docs/reconciliation.html

# Shimmer UI and Loading Indicator
 














# Miscellenous

## Cross-Site Scripting Attacks (XSS)
Cross-Site Scripting (XSS) attacks are a type of security vulnerability where an attacker injects malicious scripts into otherwise benign and trusted websites. These attacks occur when a web application includes untrusted data in its output without proper validation or escaping. Here are the main types of XSS attacks:

 - Reflected XSS: The malicious script is reflected off a web server, such as in an error message or search result. The script is executed immediately when the user interacts with the malicious link1.
 - Stored XSS: The malicious script is stored on the target server, such as in a database, comment field, or forum post. The script is executed when the data is retrieved and displayed to users.
 - DOM-based XSS: The vulnerability exists in the client-side code rather than the server-side code. The script is executed as a result of modifying the DOM environment in the victim’s browser.

### How XSS Attacks Work
 - Injection: The attacker injects malicious code into a web application.
 - Execution: The malicious code is executed in the user’s browser.
 - Impact: The attacker can steal sensitive information, hijack user sessions, deface websites, or perform other malicious activities.

### Prevention Tips
 - Input Validation: Always validate and sanitize user inputs.
 - Output Encoding: Encode data before rendering it in the browser.
 - Content Security Policy (CSP): Implement CSP to restrict the sources from which scripts can be executed.
 - Use Security Libraries: Utilize libraries and frameworks that automatically handle XSS vulnerabilities.