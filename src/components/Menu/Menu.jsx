import './Menu.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Poster from '../Poster/Poster';
import PostViewer from '../PostViewer/PostViewer';
import { PostProvider } from '../../context/PostProvider';

function Menu() {
    return (
        <PostProvider>
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
                    <Poster />
                    <PostViewer />
                </div>
            </div>
        </PostProvider>
    );
}

export default Menu;
