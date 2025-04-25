"use client"

import { Users, Stethoscope, CalendarCheck2, Hospital } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const stats = [
  {
    title: "Total Patients",
    value: "3,200",
    change: "+4.5% this month",
    icon: Users,
    iconColor: "text-blue-600"
  },
  {
    title: "Total Doctors",
    value: "120",
    change: "+2.0% this month",
    icon: Stethoscope,
    iconColor: "text-green-600"
  },
  {
    title: "Total Appointments",
    value: "1,850",
    change: "+7.1% this month",
    icon: CalendarCheck2,
    iconColor: "text-purple-600"
  },
  {
    title: "Total Hospitals",
    value: "15",
    change: "+1 new hospital",
    icon: Hospital,
    iconColor: "text-red-600"
  }
]

export default function StatsCards() {
  return (
    <div className="flex items-center justify-evenly px-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="shadow-md rounded-2xl w-52">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">{stat.title}</CardTitle>
              <Icon className={`h-5 w-5 ${stat.iconColor}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
