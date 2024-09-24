import { Button } from "./components/button/Button";
import List from "./components/list/List";
import Title from "./components/title/Title";
import "./global.css";

function App() {
  return (
    <div className="container">
      <main className="main">
        <div className="icons">
          <div>
            <img src="./facebook.svg" alt="" />
          </div>
          <div>
            <img src="./twitter.svg" alt="" />
          </div>
          <div>
            <img src="./instagram.svg" alt="" />
          </div>
          <div>
            <img src="./youtube.svg" alt="" />
          </div>
        </div>
        <div className="main-content">
          <Title styleHeading="title">
            Explore the nature Find your inner peace
          </Title>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
            imperdiet sed id elementum. Quam vel aliquam sit vulputate. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button styleBtn="btn">Get started</Button>
        </div>
      </main>
      <section className="list">
        <List styleList="list-content" />
      </section>
    </div>
  );
}

export default App;
