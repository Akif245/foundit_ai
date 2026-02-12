import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AdminClaims() {
  const [claims, setClaims] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClaims = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/claims");
      setClaims(res.data);
    } catch (error) {
      console.error("Fetch claims error:", error.message);
      alert("❌ Failed to load claims");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClaims();
  }, []);

  const updateStatus = async (claimId, status) => {
    try {
      await axios.put(`http://localhost:5000/api/claims/${claimId}`, { status });
      alert(`✅ Claim ${status}`);
      fetchClaims();
    } catch (error) {
      console.error("Update status error:", error.message);
      alert("❌ Failed to update status");
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin - Claim Requests</h1>

      {loading ? (
        <p>Loading claims...</p>
      ) : claims.length === 0 ? (
        <p>No claim requests found.</p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {claims.map((claim) => (
            <div
              key={claim._id}
              className="bg-white shadow rounded-lg p-4 border"
            >
              <h2 className="text-xl font-bold mb-2">
                Item: {claim.itemId?.name || "Deleted Item"}
              </h2>

              <p>
                <b>Claimer Name:</b> {claim.claimerName}
              </p>

              <p>
                <b>Phone:</b> {claim.claimerPhone}
              </p>

              {claim.claimerEmail && (
                <p>
                  <b>Email:</b> {claim.claimerEmail}
                </p>
              )}

              <p className="mt-2">
                <b>Status:</b>{" "}
                <span
                  className={`font-semibold ${
                    claim.status === "approved"
                      ? "text-green-600"
                      : claim.status === "rejected"
                      ? "text-red-600"
                      : "text-orange-600"
                  }`}
                >
                  {claim.status.toUpperCase()}
                </span>
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => updateStatus(claim._id, "approved")}
                  disabled={claim.status !== "pending"}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                >
                  Approve
                </button>

                <button
                  onClick={() => updateStatus(claim._id, "rejected")}
                  disabled={claim.status !== "pending"}
                  className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
