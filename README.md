
# React  
[React Official Documentation](https://react.dev/learn)  

# Topics Covered  
- CDNs, CORS, React, ReactDOM, Props, NPM  
- Bundler (Webpack, Babel, Parcel)  
- Transitive dependencies  
- `package.json` and `package-lock.json` files  
- `node_modules`, JSX, React Components, Component Composition  
- Cross-site scripting attacks (XSS), Conditional Rendering  
- Rendering Lists  


# About React  
1. **React** is a **library**, not a framework. It can be integrated into existing apps without needing to build the entire application from scratch.  
2. **React** contains common reusable code that can be used anywhere.  
3. **ReactDOM** is specific to the DOM and is used for web pages and DOM manipulation.  
4. Everything in React is a **React Element (an object)**.  
5. The entire application is rendered inside the **root element** (defined by the developer). When `render` is called, React Elements are converted to HTML.  
6. `React.createElement()` requires three parameters:  
   - The HTML tag to be created  
   - Attributes  
   - Children of the element  
   - Attributes and children together are called **PROPS**.  


# NPM (Node Package Manager)  
NPM does **not** stand for Node Package Manager. It is the **standard repository** for managing JavaScript packages.  


## Bundlers: Webpack, Babel, and Parcel  

### **Babel - A JavaScript Compiler / Transpiler**  
- Used by Parcel to transpile JSX code into standard React code.  

### **Parcel - Features & Benefits**  
Parcel is a powerful JavaScript bundler that provides the following benefits:  
- **HMR (Hot Module Replacement)** – Automatically updates changes without refreshing the page.  
- **Builds and bundles code** (faster builds using `parcel-cache`).  
- **Hosts a local development server** (`npx parcel index.html`).  
- **Uses an efficient file-watching algorithm** (written in C++).  
- **Image optimization** (helps improve performance).  
- **Minification & Compression** for production builds (`npx parcel build index.html`).  
- **Consistent Hashing**, **Code Splitting**, **Differential Bundling**, and **Error Handling**.  
- **Supports HTTPS (SSL)**.  

### **Folders Created by Parcel**  
#### 📂 `dist/`  
Contains the build output of the project.  
#### 📂 `parcel-cache/`  
Caches the files and builds, helping in faster development builds.  

## Dependencies in React Projects  

- **Dev Dependencies** – Required only during development (`-D` flag).  
- **Normal Dependencies** – Required for production and published apps.  
- **Transitive Dependencies** – Dependencies of dependencies (installed automatically).  

## Important Files and Folders in a React Project  

### 📂 `node_modules/`  
- Contains all the dependencies required for the project and its dependencies.  
- Run `npm install` to install all required dependencies.  

### 📄 `package.json`  
- The configuration file for the project, containing metadata, dependencies, and scripts.  

### 📄 `package-lock.json`  
- Contains the **exact versions** of dependencies and transitive dependencies.  
- Uses **HASH integrity checks** to maintain consistency across machines.  

## Scripts in `package.json`  
- `"dev_start": "parcel index.html"` – Can be run using:  
  ```sh
  npm run dev_start  # Equivalent to `npx parcel index.html`
  ```
- `"start"` is a reserved keyword in npm:  
  ```sh
  npm run start  # Equivalent to `npm start`
  ```
  - Runs a predefined command specified in the `"start"` property of `"scripts"` in `package.json`.  

---

# JSX (JavaScript XML)  
- Makes creating React elements easier compared to `React.createElement()`.  
- **Sanitizes data** to prevent **Cross-Site Scripting Attacks (XSS)**.  



# Injecting React into a Project  
React can be added to a project using:  
1. **CDNs**  
2. **NPM** (by installing React locally)  

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

# useEffect hook
3 variations of useEffect:
  1. `call back function without any dependency array` - This gets called every time the component is rendered
  2. `call back function with empty dependency array` = this gets called only for the first time. not called in subsequent renders
  3. `call back function with 1 or more dependency` - this is called everytime, the dependency variable changes

# Reconciliation, diif algorithm, react fibre, virtual DOM
References:
- https://legacy.reactjs.org/docs/reconciliation.html

# Refactoring of code:
  - removed multiple state variables for filters and instead set a single state variable `filters` and will be handling all the filters using this single state variable.
  - using useEffect we have applied filter (dependency - filters change).

# Shimmer UI and Loading Indicator code (now removed from the code)
 
```
// show shimmer UI when data is not loaded 
    if (!dataLoaded) {
        return (
            <div className={styles.body}>
                
                <div className={styles.restaurants}>
                    <h1>Popular Restaurants In Pune</h1>
                    <div className={styles.popularResContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(5)].map((_, index) => (
                            <ShimmerRestaurantCard key={index} />
                        ))}
                    </div>
                </div>

                <div className={styles.cuisines}>
                    <h1>Cuisines: What's on your mind ??</h1>
                    <div className={styles.cuisineContainer}>
                        {/* Show multiple shimmer restaurant cards */}
                        {[...Array(10)].map((_, index) => (
                            <ShimmerCuisineCard key={index} />
                        ))}
                    </div>
                </div>

            </div>
        );
    }
```


# Server Side Rendering (SSR) vs Client Side Rendering (CSR)

**Server-Side Rendering (SSR) vs. Client-Side Rendering (CSR):**  

Both SSR and CSR are methods for rendering web pages, but they work differently in terms of where the HTML content is generated.


## **1. Server-Side Rendering (SSR)**  
🔹 **Definition:** In SSR, the server generates the full HTML page and sends it to the browser. The browser then displays the content immediately.  

🔹 **How It Works:**  
1. A user requests a web page.  
2. The server processes the request, fetches data, and generates an HTML page.  
3. The server sends the fully-rendered HTML to the browser.  
4. The browser displays the page instantly.  
5. Any additional JavaScript (if needed) is loaded afterward.  

🔹 **Pros:**  
✅ Faster initial page load (better for SEO and users with slow connections).  
✅ Works well with search engines (SEO-friendly).  
✅ Content is visible even if JavaScript is disabled.  

🔹 **Cons:**  
❌ Higher server load because every request requires processing.  
❌ Slower interactions because new pages must be fetched from the server.  

🔹 **Examples of SSR Frameworks:**  
- Next.js (for React)  
- Ruby on Rails  
- Django (Python)  
- Laravel (PHP)  

## **2. Client-Side Rendering (CSR)**  
🔹 **Definition:** In CSR, the browser initially loads a minimal HTML file, then JavaScript takes over to fetch and render content dynamically.  

🔹 **How It Works:**  
1. A user requests a web page.  
2. The server sends a lightweight HTML file with a JavaScript bundle.  
3. The browser downloads and executes the JavaScript.  
4. JavaScript fetches data from the server and updates the page dynamically.  

🔹 **Pros:**  
✅ Faster navigation between pages (ideal for web apps).  
✅ Reduces server load by handling rendering on the client-side.  
✅ Better user experience for interactive applications.  

🔹 **Cons:**  
❌ Slower initial load time (since JavaScript must be downloaded and executed).  
❌ SEO challenges (content is loaded dynamically, which search engines might not index properly).  

🔹 **Examples of CSR Frameworks:**  
- React.js  
- Angular  
- Vue.js  


## **SSR vs CSR: Key Differences**  

| Feature  | Server-Side Rendering (SSR) | Client-Side Rendering (CSR) |
|----------|---------------------------|---------------------------|
| **Where Rendering Happens** | On the server | On the browser |
| **Initial Load Time** | Faster | Slower |
| **SEO-Friendly?** | Yes | No (unless optimized with techniques like pre-rendering) |
| **User Experience** | Good for static pages | Better for dynamic web apps |
| **Performance** | Server-dependent | Browser-dependent |
| **Best For** | Blogs, eCommerce, SEO-focused sites | Single Page Apps (SPAs), Dashboards |


## **Which One to Use?**  
- **Choose SSR** if you need better SEO and fast first-page loads (e.g., blogs, news sites).  
- **Choose CSR** for highly interactive web apps with many dynamic updates (e.g., social media, dashboards).  
- **Use Hybrid Approach (e.g., Next.js)** for the best of both worlds—SSR for initial load and CSR for interactions.  


# React router
https://www.youtube.com/watch?v=VJov5QWEKE4&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&index=13

Here, we have used react router to navigate between different pages (not actually pages but rather components).
Also, we have used latest Loader feature to load the data quickly and also cached it so that we don't have to call API each time we navigate back to our main component.

## Loader Drawbacks: 
  1. By default, loaders block rendering until all data is fetched
  2. If a loader is slow, the route doesn’t load until data is ready
  3. React Router's loader blocks rendering until the data is fully loaded.

## Suspense and Defer

# Body.js Variations

### In-depth Analysis of the Three Approaches  

All three approaches aim to handle data fetching in a React component, but they differ in **when** and **how** data is fetched, and how they impact the user experience, performance, and maintainability.

## **Option 1: Using `useEffect` to Fetch Data and Show a Shimmer UI**  
### **How It Works:**  
1. The component renders immediately with a loading state (e.g., shimmer UI).  
2. `useEffect` runs after the initial render and triggers an API request.  
3. Once data is received, the state is updated, and the UI re-renders with actual content.  

### **Code Example:**  
```jsx
import { useState, useEffect } from "react";

function MyComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ShimmerUI />;
  }

  return <ActualUI data={data} />;
}
```

### **Pros:**  
✅ Simple to understand and implement.  
✅ Works in both client-side and server-side rendering (CSR & SSR).  
✅ Gives a visual indication (shimmer UI) that data is loading.  

### **Cons:**  
❌ **Slower initial render** – UI renders **without data first**, then re-renders after fetching.  
❌ **Unnecessary re-renders** – First, an empty UI is shown, and after fetching, a re-render occurs.  
❌ **Inconsistent UX** – Data fetching logic is scattered across components, making it hard to manage at scale.  

### **Best Use Case:**  
- Works best when **SEO is not a priority**, and **user interactions trigger the data fetch** (e.g., dashboards, forms).  
- Suitable when **you don’t want to block the UI from rendering** while fetching data.  

## **Option 2: Using React Router `loader` to Preload Data Before Rendering UI**  
### **How It Works:**  
1. React Router's `loader` function fetches data **before rendering the route component**.  
2. The component **does not render at all** until data is available.  
3. The loaded data is passed as a prop to the component via `useLoaderData()`.  

### **Code Example:**  
```jsx
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const response = await fetch("/api/data");
  return response.json();
}

function MyComponent() {
  const data = useLoaderData();
  return <ActualUI data={data} />;
}
```

### **Pros:**  
✅ **Faster perceived load time** – The UI **only renders when data is ready**, avoiding flickers or re-renders.  
✅ **Better UX for navigation** – Users never see a "loading" state while switching routes.  
✅ **Better for SEO & SSR** – Works well with server-side rendering since data is loaded beforehand.  
✅ **Easier state management** – No need for `useEffect` or manual state management.  

### **Cons:**  
❌ **Blocking UI Rendering** – If the API is slow, the page appears blank until the data arrives.  
❌ **Less flexible for incremental updates** – Not ideal if the data changes frequently and requires frequent re-fetching.  

### **Best Use Case:**  
- Best for **static or infrequently changing content** that should be available before rendering (e.g., **blogs, product pages, dashboards**).  
- Ideal when **SEO matters**, as it ensures the initial content is fully loaded before rendering.  
- Suitable for **navigating between pages with preloaded data**, reducing flickering.  


## **Option 3: Using `Suspense` with `defer()` for Streaming Data**  
### **How It Works:**  
1. React Router fetches initial data **before rendering the UI**, but some parts of the data can be deferred using `defer()`.  
2. The main UI renders with available data, and the remaining data is loaded asynchronously.  
3. `Suspense` is used to handle UI fallback while waiting for deferred data.  

### **Code Example:**  
```jsx
import { Await, defer, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

export async function loader() {
  return defer({
    data: fetch("/api/data").then((res) => res.json()),
  });
}

function MyComponent() {
  const { data } = useLoaderData();

  return (
    <Suspense fallback={<ShimmerUI />}>
      <Await resolve={data}>
        {(resolvedData) => <ActualUI data={resolvedData} />}
      </Await>
    </Suspense>
  );
}
```

### **Pros:**  
✅ **Optimized Performance** – The initial UI loads **instantly**, while non-critical data loads in the background.  
✅ **Better UX than `useEffect`** – Ensures that critical parts render first, while secondary parts stream in.  
✅ **Works well with SSR & React Server Components** – Can be used to optimize server-side rendering.  

### **Cons:**  
❌ **Requires careful data structuring** – Need to decide what to defer and what to preload.  
❌ **Slightly complex** – Managing `Suspense` and `Await` requires additional handling for edge cases.  

### **Best Use Case:**  
- Best when some data is **critical for rendering**, but other parts **can load lazily** (e.g., **chat applications, e-commerce checkout pages**).  
- Ideal when **loading parts of the UI progressively** for a better user experience.  

---

## **Comparison Table**

| Feature                 | `useEffect` with Shimmer | React Router `loader` | `Suspense` with `defer()` |
|-------------------------|-------------------------|-----------------------|--------------------------|
| **Initial Rendering**   | UI loads first, data comes later | Waits for all data before rendering | UI loads immediately, some data comes later |
| **User Experience**     | Users see shimmer before actual UI | No flicker, but may block rendering | Immediate UI, progressive data loading |
| **Re-renders**         | Causes re-renders after fetching | No unnecessary re-renders | Partial updates without full re-renders |
| **Performance**        | Slightly slow (extra render cycle) | Faster perceived load time | Optimized performance |
| **SEO Friendly**       | No (content loads after render) | Yes (preloaded data) | Yes (works well with SSR) |
| **Best For**           | Interactive pages with frequent updates | Static or infrequent data changes | Large UI with parts that can load later |

---

## **Final Recommendations**
- **Use `useEffect` with shimmer UI** when you need to **fetch data dynamically after user actions** or when SEO isn’t a concern.  
- **Use React Router `loader`** when data should be **available before rendering**, especially for **navigable pages with static or rarely updated content**.  
- **Use `Suspense` and `defer()`** when you need **fast initial rendering** while progressively loading less critical data.  

---

### **Example Scenarios:**
1. **E-commerce Product Page:**  
   - Use **React Router `loader`** for the main product details (title, description, price).  
   - Use **`Suspense` with `defer()`** for additional recommendations, reviews, etc.  

2. **Social Media Feed:**  
   - Use **`useEffect` with shimmer** for real-time fetching of posts.  
   - Use **`Suspense` with `defer()`** for user profile pictures or less important data.  

3. **Admin Dashboard:**  
   - Use **React Router `loader`** for the main stats (so they load before rendering).  
   - Use **`Suspense` with `defer()`** for secondary reports or charts.  

---

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


 # More technologies / Frameworks / Libraries to learn:
 - React Native
 - Flutter
 - Wordpress
 - Tailwind
 - Next JS
 - Three JS