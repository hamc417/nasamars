import { IDatelist } from "./interface"


const Datelist = ({shortName, name, date, id} : IDatelist )=>{
    return(
        <div>
            <ul>
                <li>Camera Shortname:  {shortName ? shortName :'NA'}</li>
                <li>Camera Name: {name ? name:"NA"}</li>
                <li>Date: {date ? date:"NA"}</li>
                <li>ID: {id ? id:"NA"}</li>
            </ul>
        </div>
    )
}

export default Datelist