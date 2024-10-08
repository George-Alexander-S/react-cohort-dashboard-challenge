import './Menu.css';
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Poster from '../Poster/Poster';
import PostViewer from '../PostViewer/PostViewer';
import { PostProvider } from '../../context/PostProvider';
import UserProfile from '../Profile/Profile';
import { UserProvider } from '../../context/UserProvider';
import { Route, Routes } from 'react-router-dom';
import ThisPost from '../PostViewer/ThisPost';

function Menu() {
    return (
        <UserProvider>
            <PostProvider>
                <div className="menu-container">
                    <div className="header">
                        <Header />
                    </div>
                    <div className="sidebar">
                        <Sidebar />
                    </div>
                    <div className="content-area">
                        <Routes>
                            <Route path="/" element={<><Poster /><PostViewer /></>} />
                            <Route path="/profile/:userId" element={<UserProfile/>} />
                            <Route path="/post/:postId" element={<ThisPost/>}/>
                        </Routes>
                    </div>
                </div>
            </PostProvider>
        </UserProvider>
    );
}

export default Menu;
