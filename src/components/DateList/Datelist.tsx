import { na } from "../../utils/constants";
import { IDatelist } from "./interface";

const Datelist = ({ shortName = na, name = na, date = na, id }: IDatelist) => {
  return (
    <div>
      <ul>
        <li>Camera Shortname: {shortName}</li>
        <li>Camera Name: {name}</li>
        <li>Date: {date}</li>
        <li>ID: {id}</li>
      </ul>
    </div>
  );
};

export default Datelist;
