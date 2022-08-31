import { cdnURL } from "../../../utils/constants"

const FacultySkeleton = () => {
    return (
        <div className='col-12 p-3 col-sm-6 mt-4 faculty_skeleton'>
            <div className="row border rounded-3 shadow">
                <img className="img-fluid rounded-start my-auto p-0 col-5 col-md-4" alt='' src={cdnURL + `/Images/avatar-1577909.svg`} style={{
                    width: '150px'
                }}/>
                <div className="p-2 col-6 col-md-8">
                    <p className="__skeleton-txt"/>
                    <p className="__skeleton-txt"/>
                    <p className="__skeleton-txt"/>
                    <p className="__skeleton-txt"/>
                    <p className="__skeleton-txt"/>
                    <p className="__skeleton-txt"/>
                </div>
            </div>
        </div>
    )
}

export default FacultySkeleton