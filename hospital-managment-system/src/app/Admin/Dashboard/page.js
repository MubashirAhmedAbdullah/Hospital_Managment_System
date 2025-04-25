import StatsCards from "@/Components/statsCards";
import { Tooltip } from "antd";
// import {
//   CartesianGrid,
//   Line,
//   LineChart,
//   ResponsiveContainer,
//   XAxis,
//   YAxis,
//   BarChart,
//   Bar,
//   Legend,
// } from "recharts";

const patientVisitedData = [
  { name: 'Jan', patients: 200 },
  { name: 'Feb', patients: 280 },
  { name: 'Mar', patients: 250 },
  { name: 'Apr', patients: 300 },
  { name: 'May', patients: 270 },
  { name: 'Jun', patients: 340 },
  { name: 'Jul', patients: 294 },
  { name: 'Aug', patients: 310 },
  { name: 'Sep', patients: 330 },
  { name: 'Oct', patients: 350 },
  { name: 'Nov', patients: 290 },
  { name: 'Dec', patients: 360 },
];

const weeklyPatientData = [
  { day: 'Su', new: 300, returning: 200 },
  { day: 'Mo', new: 280, returning: 230 },
  { day: 'Tu', new: 250, returning: 210 },
  { day: 'We', new: 300, returning: 220 },
  { day: 'Th', new: 270, returning: 250 },
  { day: 'Fr', new: 340, returning: 270 },
  { day: 'Sa', new: 310, returning: 290 },
];

export default function Dashboard() {
  return (
    <div>
      <div className="text-2xl font-semibold text-[#007BFF]">
        Welcome To Admin Panel 👋
      </div>
      <div className="pt-5 w-full">
        <StatsCards />
      </div>
    </div>
  );
}
