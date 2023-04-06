const DashboardCard = (props: {
  dashboardCardTitle: string;
  totalOrder: number;
}) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">
          {props.dashboardCardTitle}
        </h6>
        <div className="card-text">
          <h5 className="card-subtitle mb-2">{props.totalOrder}</h5>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
