import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Card from "../components/Card";

const Home = () => {
  const cardContents = [
    {
      id: 1,
      title: "Card title 1",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      title: "Card title 2",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      title: "Card title 3",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 4,
      title: "Card title 4",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 5,
      title: "Card title 5",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  return (
    <div>
      <Header />
      <SideBar />
      <div className="home position-absolute">
        <h1>Welcome Home!</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-evenly mt-3 w-100">
          {cardContents.map((item, index) => (
            <Card
              key={index}
              cardTitle={item.title}
              cardDescription={item.desc}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
