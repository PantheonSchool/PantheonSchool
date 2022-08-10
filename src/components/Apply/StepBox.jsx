import { Link } from "react-router-dom"
const StepBox = ({ data, index }) => {
    const { title, description, Icon, additionalData } = data
    return (
        <div className="step-container position-relative">
            <div className="step-box p-3">
                <p className="heading">
                    <span className="icon px-3 pb-3">
                        <Icon className='text-mustard' />
                    </span> &nbsp;
                    <span className="fw-bold">Step {index}:</span>
                </p>
                <div className="content">
                    <p className="fw-bold fs-5">{title}:</p>
                    <p>
                        {description}
                    </p>
                </div>
                <div className="overflow-auto scrollbar-v1">
                    {additionalData}
                </div>
            </div>
        </div>
    )
}

export default StepBox