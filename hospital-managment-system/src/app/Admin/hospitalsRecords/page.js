"use client";

import { useState } from "react";
import { Table, Modal, Form, Input, Popconfirm } from "antd";
import { EyeOutlined, EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "@/Components/ui/button";

export default function HospitalsPage() {
  const [hospitals, setHospitals] = useState([
    {
      id: 1,
      name: "Sunrise Multispecialty Hospital",
      registrationNumber: "REG-2025-001",
      contact: "info@sunrisehospital.com",
      phone: "+1 234 567 890",
      address: "123 Health Street, New York, NY",
      type: "Private",
      established: "2005",
      totalBeds: 150,
      icuBeds: 20,
    },
    {
      id: 2,
      name: "Green Valley Health Center",
      registrationNumber: "REG-2025-002",
      contact: "contact@greenvalleyhealth.com",
      phone: "+1 987 654 321",
      address: "456 Care Avenue, Los Angeles, CA",
      type: "Public",
      established: "2010",
      totalBeds: 300,
      icuBeds: 50,
    },
  ]);

  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);
  const [form] = Form.useForm();
  const [addForm] = Form.useForm();

  const openViewModal = (record) => {
    setSelectedHospital(record);
    setViewModalOpen(true);
  };

  const openEditModal = (record) => {
    setSelectedHospital(record);
    form.setFieldsValue(record);
    setEditModalOpen(true);
  };

  const handleEditSave = (values) => {
    setHospitals((prev) =>
      prev.map((hospital) =>
        hospital.id === selectedHospital.id ? { ...hospital, ...values } : hospital
      )
    );
    setEditModalOpen(false);
  };

  const handleDelete = (id) => {
    setHospitals((prev) => prev.filter((hospital) => hospital.id !== id));
  };

  const handleAddHospital = (values) => {
    const newHospital = {
      ...values,
      id: Date.now(), // generate unique id
    };
    setHospitals((prev) => [...prev, newHospital]);
    setAddModalOpen(false);
    addForm.resetFields();
  };

  const columns = [
    {
      title: "Hospital Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Registration No",
      dataIndex: "registrationNumber",
      key: "registrationNumber",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Total Beds",
      dataIndex: "totalBeds",
      key: "totalBeds",
    },
    {
      title: "ICU Beds",
      dataIndex: "icuBeds",
      key: "icuBeds",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-[#007BFF] text-white hover:bg-[#0056b3] cursor-pointer"
            onClick={() => openViewModal(record)}
          >
            View
          </Button>
          <Button
            size="sm"
            className="text-white bg-[#007BFF] hover:bg-[#0056b3] cursor-pointer"
            onClick={() => openEditModal(record)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this hospital?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button variant="destructive" size="sm" className="cursor-pointer">
              Remove
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-8 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#007BFF]">Manage Hospitals</h1>
        <Button
          className="bg-[#007BFF] hover:bg-[#0056b3]"
          onClick={() => setAddModalOpen(true)}
        >
          <PlusOutlined /> Add Hospital
        </Button>
      </div>

      <Table
        columns={columns}
        dataSource={hospitals}
        rowKey="id"
        bordered
        pagination={{ pageSize: 5 }}
      />

      {/* View Hospital Modal */}
      <Modal
        open={viewModalOpen}
        title="Hospital Details"
        footer={null}
        onCancel={() => setViewModalOpen(false)}
      >
        {selectedHospital && (
          <div className="space-y-2">
            <p><b>Name:</b> {selectedHospital.name}</p>
            <p><b>Registration Number:</b> {selectedHospital.registrationNumber}</p>
            <p><b>Contact Email:</b> {selectedHospital.contact}</p>
            <p><b>Phone:</b> {selectedHospital.phone}</p>
            <p><b>Address:</b> {selectedHospital.address}</p>
            <p><b>Type:</b> {selectedHospital.type}</p>
            <p><b>Established:</b> {selectedHospital.established}</p>
            <p><b>Total Beds:</b> {selectedHospital.totalBeds}</p>
            <p><b>ICU Beds:</b> {selectedHospital.icuBeds}</p>
          </div>
        )}
      </Modal>

      {/* Edit Hospital Modal */}
      <Modal
        open={editModalOpen}
        title="Edit Hospital"
        onCancel={() => setEditModalOpen(false)}
        onOk={() => form.submit()}
        okText="Save Changes"
      >
        <Form layout="vertical" form={form} onFinish={handleEditSave}>
          <Form.Item label="Hospital Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Registration Number" name="registrationNumber" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Contact Email" name="contact" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Established Year" name="established" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Total Beds" name="totalBeds" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="ICU Beds" name="icuBeds" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      {/* Add Hospital Modal */}
      <Modal
        open={addModalOpen}
        title="Add New Hospital"
        onCancel={() => setAddModalOpen(false)}
        onOk={() => addForm.submit()}
        okText="Add Hospital"
      >
        <Form layout="vertical" form={addForm} onFinish={handleAddHospital}>
          <Form.Item label="Hospital Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Registration Number" name="registrationNumber" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Contact Email" name="contact" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Phone" name="phone" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Address" name="address" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Type" name="type" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Established Year" name="established" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Total Beds" name="totalBeds" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="ICU Beds" name="icuBeds" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
