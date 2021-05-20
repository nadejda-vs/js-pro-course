import Avatar from "./Avatar.js";
import FullName from "./name.js";
import Description from "./Description.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar src=" ./images/avatar.jpg"  />
        <FullName name="Nadya" secondName="Yakatsuk" />
        <Description
          information=" I'm learning in TeachMeSkills in position Frontend Developer. I have
      knowlege in HTML5,  CSS3,  Git, JavaScript. Beginner in React."
        />
      </header>
    </div>
  );
}

export default App;
