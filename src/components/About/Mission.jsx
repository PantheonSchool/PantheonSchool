import { cdnURL } from "../../utils/constants"

const Mission = () => {
    return (
        <div className="pt-5 mission">
            <div className="d-flex">
                <div className="mission_content p-lg-5 p-2 col-12 col-lg-6">
                    <h1 className="text-pantheon-blue fw-bold display-2">MISSION</h1>
                    <ul>
                        <li>To develop a child harmoniously and holistically by emphasizing on his physical, cognitive, emotional,  aesthetic, social and spiritual needs.</li>
                        <li>To emphasize on total personality development, conceptual ability and skill development through its own exclusively developed and structured curriculum and very methodical curriculum transaction.</li>
                        <li>To provide freedom and space for individual expression and growth to become self-reliant, self-motivated and a confident human being.</li>
                        <li>To provide exposure to latest technology and learning techniques.</li>
                        <li>To continuously add value to our curriculum and improve programming in order to enhance the skill sets and all-round development rather than remain text book centric.</li>
                        <li>To cultivate a thirst for knowledge and higher education in every student.</li>
                        <li>To ensure that every student is given the opportunity to build leadership qualities and to develop social skills that  can lead to success in school and in life.</li>
                        <li>To build and maintain a faculty that has highly-qualified and respected teachers.</li>
                    </ul>
                </div>
                <div className="mission_icon">
                    <img className="img-fluid" alt='mission icon' src={cdnURL + '/Images/mission_tree_reduce.png'} />
                </div>
            </div>
        </div>
    )
}

export default Mission