import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Title } from "../../components/Title";
import "./styles.scss";
import { ImgPrincipal } from "../../components/ImgPrincipal";
import { Datelist } from "../../components/DateList";

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
        <ImgPrincipal src={state?.img_src} alt={state?.id}></ImgPrincipal>
        {/* <img src={state?.img_src} alt={state?.id} /> */}
        <Datelist shortName={state?.camera?.full_name} name={state?.camera?.name} date={state?.earth_date} id={state?.id}  />
        
        {/* <ul>
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
        </ul> */}
      </div>
    </section>
  );
};

export default Details;
