import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBook, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa';

const SideBar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
        window.location.reload();
    };

    return (
        <div className="flex">
            <aside className="w-60 bg-amber-900 text-white h-screen flex flex-col">
                {/* Logo Image Section */}
                <div className="flex justify-center items-center p-4">
                    <img src="/images/gr.png" alt="Logo" className="w-4/5 max-w-xs" />
                </div>
                <hr className="border-t border-white" />
                <nav className="flex-1">
                    <ul className="space-y-2">
                        <li>
                            <button
                                onClick={() => navigate('/admin/dashboard')}
                                className="flex items-center w-full p-4 hover:bg-blue-700"
                            >
                                <FaHome className="mr-2" />
                                <span>Products</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate('/adminorder')}
                                className="flex items-center w-full p-4 hover:bg-blue-700"
                            >
                                <FaBook className="mr-2" />
                                <span>View Order</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => navigate('/adminuser')}
                                className="flex items-center w-full p-4 hover:bg-blue-700"
                            >
                                <FaUser className="mr-2" />
                                <span>Users</span>
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="flex items-center w-full p-4 hover:bg-blue-700"
                            >
                                <FaSignOutAlt className="mr-2" />
                                <span>Logout</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </aside>
        </div>
    );
}

export default SideBar;
