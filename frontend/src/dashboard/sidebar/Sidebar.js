import './Sidebar.css';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return(
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id = "sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                    <h1>Dr. Pig</h1>
                </div>
                <i
                onClick={() => closeSidebar}
                className="fa fa-times"
                id="sidebarIcon"
                aria-hidden="true"
                ></i>
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-minus-square"></i>
                    <a href="/">Home</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-wpforms"></i>
                    <Link to="/form-lancamento">Novo Lançamento</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-comment-dollar"></i>
                    <Link to="/lancamentos">Lançamentos</Link>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-building"></i>
                    <a href="#">Lojas</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Produtos</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-bars"></i>
                    <a href="#">Categorias</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-cutlery"></i>
                    <a href="#">Pedidos</a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;