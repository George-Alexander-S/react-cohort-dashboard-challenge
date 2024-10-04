import './Menu.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";

function Menu() {
    return (
        <div className="menu-container">
            <div className="header">
                <Header />
            </div>
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="content-area">
                {/* Dynamic posts, comments, etc., go here */}
            </div>
        </div>
    );
}

export default Menu;
