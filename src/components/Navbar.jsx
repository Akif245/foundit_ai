// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("user");
//     navigate("/login");
//   };

//   return (
//     <nav className="bg-blue-800 text-white p-4 flex justify-between items-center">
//       {/* Logo */}
//       <div className="flex items-center space-x-3">
//         <img src="/logo.png" alt="MVSR Logo" className="w-10 h-10" />
//         <h1 className="font-bold text-lg">FoundIt</h1>
//       </div>

//       {/* Navigation Links */}
//       <div className="hidden md:flex space-x-6">
//         <Link to="/">Home</Link>

//         {user && (
//           <>
//             <Link to="/dashboard">Lost Items</Link>
//             <Link to="/report">Report Item</Link>
//             <Link to="/contact">Contact</Link>
//           </>
//         )}
//       </div>

//       {/* Auth Buttons */}
//       <div className="space-x-3">
//         {!user ? (
//           <>
//             <Link
//               to="/login"
//               className="bg-white text-blue-800 px-3 py-1 rounded"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="bg-yellow-400 text-black px-3 py-1 rounded"
//             >
//               Register
//             </Link>
//           </>
//         ) : (
//           <button
//             onClick={handleLogout}
//             className="bg-red-500 px-3 py-1 rounded"
//           >
//             Logout
//           </button>
//         )}
//       </div>
//     </nav>
//   );
// }



import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <div className="flex items-center space-x-3 cursor-pointer hover:opacity-90 transition">
        <img src="/logo.png" alt="MVSR Logo" className="w-10 h-10 rounded-md" />
        <h1 className="font-extrabold text-xl tracking-wide hover:text-gray-200 transition">
          FoundIt
        </h1>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4 font-medium">
        <Link
          to="/"
          className="text-gray-300 px-4 py-2 rounded-lg transition duration-300
          hover:text-white hover:bg-gray-800 hover:scale-105"
        >
          Home
        </Link>

        {user && (
          <>
            <Link
              to="/dashboard"
              className="text-gray-300 px-4 py-2 rounded-lg transition duration-300
              hover:text-white hover:bg-gray-800 hover:scale-105"
            >
              Lost Items
            </Link>

            <Link
              to="/report"
              className="text-gray-300 px-4 py-2 rounded-lg transition duration-300
              hover:text-white hover:bg-gray-800 hover:scale-105"
            >
              Report Item
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 px-4 py-2 rounded-lg transition duration-300
              hover:text-white hover:bg-gray-800 hover:scale-105"
            >
              Contact
            </Link>
          </>
        )}
      </div>

      {/* Auth Buttons */}
      <div className="space-x-3">
        {!user ? (
          <>
            <Link
              to="/login"
              className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold
              transition duration-300 hover:bg-gray-300 hover:scale-105"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold
              transition duration-300 hover:bg-yellow-500 hover:scale-105"
            >
              Register
            </Link>
          </>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-600 px-4 py-2 rounded-lg font-semibold
            transition duration-300 hover:bg-red-700 hover:scale-105"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

