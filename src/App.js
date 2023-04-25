import './App.css';
import Card from './components/Card';
import Image from './components/Image';

function App() {
  return (
    <div className="App">
      <Card
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      >
        <Image url="https://klike.net/uploads/posts/2019-11/1574514215_2.jpg"/>
      </Card>

      <Card
        title="Special title treatment"
        text="With supporting text below as a natural lead-in to additional content."
      />
    </div>
  );
}

export default App;
