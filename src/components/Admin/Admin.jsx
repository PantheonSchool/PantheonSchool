import AdminMenu from "./AdminMenu"
import { lazy } from 'react'

const MenuCard = lazy(() => import('./MenuCard'))

const Admin = () => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <div className="d-flex col-12 justify-content-center flex-column flex-md-row">
                {AdminMenu && AdminMenu.map((menu, index) => <MenuCard key={menu.title + index} menu={menu} />)}
            </div>
        </div>
    )
}

export default Admin