const Card = (props: {
  key: number;
  cardTitle: string;
  cardDescription: string;
}) => {
  return (
    <>
      <div className="col">
        <div className="card text-white bg-dark">
          <div className="card-body">
            <div className="card-header">Featured</div>

            <h5 className="card-title">{props.cardTitle}</h5>
            <p className="card-text">{props.cardDescription}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
