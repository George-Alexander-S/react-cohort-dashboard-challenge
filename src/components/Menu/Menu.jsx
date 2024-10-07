import './Menu.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Poster from '../Poster/Poster';

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
            {/* Dynamic posts, comments, etc., go here
            Do wonder if I should make a separate comp for the section that handles the posting. And another for rendering existing posts below that. */}
            <Poster/>
            </div>
        </div>
    );
}

export default Menu;
