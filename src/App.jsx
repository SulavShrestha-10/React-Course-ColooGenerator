import { useState } from "react";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";
const App = () => {
  const [color, setColor] = useState("");
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <main>
      <section className="container">
        <h3>Color Generator</h3>
        <form className="color-form" onSubmit={handleSubmit}>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <input
            type="text"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          console.log(color.hex);
          return <SingleColor key={nanoid()} color={color} index={index} />;
        })}
      </section>
      <ToastContainer position="top-center" />
    </main>
  );
};
export default App;
