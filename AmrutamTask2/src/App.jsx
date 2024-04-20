// import React from "react";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* First lets divide all of the page
    in one and then we will break the components */}
      {/* WE will start */}

      <div className="Header">
        <div>
          <h5> Namaste ,Welcome to Amrutam</h5>

          <h2>
            Step into Holistic Healing with Ayurveda <br></br> Book Consultation
            With Certified Experts.
          </h2>
          <p>
            Dive into the world of ayurveda and Experience Personalized Health
            Solutions and <br></br>Holistic Guidance from Trusted Ayurvedic
            Doctors Anytime, anywhere.
          </p>

          <button>BOOK AN APPOINTMENT</button>
        </div>
      </div>
    </div>
  );
};

export default App;

/*import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/Todoitem1";
import TodoItem2 from "./components/Todoitem2";
import "./App.css";

function App() {
  return (
    // Yaha se sara file ko alag krte hai component wise krke .
    <center className="todo-container">
      <AppName />

      <div className="items-container">
        <AddTodo />
        <TodoItem1 />
        <TodoItem2></TodoItem2>
      </div>
    </center>
  );
  // center tag makes thing in center NOT GOOD practise as it isnot in html5.
}

export default App;
 */
