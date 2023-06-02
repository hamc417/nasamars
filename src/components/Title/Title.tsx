import { Link } from "react-router-dom";
import { ITitle } from "./interface";

const Title = ({ sectionName, link }: ITitle) => {
  return (
    <h1>
      Hola desde {sectionName} - ir a <Link to={link}>{link.toString()}</Link>
    </h1>
  );
};

export default Title;
