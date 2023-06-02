import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import "./styles.scss";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  useEffect(() => {
    if (!state) navigate("/");
  }, [state, navigate]);

  return (
    <section id="details">
      <Title link="/" sectionName="details" />

      <div className="Details">
        <img src={state?.img_src} alt={state?.id} />
        <ul>
          <li>
            Camera name:
            {state?.camera?.full_name ? state?.camera?.full_name : "NA"}
          </li>
          <li>
            Camera short name:
            {state?.camera?.name ? state?.camera?.name : "NA"}
          </li>
          <li>
            Date:
            {state?.earth_date ? state?.earth_date : "NA"}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Details;
