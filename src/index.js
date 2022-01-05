import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));

var buttons = document.getElementsByTagName("button");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    buttons[i].classList.add("active");
    buttons[i].classList.remove("not-active");
    for (var j = 0; j < buttons.length; j++) {
      if (j !== i) {
        buttons[j].classList.remove("active");
        buttons[j].classList.add("not-active");
      }
    }
  });
}
