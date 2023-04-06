import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox } from "@fortawesome/free-solid-svg-icons";

const DashboardCard = (props: {
  dashboardCardTitle: string;
  totalOrder: number;
}) => {
  return (
    <div className="col w-75">
      <div className="card mb-3">
        <div className="row g-0 align-items-center p-3">
          <div className="col-md-4">
            <FontAwesomeIcon icon={faBox} className="h-50" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-muted">
                {props.dashboardCardTitle}
              </h6>
              <div className="card-text">
                <h5 className="card-subtitle mb-2">{props.totalOrder}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
