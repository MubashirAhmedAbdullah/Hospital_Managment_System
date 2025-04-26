"use client";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Input as AntInput, Modal, Table, Form, Select, DatePicker } from "antd";
import { Card } from "@/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Search } from "lucide-react";
import { useState } from "react";

const columns = [
    {
        title: "Patient ID",
        dataIndex: "id",
        key: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
    },
    {
        title: "Phone",
        dataIndex: "phone",
        key: "phone",
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "Last Visit",
        dataIndex: "lastVisit",
        key: "lastVisit",
    },
    {
        title: "Doctor",
        dataIndex: "doctor",
        key: "doctor",
    },
    {
        title: "Actions",
        key: "actions",
        render: (_, record) => (
            <div className="flex gap-2">
                <Button className="bg-[#007BFF] text-[#fff]" variant="outline" size="sm">View</Button>
                <Button className="bg-[#007BFF] text-[#fff]" variant="secondary" size="sm">Edit</Button>
                <Button variant="destructive" size="sm">Discharge</Button>
            </div>
        ),
    },
];

export default function PatientsForAdminPanel() {
    const [patients, setPatients] = useState([
        {
            key: "1",
            id: "P001",
            name: "John Doe",
            age: 32,
            gender: "Male",
            phone: "123-456-7890",
            status: "Admitted",
            lastVisit: "2025-04-20",
            doctor: "Dr. Smith",
        },
        {
            key: "2",
            id: "P001",
            name: "John Doe",
            age: 32,
            gender: "Male",
            phone: "123-456-7890",
            status: "Admitted",
            lastVisit: "2025-04-20",
            doctor: "Dr. Smith",
        },{
            key: "3",
            id: "P001",
            name: "John Doe",
            age: 32,
            gender: "Male",
            phone: "123-456-7890",
            status: "Admitted",
            lastVisit: "2025-04-20",
            doctor: "Dr. Smith",
        },
        {
            key: "4",
            id: "P002",
            name: "Jane Smith",
            age: 28,
            gender: "Female",
            phone: "987-654-3210",
            status: "Outpatient",
            lastVisit: "2025-04-18",
            doctor: "Dr. Patel",
        },
    ]);
    const [search, setSearch] = useState("");
    const [openResponsive, setOpenResponsive] = useState(false);
    const [form] = Form.useForm();
    const [tab, setTab] = useState("all");

    const handleAddPatient = (values) => {
        const newPatient = {
            key: (patients.length + 1).toString(),
            id: `P00${patients.length + 1}`,
            name: values.fullName,
            age: values.age,
            gender: values.gender,
            phone: values.phoneNumber,
            status: values.patientType,
            lastVisit: new Date().toISOString().split('T')[0],
            doctor: values.primaryDoctor,
        };
        setPatients(prev => [...prev, newPatient]);
        setOpenResponsive(false);
        form.resetFields();
    };

    const filteredPatients = patients.filter((p) => {
        const matchesSearch = 
            p.name.toLowerCase().includes(search.toLowerCase()) ||
            p.id.toLowerCase().includes(search.toLowerCase()) ||
            p.phone.includes(search);

        const matchesTab =
            tab === "all" ||
            (tab === "admitted" && p.status.toLowerCase() === "admitted") ||
            (tab === "outpatient" && p.status.toLowerCase() === "outpatient");

        return matchesSearch && matchesTab;
    });

    return (
        <div>
            <div className="p-2 space-y-6">
                <div className="flex items-center justify-between pb-10">
                    <h1 className="text-2xl font-semibold text-[#007BFF]">Patients Management</h1>
                    <Button type="primary" className="bg-[#007BFF] hover:bg-[#5a7ea5] cursor-pointer" onClick={() => setOpenResponsive(true)}>
                        Add Patient
                    </Button>

                    <Modal
                        title="Add New Patient"
                        centered
                        open={openResponsive}
                        onCancel={() => setOpenResponsive(false)}
                        onOk={() => form.submit()}
                        width={600}
                        okText="Submit"
                        cancelText="Cancel"
                    >
                        <Form layout="vertical" form={form} onFinish={handleAddPatient}>
                            <Form.Item label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter the name' }]}>
                                <AntInput />
                            </Form.Item>
                            <Form.Item label="Gender" name="gender" rules={[{ required: true, message: 'Please select gender' }]}>
                                <Select options={[{ value: 'Male' }, { value: 'Female' }, { value: 'Other' }]} />
                            </Form.Item>
                            <Form.Item label="Age" name="age" rules={[{ required: true, message: 'Please enter age' }]}>
                                <AntInput type="number" />
                            </Form.Item>
                            <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true, message: 'Please enter phone number' }]}>
                                <AntInput />
                            </Form.Item>
                            <Form.Item label="Address" name="address">
                                <AntInput.TextArea rows={2} />
                            </Form.Item>
                            <Form.Item label="Patient Type" name="patientType">
                                <Select options={[{ value: 'Admitted' }, { value: 'Outpatient' }]} />
                            </Form.Item>
                            <Form.Item label="Blood Group" name="bloodGroup">
                                <Select options={["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(g => ({ value: g }))} />
                            </Form.Item>
                            <Form.Item label="Primary Doctor" name="primaryDoctor">
                                <AntInput />
                            </Form.Item>
                            <Form.Item label="Known Allergies" name="allergies">
                                <AntInput />
                            </Form.Item>
                            <Form.Item label="Registration Date" name="registrationDate">
                                <DatePicker style={{ width: "100%" }} />
                            </Form.Item>
                        </Form>
                    </Modal>
                </div>

                <Card className="p-4 shadow-md">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-full">
                            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                className="pl-10"
                                placeholder="Search by name, ID or phone"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>
                        <Tabs defaultValue="all" onValueChange={(value) => setTab(value)}>
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="admitted">Admitted</TabsTrigger>
                                <TabsTrigger value="outpatient">Outpatient</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>

                    <Table
                        columns={columns}
                        dataSource={filteredPatients}
                        pagination={{ pageSize: 10 }}
                    />
                </Card>
            </div>
        </div>
    );
}
