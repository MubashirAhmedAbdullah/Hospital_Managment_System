"use client"

import { useState } from "react"
import { Modal, Table, Form, Input, Select, message } from "antd"
import { Card } from "@/Components/ui/card"
import { Button } from "@/Components/ui/button"

const initialDoctors = [
    {
        key: "1",
        id: "D001",
        name: "Dr. John Smith",
        specialization: "Cardiology",
        phone: "123-456-7890",
        gender: "Male",
        email: "john.smith@example.com",
        qualification: "MBBS, MD",
        experience: "10",
        address: "123 Main Street, NY",
        registrationNumber: "REG12345",
        department: "Cardiology",
    },
    {
        key: "2",
        id: "D002",
        name: "Dr. Emily Johnson",
        specialization: "Neurology",
        phone: "555-789-1234",
        gender: "Female",
        email: "emily.johnson@example.com",
        qualification: "MBBS, DM (Neuro)",
        experience: "8",
        address: "456 Maple Ave, LA",
        registrationNumber: "REG56789",
        department: "Neurology",
    },
    {
        key: "3",
        id: "D003",
        name: "Dr. Arjun Mehta",
        specialization: "Orthopedics",
        phone: "987-654-3210",
        gender: "Male",
        email: "arjun.mehta@example.com",
        qualification: "MBBS, MS (Ortho)",
        experience: "12",
        address: "789 Oak Road, Chicago",
        registrationNumber: "REG98765",
        department: "Orthopedics",
    },
]

export default function DoctorsManagement() {
    const [doctors, setDoctors] = useState(initialDoctors)
    const [search, setSearch] = useState("")
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [isViewModalOpen, setIsViewModalOpen] = useState(false)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [selectedDoctor, setSelectedDoctor] = useState(null)

    const [form] = Form.useForm()
    const [editForm] = Form.useForm()

    const handleAddDoctor = (values) => {
        const newDoctor = {
            key: Date.now().toString(),
            id: `D${Date.now()}`,
            ...values,
        }
        setDoctors([...doctors, newDoctor])
        message.success("Doctor added successfully")
        setIsAddModalOpen(false)
        form.resetFields()
    }

    const handleEditDoctor = (values) => {
        const updatedDoctors = doctors.map(doc =>
            doc.key === selectedDoctor.key ? { ...doc, ...values } : doc
        )
        setDoctors(updatedDoctors)
        message.success("Doctor updated successfully")
        setIsEditModalOpen(false)
    }

    const handleDeleteDoctor = (key) => {
        setDoctors(doctors.filter(doc => doc.key !== key))
        message.success("Doctor removed successfully")
    }

    const columns = [
        {
            title: "Doctor ID",
            dataIndex: "id",
        },
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Specialization",
            dataIndex: "specialization",
        },
        {
            title: "Qualification",
            dataIndex: "qualification",
        },
        {
            title: "Experience (Years)",
            dataIndex: "experience",
        },
        {
            title: "Phone",
            dataIndex: "phone",
        },
        {
            title: "Department",
            dataIndex: "department",
        },
        {
            title: "Actions",
            render: (_, record) => (
                <div className="flex gap-2">
                    <Button
                        size="sm"
                        className="bg-[#007BFF] text-white hover:bg-[#0056b3] cursor-pointer"
                        onClick={() => { setSelectedDoctor(record); setIsViewModalOpen(true) }}
                    >
                        View
                    </Button>
                    <Button
                        size="sm"
                        className=" text-[#fff] bg-[#007BFF] hover:bg-[#007BFF] cursor-pointer"
                        onClick={() => { setSelectedDoctor(record); editForm.setFieldsValue(record); setIsEditModalOpen(true) }}
                    >
                        Edit
                    </Button>
                    <Button
                    className="cursor-pointer" 
                    variant="destructive"
                    size="sm" onClick={() => handleDeleteDoctor(record.key)}>
                        Remove
                    </Button>
                </div>
            )
        }
    ]

    const filteredDoctors = doctors.filter(doc =>
        doc.name.toLowerCase().includes(search.toLowerCase()) ||
        doc.specialization.toLowerCase().includes(search.toLowerCase()) ||
        doc.phone.includes(search)
    )

    return (
        <div className="p-4">
            <div className="flex justify-between items-center pb-6">
                <h2 className="text-2xl font-semibold text-blue-600">Doctors Management</h2>
                <Button
                    className="text-[#fff] bg-[#007BFF] hover:bg-[#007BFF] cursor-pointer"
                    onClick={() => setIsAddModalOpen(true)}
                >
                    Add Doctor
                </Button>
            </div>

            <Card className="p-4">
                <Input.Search
                    placeholder="Search by name, specialization, or phone"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    style={{ marginBottom: 16 }}
                />

                <Table
                    columns={columns}
                    dataSource={filteredDoctors}
                    pagination={{ pageSize: 5 }}
                    bordered
                />
            </Card>

            {/* Add Doctor Modal */}
            <Modal
                title="Add New Doctor"
                open={isAddModalOpen}
                onCancel={() => setIsAddModalOpen(false)}
                onOk={() => form.submit()}
                okText="Add"
                okButtonProps={{ className: "bg-[#007BFF] text-[#fff]" }}
            >
                <Form form={form} layout="vertical" onFinish={handleAddDoctor}>
                    <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                        <Select options={[{ value: "Male" }, { value: "Female" }, { value: "Other" }]} />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Qualification" name="qualification">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Experience (years)" name="experience">
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input.TextArea rows={2} />
                    </Form.Item>
                    <Form.Item label="Registration Number" name="registrationNumber">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Department" name="department">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>

            {/* View Doctor Modal */}
            <Modal
                title="Doctor Details"
                open={isViewModalOpen}
                onCancel={() => setIsViewModalOpen(false)}
                footer={null}
            >
                {selectedDoctor && (
                    <div className="space-y-2">
                        <p><strong>Name:</strong> {selectedDoctor.name}</p>
                        <p><strong>Specialization:</strong> {selectedDoctor.specialization}</p>
                        <p><strong>Phone:</strong> {selectedDoctor.phone}</p>
                        <p><strong>Gender:</strong> {selectedDoctor.gender}</p>
                        <p><strong>Email:</strong> {selectedDoctor.email}</p>
                        <p><strong>Qualification:</strong> {selectedDoctor.qualification}</p>
                        <p><strong>Experience:</strong> {selectedDoctor.experience} years</p>
                        <p><strong>Address:</strong> {selectedDoctor.address}</p>
                        <p><strong>Registration No:</strong> {selectedDoctor.registrationNumber}</p>
                        <p><strong>Department:</strong> {selectedDoctor.department}</p>
                    </div>
                )}
            </Modal>

            {/* Edit Doctor Modal */}
            <Modal
                title="Edit Doctor"
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                onOk={() => editForm.submit()}
                okText="Update"
                okButtonProps={{ className: "bg-[#007BFF] text-[#fff]" }}
            >
                <Form form={editForm} layout="vertical" onFinish={handleEditDoctor}>
                    <Form.Item label="Full Name" name="name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Gender" name="gender" rules={[{ required: true }]}>
                        <Select options={[{ value: "Male" }, { value: "Female" }, { value: "Other" }]} />
                    </Form.Item>
                    <Form.Item label="Email" name="email">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Qualification" name="qualification">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Experience (years)" name="experience">
                        <Input type="number" />
                    </Form.Item>
                    <Form.Item label="Address" name="address">
                        <Input.TextArea rows={2} />
                    </Form.Item>
                    <Form.Item label="Registration Number" name="registrationNumber">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Department" name="department">
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
