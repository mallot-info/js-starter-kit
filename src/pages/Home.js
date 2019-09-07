const { h } = require("dom-chef");
import jsLogo from "../assets/images/js.png";

const Home = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-evenly",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    <img src={jsLogo} style={{ height: "150px" }}></img>
    <h1>Javascript starter kit</h1>
  </div>
);

export default Home;
