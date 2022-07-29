import { Link } from "react-router-dom"

const MenuCard = ({ menu }) => {
    return (
        <div className="col-md-4 p-2">
            <div className="rounded-2 shadow">
                <Link to={menu.link}>
                    <div className="d-flex flex-column align-items-center justify-content-center p-4">
                        <menu.Icon className={`text-${menu.color} fs-1 mb-3`} />
                        <p className="mb-0 text-black fw-bold ms-2">{menu.title}</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default MenuCard