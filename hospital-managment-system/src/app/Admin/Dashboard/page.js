
import StatsCards from "@/Components/statsCards"



 

export default function Dashboard() {
  return (
    <div>
      <div className="text-2xl font-semibold text-[#007BFF]">
        Welcome To Admin Panel 👋
      </div>
      <div className="pt-5">
        <StatsCards />
      </div>
    </div>
  )
}