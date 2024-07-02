import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import { getAllCategoriesApi } from '../../apis/api';

const Navbar = ({handleSearchChange}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const navigate = useNavigate();
    const [navItems , setCategories] = useState([])

    const user = JSON.parse(localStorage.getItem("user"));
    const username = user ? user.name : '';

    useEffect(() => {
        getAllCategoriesApi().then((res) => {
            console.log(res.data?.categories)
            setCategories(res.data?.categories)
        })
    }, [])

 
    const handleInputChange = (event) => {
        const query = event.target.value;
        handleSearchChange(query);
      };


    const handlePostClick = () => {
        navigate('/post');
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate('/login');
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleCategoryClick = (category) => {
        navigate(`/productcollection?category=${category}`);
    };

    return (
        <nav className="bg-amber-900">
            {/* First Row */}
            <div className="w-full h-24 flex justify-between items-center border-b border-gray-200 px-4">
                <div className="text-white text-4xl font-bold cursor-pointer" onClick={handleLogoClick}>FURNEY</div>
                <div className="flex items-center space-x-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleInputChange}
                        className="border border-gray-300 rounded-lg w-100 px-2 py-1"
                    />
                    {user && (
                        <>
                            <a href="/cart" className="text-2xl text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
                                </svg>
                            </a>
                            <a href="/favorite" className="text-2xl text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </>
                    )}
                    <div className="relative">
                        <button onClick={toggleDropdown} className="text-2xl text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
                                {user ? (
                                    <>
                                        <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</a>
                                        <a href="/myorder" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Orders</a>
                                        <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</a>
                                        <a href="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Register</a>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    <div onClick={toggleNav} className="block md:hidden ml-4">
                        {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                    </div>
                    <p className='text-xl text-white font-bold'>{user?.username}</p>
                </div>
            </div>

            {/* Second Row */}
            <div className="hidden md:flex w-full h-16 justify-between items-center bg-amber-900 px-4">
                <ul className="flex space-x-4 font-semibold text-white justify-center items-center">
                    {navItems.map((item, index) => (
                        <li key={index} className="cursor-pointer px-12 py-4 hover:bg-white hover:text-black h-16 text-xl" onClick={() => handleCategoryClick(item)}>{item}</li>
                    ))}
                </ul>
                {user && (
                    <button
                        className="bg-amber-700 text-white font-semibold px-4 py-2 rounded"
                        onClick={handlePostClick}
                    >
                        Post
                    </button>
                )}
            </div>

            {/* Mobile Navigation */}
            {navOpen && (
                <div className="md:hidden">
                    <ul className="bg-amber-900 w-full px-4 space-y-2 py-4 text-white">
                        {navItems.map((item, index) => (
                            <li key={index} className="cursor-pointer py-2 border-b border-gray-600 hover:bg-white hover:text-black text-xl" onClick={() => handleCategoryClick(item)}>{item}</li>
                        ))}
                        {user && (
                            <>
                                <li className="flex justify-center mt-4">
                                    <button className="bg-white text-amber-900 font-semibold px-4 py-2 rounded" onClick={handlePostClick}>
                                        Post
                                    </button>
                                </li>
                                <li className="flex justify-center mt-4">
                                    <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</a>
                                </li>
                                <li className="flex justify-center">
                                    <a href="/myorder" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Orders</a>
                                </li>
                                <li className="flex justify-center">
                                    <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;



// import React, { useEffect, useState } from 'react';
// import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';
// import { getAllCategoriesApi, getAllProductAdminApi } from '../../apis/api';

// const Navbar = () => {
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//     const [navOpen, setNavOpen] = useState(false);
//     const navigate = useNavigate();
//     const [navItems , setCategories] = useState([])

//     const user = JSON.parse(localStorage.getItem("user"));
//     const username = user ? user.name : '';

//     useEffect(() => {
//         getAllCategoriesApi().then((res) => {
//             console.log(res.data?.categories)
//           setCategories(res.data?.categories)
//         })
//       }, [])

//     const handlePostClick = () => {
//         navigate('/post');
//     };

//     const toggleDropdown = () => {
//         setIsDropdownOpen(!isDropdownOpen);
//     };

//     const toggleNav = () => {
//         setNavOpen(!navOpen);
//     };

//     const handleLogout = () => {
//         localStorage.removeItem("user");
//         navigate('/login');
//     };

//     const handleLogoClick = () => {
//         navigate('/');
//     };

//     const handleCategoryClick = (category) => {
//         navigate('/productcollection', { state: { category } });
//     };

//     // const navItems = [
//     //     'Sofa', 'Living', 'BedRoom', 'Dining', 'Outdoor', 'Office', 'KidRoom'
//     // ];

//     return (
//         <nav className="bg-amber-900">
//             {/* First Row */}
//             <div className="w-full h-24 flex justify-between items-center border-b border-gray-200 px-4">
//                 <div className="text-white text-4xl font-bold cursor-pointer" onClick={handleLogoClick}>FURNEY</div>
//                 <div className="flex items-center space-x-4">
//                     <input
//                         type="text"
//                         placeholder="Search..."
//                         className="border border-gray-300 rounded-lg w-100 px-2 py-1"
//                     />
//                     {user && (
//                         <>
//                             <a href="/cart" className="text-2xl text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                                     <path fillRule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clipRule="evenodd" />
//                                 </svg>
//                             </a>
//                             <a href="/favorite" className="text-2xl text-white">
//                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                                     <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z" clipRule="evenodd" />
//                                 </svg>
//                             </a>
//                         </>
//                     )}
//                     <div className="relative">
//                         <button onClick={toggleDropdown} className="text-2xl text-white">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
//                                 <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
//                             </svg>
//                         </button>
//                         {isDropdownOpen && (
//                             <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
//                                 {user ? (
//                                     <>
//                                         <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</a>
//                                         <a href="/myorder" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Orders</a>
//                                         <button onClick={handleLogout} className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200">Logout</button>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Login</a>
//                                         <a href="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Register</a>
//                                     </>
//                                 )}
//                             </div>
//                         )}
                        
//                     </div>
//                     <div onClick={toggleNav} className="block md:hidden ml-4">
//                         {navOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
//                     </div>
//                     <p className='text-xl text-white font-bold'>{user?.username}</p>
//                 </div>
//             </div>

//             {/* Second Row */}
//             <div className="hidden md:flex w-full h-16 justify-between items-center bg-amber-900 px-4">
//                 <ul className="flex space-x-4 font-semibold text-white justify-center items-center">
//                     {navItems.map((item, index) => (
//                         <li key={index} className="cursor-pointer px-12 py-4 hover:bg-white hover:text-black h-16 text-xl" onClick={() => handleCategoryClick(item)}>{item}</li>
//                     ))}
//                 </ul>
//                 {user && (
//                     <button
//                         className="bg-amber-700 text-white font-semibold px-4 py-2 rounded"
//                         onClick={handlePostClick}
//                     >
//                         Post
//                     </button>
//                 )}
//             </div>

//             {/* Mobile Navigation */}
//             {navOpen && (
//                 <div className="md:hidden">
//                     <ul className="bg-amber-900 w-full px-4 space-y-2 py-4 text-white">
//                         {navItems.map((item, index) => (
//                             <li key={index} className="cursor-pointer py-2 border-b border-gray-600 hover:bg-white hover:text-black text-xl" onClick={() => handleCategoryClick(item)}>{item}</li>
//                         ))}
//                         {user && (
//                             <>
//                                 <li className="flex justify-center mt-4">
//                                     <button className="bg-white text-amber-900 font-semibold px-4 py-2 rounded" onClick={handlePostClick}>
//                                         Post
//                                     </button>
//                                 </li>
//                                 <li className="flex justify-center mt-4">
//                                     <a href="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Profile</a>
//                                 </li>
//                                 <li className="flex justify-center">
//                                     <a href="/myorder" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">My Orders</a>
//                                 </li>
//                                 <li className="flex justify-center">
//                                     <button onClick={handleLogout} className="bg-white text-gray-800 px-4 py-2 text-left w-full hover:bg-gray-200">Logout</button>
//                                 </li>
//                             </>
//                         )}
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// }

// export default Navbar;
