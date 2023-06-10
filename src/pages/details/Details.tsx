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
      <div className="Details">
        <ImgPrincipal src={state?.img_src} alt={state?.id}></ImgPrincipal>
        <Datelist
          shortName={state?.camera?.full_name}
          name={state?.camera?.name}
          date={state?.earth_date}
          id={state?.id}
        />
      </div>
    </section>
  );
};

export default Details;
