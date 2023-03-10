// import Heading from "./Heading";
import Card from "./Card";
import PropsChildren from "./PropsChildren";

export default function App() {
  return (
    <div className="App">
      {/* <Heading firstName="Ragul" />
      <Heading firstName="React" /> */}
      <h1>Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      <PropsChildren />
    </div>
  );
}
