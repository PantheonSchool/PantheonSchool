import AdminMenu from "./AdminMenu"
import { lazy } from 'react'

const MenuCard = lazy(() => import('./MenuCard'))

const Admin = () => {
    return (
        <div className="container d-flex justify-content-center" style={{ minHeight: '50vh' }}>
            <div className="row">
                {AdminMenu && AdminMenu.map((menu, index) => <MenuCard key={menu.title + index} menu={menu} />)}
            </div>
        </div>
    )
}

export default Admin