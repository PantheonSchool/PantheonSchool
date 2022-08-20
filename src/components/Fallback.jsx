import { HashLoader,ClipLoader } from "react-spinners"


const override = {
    minHeight: '50vh'
}

export const HashLoad = () => {
    return <>
        <div className="d-flex align-items-center justify-content-center">
            <HashLoader loading={true} cssOverride={override} color='#FFCB05' size={50} />
        </div>
    </>
}

export const ClipLoad = () => {
    return <>
        <div className="d-flex align-items-center justify-content-center" style={override}>
            <ClipLoader loading={true} color='#84101b' size={35} />
        </div>
    </>
}