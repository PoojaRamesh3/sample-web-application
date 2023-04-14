const DashboardCard = (props: {
  dashboardCardTitle: string;
  totalOrder: number;
}) => {
  return (
    <div className="card m-3 p-0">
      <div className="card-body d-block p-2 bg-dark text-white">
        <h6 className="card-subtitle mb-2">{props.dashboardCardTitle}</h6>
        <div className="card-text">
          <h5 className="card-subtitle mb-2">{props.totalOrder}</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
