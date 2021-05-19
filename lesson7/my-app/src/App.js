import FullName from "./name.js";
import "./App.css";
import Avatar from "./Avatar";
import Description from "./Description.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar src="./images/avatar.jpg" />
        <p>
          Hi,my name is :
          <FullName name=" Nadya" secondName=" Yakatsuk" />
        </p>
        <Description
          information="
I'm learning  in TeachMeSkills in position Frontend Developer. I have knowlege in HTML5, CSS3, Git, JavaScript. Beginner in React."
        />
      </header>
    </div>
  );
}

export default App;
