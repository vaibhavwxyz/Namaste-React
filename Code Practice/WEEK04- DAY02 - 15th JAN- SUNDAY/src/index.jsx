import ReactDOM from "react-dom/client";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Body from "./components/Body";

const App = () => {
  return (
    <>
      <Nav />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
