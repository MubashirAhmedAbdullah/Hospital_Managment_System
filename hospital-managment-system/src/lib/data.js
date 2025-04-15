import { ShieldCheck, CalendarClock, FolderKanban, Users, BarChart3, CreditCard } from 'lucide-react';
export const features = [
    {
      icon: <CalendarClock className="w-8 h-8 text-[#007BFF]" />,
      title: "Smart Appointment Scheduling",
      desc: "Patients can book appointments online while doctors manage their calendar with real-time updates and reminders."
    },
    {
      icon: <FolderKanban className="w-8 h-8 text-[#007BFF]" />,
      title: "Electronic Medical Records (EMR)",
      desc: "Access and update complete patient histories from any device, securely and efficiently."
    },
    {
      icon: <Users className="w-8 h-8 text-[#007BFF]" />,
      title: "Staff & Role Management",
      desc: "Assign roles, monitor staff, and improve communication between departments with ease."
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#007BFF]" />,
      title: "Billing & Invoicing",
      desc: "Generate accurate bills, track transactions, and handle payments all in one place."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#007BFF]" />,
      title: "Real-Time Analytics & Reports",
      desc: "Gain insights into performance, patient flow, and operations with live dashboards and reports."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#007BFF]" />,
      title: "End-to-End Data Security",
      desc: "Ensure your data is protected with encryption, secure access controls, and reliable backups."
    },
  ];