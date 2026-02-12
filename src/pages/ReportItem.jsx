// // // import React, { useState } from "react";
// // // import axios from "axios";

// // // export default function ReportItem() {
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     description: "",
// // //     category: "",
// // //     location: "",
// // //     date: "",
// // //     email: "",
// // //     contact: "",
// // //     image: null,

// // //     // ✅ NEW FIELDS
// // //     secretQuestion: "",
// // //     secretAnswer: "",
// // //   });

// // //   const [loading, setLoading] = useState(false);

// // //   const handleChange = (e) => {
// // //     const { name, value, files } = e.target;

// // //     if (name === "image") {
// // //       setFormData({ ...formData, image: files[0] });
// // //     } else {
// // //       setFormData({ ...formData, [name]: value });
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     try {
// // //       setLoading(true);

// // //       const data = new FormData();
// // //       data.append("name", formData.name);
// // //       data.append("description", formData.description);
// // //       data.append("category", formData.category);
// // //       data.append("location", formData.location);
// // //       data.append("date", formData.date);
// // //       data.append("email", formData.email);
// // //       data.append("contact", formData.contact);

// // //       // ✅ NEW DATA
// // //       data.append("secretQuestion", formData.secretQuestion);
// // //       data.append("secretAnswer", formData.secretAnswer);

// // //       if (formData.image) {
// // //         data.append("image", formData.image);
// // //       }

// // //       await axios.post("http://localhost:5000/api/items/add", data, {
// // //         headers: { "Content-Type": "multipart/form-data" },
// // //       });

// // //       alert("✅ Item reported successfully!");

// // //       setFormData({
// // //         name: "",
// // //         description: "",
// // //         category: "",
// // //         location: "",
// // //         date: "",
// // //         email: "",
// // //         contact: "",
// // //         image: null,
// // //         secretQuestion: "",
// // //         secretAnswer: "",
// // //       });
// // //     } catch (error) {
// // //       console.error("Report Item error:", error);
// // //       alert("❌ Failed to report item. Try again!");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
// // //       <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
// // //         <h2 className="text-2xl font-bold text-center mb-6">
// // //           Report a Lost Item
// // //         </h2>

// // //         <form onSubmit={handleSubmit} className="space-y-4">
// // //           {/* Item Name */}
// // //           <input
// // //             type="text"
// // //             name="name"
// // //             value={formData.name}
// // //             onChange={handleChange}
// // //             placeholder="Item Name"
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Description */}
// // //           <textarea
// // //             name="description"
// // //             value={formData.description}
// // //             onChange={handleChange}
// // //             placeholder="Description"
// // //             className="w-full border p-3 rounded-lg"
// // //             rows={3}
// // //             required
// // //           />

// // //           {/* Category */}
// // //           <input
// // //             type="text"
// // //             name="category"
// // //             value={formData.category}
// // //             onChange={handleChange}
// // //             placeholder="Category"
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Location */}
// // //           <input
// // //             type="text"
// // //             name="location"
// // //             value={formData.location}
// // //             onChange={handleChange}
// // //             placeholder="Location Lost"
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Date */}
// // //           <input
// // //             type="date"
// // //             name="date"
// // //             value={formData.date}
// // //             onChange={handleChange}
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Contact Email */}
// // //           <input
// // //             type="email"
// // //             name="email"
// // //             value={formData.email}
// // //             onChange={handleChange}
// // //             placeholder="Your Email"
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Contact Number */}
// // //           <input
// // //             type="text"
// // //             name="contact"
// // //             value={formData.contact}
// // //             onChange={handleChange}
// // //             placeholder="Contact Number"
// // //             className="w-full border p-3 rounded-lg"
// // //             required
// // //           />

// // //           {/* Upload Image */}
// // //           <input
// // //             type="file"
// // //             name="image"
// // //             accept="image/*"
// // //             onChange={handleChange}
// // //             className="w-full border p-3 rounded-lg"
// // //           />

// // //           {/* ✅ NEW SECRET VERIFICATION SECTION */}
// // //           <div className="border rounded-lg p-4 bg-gray-50">
// // //             <h3 className="font-semibold text-lg mb-2 text-gray-800">
// // //               Owner Verification (Secret)
// // //             </h3>

// // //             <p className="text-sm text-gray-600 mb-3">
// // //               This will help confirm the real owner before handing over the item.
// // //               <br />
// // //               ⚠️ This will NOT be shown publicly.
// // //             </p>

// // //             {/* ✅ Wrap in one parent div to avoid JSX error */}
// // //             <div className="w-full">
// // //               <select
// // //                 className="border p-2 rounded w-full"
// // //                 name="secretQuestion"
// // //                 value={formData.secretQuestion}
// // //                 onChange={handleChange}
// // //                 required
// // //               >
// // //                 <option value="">Select Secret Question</option>
// // //                 <option value="What is inside the item?">
// // //                   What is inside the item?
// // //                 </option>
// // //                 <option value="Any unique mark/sticker?">
// // //                   Any unique mark/sticker?
// // //                 </option>
// // //                 <option value="Last 4 digits of ID card?">
// // //                   Last 4 digits of ID card?
// // //                 </option>
// // //               </select>

// // //               <input
// // //                 type="text"
// // //                 name="secretAnswer"
// // //                 className="border p-2 rounded w-full mt-2"
// // //                 placeholder="Secret Answer (only owner knows)"
// // //                 value={formData.secretAnswer}
// // //                 onChange={handleChange}
// // //                 required
// // //               />
// // //             </div>
// // //           </div>

// // //           {/* Submit Button */}
// // //           <button
// // //             type="submit"
// // //             disabled={loading}
// // //             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
// // //           >
// // //             {loading ? "Submitting..." : "Report Item"}
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import React, { useState } from "react";
// // import axios from "axios";

// // export default function ReportItem() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     description: "",
// //     category: "",
// //     location: "",
// //     date: "",
// //     email: "",
// //     contact: "",
// //     image: null,

// //     // ✅ NEW SECRET FIELDS
// //     secretQuestion: "",
// //     secretAnswer: "",
// //   });

// //   const [loading, setLoading] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value, files } = e.target;

// //     if (name === "image") {
// //       setFormData({ ...formData, image: files[0] });
// //     } else {
// //       setFormData({ ...formData, [name]: value });
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       setLoading(true);

// //       const data = new FormData();

// //       // ✅ IMPORTANT: Match backend field names
// //       data.append("itemName", formData.name);
// //       data.append("description", formData.description);
// //       data.append("category", formData.category);
// //       data.append("location", formData.location);
// //       data.append("dateLost", formData.date);

// //       data.append("email", formData.email);
// //       data.append("phone", formData.contact);

// //       // ✅ secret verification fields
// //       data.append("secretQuestion", formData.secretQuestion);
// //       data.append("secretAnswer", formData.secretAnswer);

// //       if (formData.image) {
// //         data.append("image", formData.image);
// //       }

// //       await axios.post("http://localhost:5000/api/items/add", data, {
// //         headers: { "Content-Type": "multipart/form-data" },
// //       });

// //       alert("✅ Item reported successfully!");

// //       setFormData({
// //         name: "",
// //         description: "",
// //         category: "",
// //         location: "",
// //         date: "",
// //         email: "",
// //         contact: "",
// //         image: null,
// //         secretQuestion: "",
// //         secretAnswer: "",
// //       });
// //     } catch (error) {
// //       console.error(
// //         "Report Item error:",
// //         error.response?.data || error.message
// //       );
// //       alert(error.response?.data?.message || "❌ Failed to report item. Try again!");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
// //       <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
// //         <h2 className="text-2xl font-bold text-center mb-6">
// //           Report a Lost Item
// //         </h2>

// //         <form onSubmit={handleSubmit} className="space-y-4">
// //           {/* Item Name */}
// //           <input
// //             type="text"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             placeholder="Item Name"
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Description */}
// //           <textarea
// //             name="description"
// //             value={formData.description}
// //             onChange={handleChange}
// //             placeholder="Description"
// //             className="w-full border p-3 rounded-lg"
// //             rows={3}
// //             required
// //           />

// //           {/* Category */}
// //           <input
// //             type="text"
// //             name="category"
// //             value={formData.category}
// //             onChange={handleChange}
// //             placeholder="Category"
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Location */}
// //           <input
// //             type="text"
// //             name="location"
// //             value={formData.location}
// //             onChange={handleChange}
// //             placeholder="Location Lost"
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Date */}
// //           <input
// //             type="date"
// //             name="date"
// //             value={formData.date}
// //             onChange={handleChange}
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Email */}
// //           <input
// //             type="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             placeholder="Your Email"
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Phone */}
// //           <input
// //             type="text"
// //             name="contact"
// //             value={formData.contact}
// //             onChange={handleChange}
// //             placeholder="Contact Number"
// //             className="w-full border p-3 rounded-lg"
// //             required
// //           />

// //           {/* Image */}
// //           <input
// //             type="file"
// //             name="image"
// //             accept="image/*"
// //             onChange={handleChange}
// //             className="w-full border p-3 rounded-lg"
// //           />

// //           {/* ✅ SECRET VERIFICATION */}
// //           <div className="border rounded-lg p-4 bg-gray-50">
// //             <h3 className="font-semibold text-lg mb-2 text-gray-800">
// //               Owner Verification (Secret)
// //             </h3>

// //             <p className="text-sm text-gray-600 mb-3">
// //               This helps confirm the real owner before giving the item.
// //               <br />
// //               ⚠️ This will NOT be shown publicly.
// //             </p>

// //             <div className="w-full">
// //               <select
// //                 className="border p-2 rounded w-full"
// //                 name="secretQuestion"
// //                 value={formData.secretQuestion}
// //                 onChange={handleChange}
// //                 required
// //               >
// //                 <option value="">Select Secret Question</option>
// //                 <option value="What is inside the item?">
// //                   What is inside the item?
// //                 </option>
// //                 <option value="Any unique mark/sticker?">
// //                   Any unique mark/sticker?
// //                 </option>
// //                 <option value="Last 4 digits of ID card?">
// //                   Last 4 digits of ID card?
// //                 </option>
// //               </select>

// //               <input
// //                 type="text"
// //                 name="secretAnswer"
// //                 className="border p-2 rounded w-full mt-2"
// //                 placeholder="Secret Answer (only owner knows)"
// //                 value={formData.secretAnswer}
// //                 onChange={handleChange}
// //                 required
// //               />
// //             </div>
// //           </div>

// //           {/* Submit */}
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
// //           >
// //             {loading ? "Submitting..." : "Report Item"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // }
// import React, { useState } from "react";
// import axios from "axios";

// export default function ReportItem() {
//   const [formData, setFormData] = useState({
//     name: "",
//     category: "",
//     date: "",
//     location: "",
//     description: "",
//     contact: "",
//     image: null,

//     // ✅ secret verification
//     secretQuestion: "",
//     secretAnswer: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       setFormData({ ...formData, image: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       setLoading(true);

//       const data = new FormData();
//       data.append("name", formData.name);
//       data.append("category", formData.category);
//       data.append("date", formData.date);
//       data.append("location", formData.location);
//       data.append("description", formData.description);
//       data.append("contact", formData.contact);

//       // ✅ secret fields
//       data.append("secretQuestion", formData.secretQuestion);
//       data.append("secretAnswer", formData.secretAnswer);

//       if (formData.image) {
//         data.append("image", formData.image);
//       }

//       // ✅ CORRECT ROUTE (backend uses POST "/api/items")
//       await axios.post("http://localhost:5000/api/items", data, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       alert("✅ Item reported successfully!");

//       setFormData({
//         name: "",
//         category: "",
//         date: "",
//         location: "",
//         description: "",
//         contact: "",
//         image: null,
//         secretQuestion: "",
//         secretAnswer: "",
//       });
//     } catch (error) {
//       console.error("Report Item Error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "❌ Failed to report item");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
//       <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
//         <h2 className="text-2xl font-bold text-center mb-6">
//           Report a Lost Item
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Item Name"
//             className="w-full border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="text"
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             placeholder="Category"
//             className="w-full border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             className="w-full border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="text"
//             name="location"
//             value={formData.location}
//             onChange={handleChange}
//             placeholder="Location Lost"
//             className="w-full border p-3 rounded-lg"
//             required
//           />

//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Description"
//             className="w-full border p-3 rounded-lg"
//             rows={3}
//             required
//           />

//           <input
//             type="text"
//             name="contact"
//             value={formData.contact}
//             onChange={handleChange}
//             placeholder="Contact Number"
//             className="w-full border p-3 rounded-lg"
//             required
//           />

//           <input
//             type="file"
//             name="image"
//             accept="image/*"
//             onChange={handleChange}
//             className="w-full border p-3 rounded-lg"
//           />

//           {/* ✅ Secret Verification */}
//           <div className="border rounded-lg p-4 bg-gray-50">
//             <h3 className="font-semibold text-lg mb-2 text-gray-800">
//               Owner Verification (Secret)
//             </h3>

//             <p className="text-sm text-gray-600 mb-3">
//               This will help confirm the real owner.
//               <br />
//               ⚠️ Not shown publicly.
//             </p>

//             <div className="w-full">
//               <select
//                 className="border p-2 rounded w-full"
//                 name="secretQuestion"
//                 value={formData.secretQuestion}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Secret Question</option>
//                 <option value="What is inside the item?">
//                   What is inside the item?
//                 </option>
//                 <option value="Any unique mark/sticker?">
//                   Any unique mark/sticker?
//                 </option>
//                 <option value="Last 4 digits of ID card?">
//                   Last 4 digits of ID card?
//                 </option>
//               </select>

//               <input
//                 type="text"
//                 name="secretAnswer"
//                 className="border p-2 rounded w-full mt-2"
//                 placeholder="Secret Answer (only owner knows)"
//                 value={formData.secretAnswer}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
//           >
//             {loading ? "Submitting..." : "Report Item"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";

export default function ReportItem() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    date: "",
    location: "",
    description: "",
    contact: "",
    image: null,

    // ✅ secret verification
    secretQuestion: "",
    customSecretQuestion: "",
    secretAnswer: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // ✅ choose correct secret question
      const finalSecretQuestion =
        formData.secretQuestion === "OTHER"
          ? formData.customSecretQuestion
          : formData.secretQuestion;

      if (!finalSecretQuestion || finalSecretQuestion.trim() === "") {
        alert("❌ Please enter/select a secret question");
        setLoading(false);
        return;
      }

      const data = new FormData();
      data.append("name", formData.name);
      data.append("category", formData.category);
      data.append("date", formData.date);
      data.append("location", formData.location);
      data.append("description", formData.description);
      data.append("contact", formData.contact);

      // ✅ secret fields
      data.append("secretQuestion", finalSecretQuestion);
      data.append("secretAnswer", formData.secretAnswer);

      if (formData.image) {
        data.append("image", formData.image);
      }

      await axios.post("http://localhost:5000/api/items", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Item reported successfully!");

      setFormData({
        name: "",
        category: "",
        date: "",
        location: "",
        description: "",
        contact: "",
        image: null,
        secretQuestion: "",
        customSecretQuestion: "",
        secretAnswer: "",
      });
    } catch (error) {
      console.error("Report Item Error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "❌ Failed to report item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Report a Lost Item
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Item Name"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location Lost"
            className="w-full border p-3 rounded-lg"
            required
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border p-3 rounded-lg"
            rows={3}
            required
          />

          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact Number"
            className="w-full border p-3 rounded-lg"
            required
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* ✅ Secret Verification */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <h3 className="font-semibold text-lg mb-2 text-gray-800">
              Owner Verification (Secret)
            </h3>

            <p className="text-sm text-gray-600 mb-3">
              This helps confirm the real owner.
              <br />
              ⚠️ This will NOT be shown publicly.
            </p>

            <select
              className="border p-2 rounded w-full"
              name="secretQuestion"
              value={formData.secretQuestion}
              onChange={handleChange}
              required
            >
              <option value="">Select Secret Question</option>
              <option value="What is inside the item?">
                What is inside the item?
              </option>
              <option value="Any unique mark/sticker?">
                Any unique mark/sticker?
              </option>
              <option value="What color is it exactly?">
                What color is it exactly?
              </option>
              <option value="Where did you last use it?">
                Where did you last use it?
              </option>

              {/* ✅ Custom option */}
              <option value="OTHER">Other (Custom Question)</option>
            </select>

            {/* ✅ Show custom question input only if OTHER */}
            {formData.secretQuestion === "OTHER" && (
              <input
                type="text"
                name="customSecretQuestion"
                className="border p-2 rounded w-full mt-2"
                placeholder="Type your custom secret question"
                value={formData.customSecretQuestion}
                onChange={handleChange}
                required
              />
            )}

            <input
              type="text"
              name="secretAnswer"
              className="border p-2 rounded w-full mt-2"
              placeholder="Secret Answer (only owner knows)"
              value={formData.secretAnswer}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Report Item"}
          </button>
        </form>
      </div>
    </div>
  );
}
