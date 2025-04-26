"use client";

import { useState } from "react";
import { Table, Modal, Form, Input, Button as AntButton, DatePicker, TimePicker, Select } from "antd";
import { Card } from "@/Components/ui/card";
import { Button } from "@/Components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Search } from "lucide-react";
import dayjs from "dayjs";

const initialAppointments = [
    {
        key: "1",
        patient: "John Doe",
        doctor: "Dr. Smith",
        date: "2025-04-26",
        time: "10:30 AM",
        mode: "Offline",
        status: "Scheduled",
        reason: "Regular checkup",
    },
    {
        key: "2",
        patient: "Jane Smith",
        doctor: "Dr. Brown",
        date: "2025-04-27",
        time: "02:00 PM",
        mode: "Online",
        status: "Completed",
        reason: "Follow-up consultation",
    },
    {
        key: "3",
        patient: "Alice Johnson",
        doctor: "Dr. Taylor",
        date: "2025-04-28",
        time: "01:00 PM",
        mode: "Offline",
        status: "Scheduled",
        reason: "Dental Check",
    },
];

export default function AppointmentsAdmin() {
    const [search, setSearch] = useState("");
    const [appointments, setAppointments] = useState(initialAppointments);
    const [openAdd, setOpenAdd] = useState(false);
    const [openView, setOpenView] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [selectedAppointment, setSelectedAppointment] = useState(null);
    const [activeTab, setActiveTab] = useState("all");
    const [form] = Form.useForm();
    const [editForm] = Form.useForm();

    const handleAdd = (values) => {
        const newAppointment = {
            key: (appointments.length + 1).toString(),
            ...values,
            date: values.date.format("YYYY-MM-DD"),
            time: values.time.format("hh:mm A"),
        };
        setAppointments([...appointments, newAppointment]);
        setOpenAdd(false);
        form.resetFields();
    };

    const handleEdit = (values) => {
        const updatedAppointments = appointments.map((item) =>
            item.key === selectedAppointment.key
                ? {
                    ...item,
                    ...values,
                    date: values.date.format("YYYY-MM-DD"),
                    time: values.time.format("hh:mm A"),
                }
                : item
        );
        setAppointments(updatedAppointments);
        setOpenEdit(false);
    };

    const handleDelete = (key) => {
        Modal.confirm({
            title: "Are you sure delete this appointment?",
            okText: "Yes",
            okType: "danger",
            cancelText: "No",
            onOk: () => {
                setAppointments(appointments.filter((item) => item.key !== key));
            },
        });
    };

    const columns = [
        { title: "Patient", dataIndex: "patient", key: "patient" },
        { title: "Doctor", dataIndex: "doctor", key: "doctor" },
        { title: "Date", dataIndex: "date", key: "date" },
        { title: "Time", dataIndex: "time", key: "time" },
        { title: "Mode", dataIndex: "mode", key: "mode" },
        { title: "Status", dataIndex: "status", key: "status" },
        {
            title: "Actions",
            key: "actions",
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button
                        className="bg-[#007BFF] text-white hover:bg-[#007BFF] cursor-pointer"
                        onClick={() => {
                            setSelectedAppointment(record);
                            setOpenView(true);
                        }}
                        size="sm"
                    >
                        View
                    </Button>
                    <Button
                        className="bg-[#007BFF] text-white hover:bg-[#007BFF] cursor-pointer"
                        onClick={() => {
                            setSelectedAppointment(record);
                            editForm.setFieldsValue({
                                ...record,
                                date: dayjs(record.date),
                                time: dayjs(record.time, "hh:mm A"),
                            });
                            setOpenEdit(true);
                        }}
                        size="sm"
                    >
                        Edit
                    </Button>
                    <Button
                        className="cursor-pointer"
                        variant="destructive"
                        onClick={() => handleDelete(record.key)}
                        size="sm"
                    >
                        Remove
                    </Button>
                </div>
            ),
        },
    ];

    const filteredAppointments = appointments.filter((appointment) => {
        const matchesSearch =
            appointment.patient.toLowerCase().includes(search.toLowerCase()) ||
            appointment.doctor.toLowerCase().includes(search.toLowerCase());
        const matchesTab =
            activeTab === "all" || appointment.status.toLowerCase() === activeTab;
        return matchesSearch && matchesTab;
    });

    return (
        <div className="p-4 space-y-6">
            <div className="flex items-center justify-between pb-6">
                <h1 className="text-2xl font-semibold text-[#007BFF]">Appointments Management</h1>
                <Button
                    className="bg-[#007BFF] hover:bg-[#5a7ea5] cursor-pointer"
                    onClick={() => setOpenAdd(true)}
                >
                    Add Appointment
                </Button>
            </div>

            <Card className="p-4 shadow-md">
                <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            className="pl-10"
                            placeholder="Search by patient, doctor"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <Tabs defaultValue="all" value={activeTab} onValueChange={(value) => setActiveTab(value)}>
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
                            <TabsTrigger value="completed">Completed</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>

                <Table
                    columns={columns}
                    dataSource={filteredAppointments}
                    pagination={{ pageSize: 5 }}
                />
            </Card>

            {/* Add Appointment Modal */}
            <Modal
                title="Add Appointment"
                open={openAdd}
                centered
                onCancel={() => setOpenAdd(false)}
                onOk={() => form.submit()}
                okText="Submit"
                cancelText="Cancel"
                width={600}
            >
                <Form layout="vertical" form={form} onFinish={handleAdd}>
                    <Form.Item label="Patient Name" name="patient" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Doctor Name" name="doctor" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Date" name="date" rules={[{ required: true }]}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="Time" name="time" rules={[{ required: true }]}>
                        <TimePicker format="hh:mm A" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="Mode" name="mode" rules={[{ required: true }]}>
                        <Select options={[{ value: "Offline" }, { value: "Online" }]} />
                    </Form.Item>
                    <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                        <Select options={[{ value: "Scheduled" }, { value: "Completed" }, { value: "Cancelled" }]} />
                    </Form.Item>
                    <Form.Item label="Reason" name="reason">
                        <Input.TextArea rows={2} />
                    </Form.Item>
                </Form>
            </Modal>

            {/* View Modal */}
            <Modal
                title="Appointment Details"
                open={openView}
                centered
                footer={null}
                onCancel={() => setOpenView(false)}
            >
                {selectedAppointment && (
                    <div className="space-y-2">
                        <p><b>Patient:</b> {selectedAppointment.patient}</p>
                        <p><b>Doctor:</b> {selectedAppointment.doctor}</p>
                        <p><b>Date:</b> {selectedAppointment.date}</p>
                        <p><b>Time:</b> {selectedAppointment.time}</p>
                        <p><b>Mode:</b> {selectedAppointment.mode}</p>
                        <p><b>Status:</b> {selectedAppointment.status}</p>
                        <p><b>Reason:</b> {selectedAppointment.reason}</p>
                    </div>
                )}
            </Modal>

            {/* Edit Appointment Modal */}
            <Modal
                title="Edit Appointment"
                open={openEdit}
                centered
                onCancel={() => setOpenEdit(false)}
                onOk={() => editForm.submit()}
                okText="Update"
                cancelText="Cancel"
                width={600}
            >
                <Form layout="vertical" form={editForm} onFinish={handleEdit}>
                    <Form.Item label="Patient Name" name="patient" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Doctor Name" name="doctor" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Date" name="date" rules={[{ required: true }]}>
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="Time" name="time" rules={[{ required: true }]}>
                        <TimePicker format="hh:mm A" style={{ width: "100%" }} />
                    </Form.Item>
                    <Form.Item label="Mode" name="mode" rules={[{ required: true }]}>
                        <Select options={[{ value: "Offline" }, { value: "Online" }]} />
                    </Form.Item>
                    <Form.Item label="Status" name="status" rules={[{ required: true }]}>
                        <Select options={[{ value: "Scheduled" }, { value: "Completed" }, { value: "Cancelled" }]} />
                    </Form.Item>
                    <Form.Item label="Reason" name="reason">
                        <Input.TextArea rows={2} />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
