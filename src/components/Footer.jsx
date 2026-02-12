// import React from 'react';

// export default function Footer() {
//   return (
//     <footer className="bg-blue-900 text-white p-6 mt-8">
//       <div className="text-center">
//         <p>&copy; {new Date().getFullYear()} MVSR College Lost & Found. All Rights Reserved.</p>
//         <div className="mt-2 space-x-4">
//           <a href="/" className="hover:underline">Home</a>
//           <a href="/dashboard" className="hover:underline">Dashboard</a>
//           <a href="/contact" className="hover:underline">Contact</a>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-8 mt-0 border-t border-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MVSR College Lost & Found. All Rights Reserved.
        </p>

        <div className="mt-4 flex justify-center gap-6 text-sm">
          <a
            href="/"
            className="hover:text-white transition"
          >
            Home
          </a>

          <a
            href="/dashboard"
            className="hover:text-white transition"
          >
            Dashboard
          </a>

          <a
            href="/contact"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
