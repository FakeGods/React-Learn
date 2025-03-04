import "./App.css";
const Card = () => {
  return (
    <div>
      <h2>Card Component</h2>
    </div>
  );
};

const App = () => {
  return (
    <>
      <h2>Functional Arrow Component</h2>
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card />
    </>
  );
};

export default App;
