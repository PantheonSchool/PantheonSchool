import AdmissionContainer from "../CoverContainer";
import filesList from "./filesList";
import { cdnURL } from "../../utils/constants"

import "./mandatory.css"

const Disclosure = () => {
    return <>
        <AdmissionContainer path={['mandatory disclosure']} _title='MANDATORY DISCLOSURE'>
        <div className="container grid_custom">
            {
                filesList.map((data, id) => {
                    return <a key={id} className="card_custom" target="_blank" href={`${cdnURL}/${data.link}`} rel="noreferrer">
                        <div className="a_custom">
                            {data.title}
                        </div>
                    </a>
                })
            }
        </div>
        </AdmissionContainer>
    </>;
}

export default Disclosure;