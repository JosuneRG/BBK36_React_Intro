//1 - Create a simple JSX Element
const JSX1 = <h1>Hello JSX!</h1>;

//2 - Create a Complex JSX Element
const JSX2 = 
 <div>
        <h1>Paragraph One</h1>
        <p>Paragraph Two</p>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>;

//3 - Add Comments in JSX
const JSX3 = (
  <div>
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
    {/* Prueba 1*/}
  </div>
);

//4 - Render HTML Elements to the DOM
const JSX4 = (
  <div>
    <h1>Hello World</h1>
    <p>Lets render this to the DOM</p>
  </div>
);

// Add your code below this line
ReactDOM.render(JSX4, document.getElementById('challenge-node'));

//5 - Define an HTML Class in JSX
const JSX = (
  <div className ='myDiv'>
    <h1>Add a class to this div</h1>
  </div>
);

//6 - Learn About Self-closing JSX Tags
const JSX6 =  
  <div>
    <h2>Welcome to React!</h2> 
    <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>;
