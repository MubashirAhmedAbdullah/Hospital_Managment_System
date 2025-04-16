import { ShieldCheck, CalendarClock, FolderKanban, Users, BarChart3,} from 'lucide-react';
import { CalendarCheck, FileText, UserCheck, CreditCard, BarChart,} from "lucide-react";
import {
    Lightbulb,
    Zap,
    Handshake,
    UserCircle2,
} from "lucide-react";

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


  export const services = [
    {
      icon: <UserCheck className="w-8 h-8 text-[#007BFF]" />,
      title: "Doctor Management",
      desc: "Easily manage doctor profiles, specialties, schedules, and availability in real time.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-[#007BFF]" />,
      title: "Appointment Booking",
      desc: "Enable patients to book appointments online with automated reminders and calendar syncing.",
    },
    {
      icon: <FileText className="w-8 h-8 text-[#007BFF]" />,
      title: "Medical Records",
      desc: "Digitally store and access complete patient medical histories securely and efficiently.",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-[#007BFF]" />,
      title: "Billing & Payments",
      desc: "Generate invoices, accept payments, and manage transactions seamlessly.",
    },
    {
      icon: <BarChart className="w-8 h-8 text-[#007BFF]" />,
      title: "Reporting & Analytics",
      desc: "Track hospital performance and generate reports with real-time data visualizations.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#007BFF]" />,
      title: "Security & Access Control",
      desc: "Keep patient data safe with encryption and role-based permission controls.",
    },
  ];


  export const values = [
    { icon: <Lightbulb className="w-8 h-8 text-[#007BFF]" />, label: "Innovation" },
    { icon: <ShieldCheck className="w-8 h-8 text-[#007BFF]" />, label: "Data Security" },
    { icon: <Zap className="w-8 h-8 text-[#007BFF]" />, label: "Speed & Efficiency" },
    { icon: <Handshake className="w-8 h-8 text-[#007BFF]" />, label: "Reliable Support" },
    { icon: <UserCircle2 className="w-8 h-8 text-[#007BFF]" />, label: "Healthcare Focused" },
  ];
