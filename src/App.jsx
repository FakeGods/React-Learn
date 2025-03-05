import "./App.css";
const Card = ({ title, rating }) => {
  return (
    <div>
      <h2>
        {title} {rating}
      </h2>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <h2>Functional Arrow Component</h2>

      <Card
        title="Star Wars"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card
        title="The Lord of the Rings"
        rating={5}
        isCool={true}
        actors={[{ name: "Actors" }]}
      />
      <Card title="Ghost in the Shell" />
    </div>
  );
};

export default App;
