"use client"

import StatsCards from "@/Components/statsCards";

import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

const patientVisitedData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Patients",
      data: [200, 280, 250, 300, 270, 340, 294, 310, 330, 350, 290, 360],
      fill: false,
      borderColor: "#007BFF",
      tension: 0.4,
      pointBackgroundColor: "#007BFF",
      backgroundColor: "#007BFF",
    },
  ],
};

const weeklyPatientData = {
  labels: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  datasets: [
    {
      label: "New Patients",
      data: [300, 280, 250, 300, 270, 340, 310],
      backgroundColor: "#007BFF",
    },
    {
      label: "Returning Patients",
      data: [200, 230, 210, 220, 250, 270, 290],
      backgroundColor: "#34D399",
    },
  ],
};

const lineOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#007BFF",
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#6B7280" },
    },
    y: {
      ticks: { color: "#6B7280" },
    },
  },
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    x: {
      ticks: { color: "#6B7280" },
    },
    y: {
      ticks: { color: "#6B7280" },
    },
  },
};

export default function Dashboard() {
  return (
    <div>
      <div className="text-2xl font-semibold text-[#007BFF]">
        Welcome To Admin Panel 👋
      </div>
      <div className="pt-5 w-full">
          <p className="pl-1 text-muted-foreground text-base mb-10">
            Here you can manage hospital operations, monitor activities, and make real-time decisions efficiently.
          </p>
        <StatsCards />

        <main className="flex-1 p-10">
          

          {/* <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
            <button className="bg-[#007BFF] text-white py-3 px-4 rounded-xl shadow hover:bg-blue-600 transition">Add Patient</button>
            <button className="bg-[#007BFF] text-white py-3 px-4 rounded-xl shadow hover:bg-blue-600 transition">New Appointment</button>
            <button className="bg-[#007BFF] text-white py-3 px-4 rounded-xl shadow hover:bg-blue-600 transition">Generate Invoice</button>
            <button className="bg-[#007BFF] text-white py-3 px-4 rounded-xl shadow hover:bg-blue-600 transition">View Reports</button>
          </div> */}

          {/* Patient Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#007BFF]">Patient Visited</h2>
              </div>
              <div className="w-full h-64">
                <Line data={patientVisitedData} options={lineOptions} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-[#007BFF]">Weekly Patients</h2>
              </div>
              <div className="w-full h-64">
                <Bar data={weeklyPatientData} options={barOptions} />
              </div>
            </div>
          </div>

          {/* Management Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Appointment Management</h2>
              <p className="text-sm text-gray-600">View and manage upcoming appointments. Filter by doctor, patient, or date.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Patient Management</h2>
              <p className="text-sm text-gray-600">Add, edit or discharge patient information. Access complete medical history.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Doctor Management</h2>
              <p className="text-sm text-gray-600">Manage doctors, their schedules, and specialization categories.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Billing & Payments</h2>
              <p className="text-sm text-gray-600">Generate invoices, check payment statuses, and view billing history.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Inventory & Beds</h2>
              <p className="text-sm text-gray-600">Track medical supplies and monitor bed availability in real-time.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h2 className="text-xl font-semibold text-[#007BFF] mb-4">Reports & Analytics</h2>
              <p className="text-sm text-gray-600">Download patient and financial reports. Visualize hospital performance.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
