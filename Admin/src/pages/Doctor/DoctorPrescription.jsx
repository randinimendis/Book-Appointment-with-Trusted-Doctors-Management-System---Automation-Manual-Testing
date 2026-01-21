// import React from "react";

// const DoctorPrescription = () => {

//   return (
//     <form action={"#"} className="m-5 w-full">
//       <p className="mb-3 text-lg font-medium">PRESCRIPTION</p>
//       <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
//         <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
//           <div className="w-full lg:flex-1 flex flex-col gap-4">
//             <div className="flex-1 flex flex-col gap-1">
//               <p>Patient Name</p>
//               <input
//                 className="border rounded px-3 py-2"
//                 type="text"
//                 placeholder="Name"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p>Patient Email</p>
//               <input
//                 className="border rounded px-3 py-2"
//                 type="email"
//                 placeholder="Email"
//                 required
//               />
//             </div>

//             <div className="flex-1 flex flex-col gap-1">
//               <p>Set Password</p>
//               <input
//                 className="border rounded px-3 py-2"
//                 type="password"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default DoctorPrescription;
import React from "react";

const DoctorPrescription = () => {
  return (
    <form action="#" className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">PRESCRIPTION</p>
      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex flex-col gap-6 text-gray-600">
          {/* Grid layout for first 5 fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Patient Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Patient Name
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                type="text"
                placeholder="Enter patient name"
                required
              />
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select className="w-full border rounded px-3 py-2" required>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="block text-sm font-medium mb-1">Age</label>
              <input
                className="w-full border rounded px-3 py-2"
                type="number"
                placeholder="Enter age"
                required
              />
            </div>

            {/* Date of Appointment */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Date of Appointment
              </label>
              <input
                className="w-full border rounded px-3 py-2"
                type="date"
                required
              />
            </div>

            {/* Fees */}
            <div>
              <label className="block text-sm font-medium mb-1">Fees</label>
              <input
                className="w-full border rounded px-3 py-2"
                type="number"
                placeholder="Enter consultation fee"
                required
              />
            </div>
          </div>

          {/* Notes (Full width) */}
          <div>
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Write any additional notes"
              rows={4}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Prescription
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default DoctorPrescription;
