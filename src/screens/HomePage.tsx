import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Card from "../components/Card";

const HomePage = () => {
  const cardContents = [
    {
      id: 1,
      title: "Product 1",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 2,
      title: "Product 2",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 3,
      title: "Product 3",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 4,
      title: "Product 4",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 5,
      title: "Product 5",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      id: 6,
      title: "Product 6",
      desc: "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
  ];
  return (
    <>
      <Header />
      <SideBar />
      <div className="outer-main position-absolute">
        <h1>Welcome Home!</h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-evenly mb-2 w-100">
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
    </>
  );
};

export default HomePage;
