// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { apiRequest } from "../utils/api";

// export default function ClaimRequest() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [item, setItem] = useState(null);

//   const [claimerName, setClaimerName] = useState("");
//   const [claimerPhone, setClaimerPhone] = useState("");
//   const [claimerEmail, setClaimerEmail] = useState("");
//   const [claimerAnswer, setClaimerAnswer] = useState("");

//   useEffect(() => {
//     const fetchItem = async () => {
//       try {
//         const data = await apiRequest(`/api/items/${id}`);
//         setItem(data);
//       } catch (err) {
//         alert("Item not found");
//       }
//     };
//     fetchItem();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await apiRequest("/api/claims/create", "POST", {
//         itemId: id,
//         claimerName,
//         claimerPhone,
//         claimerEmail,
//         claimerAnswer,
//       });
//       alert(res.message);
//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.message || "Claim failed");
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
//       <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-2">Request Claim</h2>

//         {item && (
//           <div className="text-sm text-gray-600 mb-4">
//             Claiming: <span className="font-semibold">{item.name}</span>
//           </div>
//         )}

//         {item && (
//           <div className="text-blue-700 text-sm font-semibold mb-3">
//             Secret Question: {item.secretQuestion}
//           </div>
//         )}

//         <form onSubmit={handleSubmit} className="space-y-3">
//           <input
//             className="w-full border p-2 rounded"
//             placeholder="Your Name"
//             value={claimerName}
//             onChange={(e) => setClaimerName(e.target.value)}
//             required
//           />

//           <input
//             className="w-full border p-2 rounded"
//             placeholder="Phone Number"
//             value={claimerPhone}
//             onChange={(e) => setClaimerPhone(e.target.value)}
//             required
//           />

//           <input
//             className="w-full border p-2 rounded"
//             placeholder="Email (optional)"
//             value={claimerEmail}
//             onChange={(e) => setClaimerEmail(e.target.value)}
//           />

//           <input
//             className="w-full border p-2 rounded"
//             placeholder="Answer to secret question"
//             value={claimerAnswer}
//             onChange={(e) => setClaimerAnswer(e.target.value)}
//             required
//           />

//           <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
//             Submit Claim
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function ClaimRequest() {
  const { id } = useParams(); // itemId
  const navigate = useNavigate();

  const [item, setItem] = useState(null);

  const [claimerName, setClaimerName] = useState("");
  const [claimerPhone, setClaimerPhone] = useState("");
  const [claimerEmail, setClaimerEmail] = useState("");
  const [claimerAnswer, setClaimerAnswer] = useState("");

  const fetchItem = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/items/${id}`);
      setItem(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Item not found");
    }
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const handleClaim = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/claims/create", {
        itemId: id,
        claimerName,
        claimerPhone,
        claimerEmail,
        claimerAnswer,
      });

      alert(res.data.message);
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "❌ Claim failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-3">Request Claim</h2>

        {item && (
          <div className="mb-4">
            <p className="text-gray-600">
              Claiming: <b>{item.itemName}</b>
            </p>

            <p className="text-sm text-blue-700 font-semibold mt-2">
              Secret Question: {item.secretQuestion}
            </p>
          </div>
        )}

        <form onSubmit={handleClaim} className="space-y-3">
          <input
            className="border p-2 rounded w-full"
            placeholder="Your Name"
            value={claimerName}
            onChange={(e) => setClaimerName(e.target.value)}
            required
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Phone Number"
            value={claimerPhone}
            onChange={(e) => setClaimerPhone(e.target.value)}
            required
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Email (optional)"
            value={claimerEmail}
            onChange={(e) => setClaimerEmail(e.target.value)}
          />

          <input
            className="border p-2 rounded w-full"
            placeholder="Answer to secret question"
            value={claimerAnswer}
            onChange={(e) => setClaimerAnswer(e.target.value)}
            required
          />

          <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
            Submit Claim
          </button>
        </form>
      </div>
    </div>
  );
}
