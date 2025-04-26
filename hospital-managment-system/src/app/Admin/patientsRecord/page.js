"use client";

import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { Input as AntInput, Modal, Table, Form, Select, DatePicker } from "antd";
import { Card } from "@/Components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Search } from "lucide-react";
import { useState } from "react";

export default function PatientsForAdminPanel() {
  // --- State & Form Instances ---
  const [patients, setPatients] = useState([
    { key: "1", id: "P001", name: "John Doe", age: 32, gender: "Male", phone: "123-456-7890", status: "Admitted", lastVisit: "2025-04-20", doctor: "Dr. Smith" },
    { key: "2", id: "P002", name: "Jane Smith", age: 28, gender: "Female", phone: "987-654-3210", status: "Outpatient", lastVisit: "2025-04-18", doctor: "Dr. Patel" },
  ]);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("all");

  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewEditModalOpen, setViewEditModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("view"); // "view" or "edit"
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [addForm] = Form.useForm();
  const [editForm] = Form.useForm();

  // --- Handlers ---
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
    addForm.resetFields();
    setAddModalOpen(false);
  };

  const handleUpdatePatient = (values) => {
    setPatients(prev => prev.map(p =>
      p.key === selectedPatient.key
        ? {
            ...p,
            name: values.fullName,
            age: values.age,
            gender: values.gender,
            phone: values.phoneNumber,
            status: values.patientType,
            doctor: values.primaryDoctor,
          }
        : p
    ));
    setViewEditModalOpen(false);
  };

  // --- Table Columns ---
  const columns = [
    { title: "Patient ID", dataIndex: "id", key: "id" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Age", dataIndex: "age", key: "age" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "Phone", dataIndex: "phone", key: "phone" },
    { title: "Status", dataIndex: "status", key: "status" },
    { title: "Last Visit", dataIndex: "lastVisit", key: "lastVisit" },
    { title: "Doctor", dataIndex: "doctor", key: "doctor" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <div className="flex gap-2">
          <Button
            size="sm"
            className="bg-[#007BFF] text-white hover:bg-[#0056b3]"
            onClick={() => {
              setSelectedPatient(record);
              setModalMode("view");
              setViewEditModalOpen(true);
            }}
          >
            View
          </Button>

          <Button
            size="sm"
            className="bg-[#007BFF] text-white hover:bg-[#0056b3]"
            onClick={() => {
              setSelectedPatient(record);
              setModalMode("edit");
              setViewEditModalOpen(true);
            }}
          >
            Edit
          </Button>

          <Button
            size="sm"
            variant="destructive"
            onClick={() => {
              setPatients(prev => prev.filter(p => p.key !== record.key));
            }}
          >
            Discharge
          </Button>
        </div>
      ),
    },
  ];

  // --- Filtering ---
  const filteredPatients = patients.filter(p => {
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
    <div className="p-2 space-y-6">
      {/* Header & Add Button */}
      <div className="flex items-center justify-between pb-10">
        <h1 className="text-2xl font-semibold text-[#007BFF]">Patients Management</h1>
        <Button
          type="primary"
          className="bg-[#007BFF] hover:bg-[#5a7ea5]"
          onClick={() => setAddModalOpen(true)}
        >
          Add Patient
        </Button>
      </div>

      {/* Add Patient Modal */}
      <Modal
        title="Add New Patient"
        centered
        open={addModalOpen}
        destroyOnClose
        onCancel={() => { addForm.resetFields(); setAddModalOpen(false); }}
        onOk={() => addForm.submit()}
        width={600}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form layout="vertical" form={addForm} onFinish={handleAddPatient}>
          <Form.Item label="Full Name" name="fullName" rules={[{ required: true }]}> <AntInput /> </Form.Item>
          <Form.Item label="Gender" name="gender" rules={[{ required: true }]}> <Select options={[{ value: 'Male' },{ value: 'Female' },{ value: 'Other' }]} /> </Form.Item>
          <Form.Item label="Age" name="age" rules={[{ required: true }]}> <AntInput type="number" /> </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber" rules={[{ required: true }]}> <AntInput /> </Form.Item>
          <Form.Item label="Patient Type" name="patientType"> <Select options={[{ value: 'Admitted' },{ value: 'Outpatient' }]} /> </Form.Item>
          <Form.Item label="Primary Doctor" name="primaryDoctor"> <AntInput /> </Form.Item>
        </Form>
      </Modal>

      {/* View / Edit Patient Modal */}
      <Modal
        title={modalMode === "view" ? "Patient Details" : "Edit Patient"}
        centered
        open={viewEditModalOpen}
        destroyOnClose
        onCancel={() => setViewEditModalOpen(false)}
        onOk={() => {
          modalMode === 'edit' ? editForm.submit() : setViewEditModalOpen(false);
        }}
        width={600}
        okText={modalMode === "edit" ? "Update" : "Close"}
        cancelText="Cancel"
      >
        <Form
          layout="vertical"
          form={editForm}
          onFinish={handleUpdatePatient}
          initialValues={{
            fullName: selectedPatient?.name,
            age: selectedPatient?.age,
            gender: selectedPatient?.gender,
            phoneNumber: selectedPatient?.phone,
            patientType: selectedPatient?.status,
            primaryDoctor: selectedPatient?.doctor,
          }}
        >
          <Form.Item label="Full Name" name="fullName"> <AntInput disabled={modalMode === 'view'} /> </Form.Item>
          <Form.Item label="Gender" name="gender"> <Select disabled={modalMode === 'view'} options={[{ value: 'Male' },{ value: 'Female' },{ value: 'Other' }]} /> </Form.Item>
          <Form.Item label="Age" name="age"> <AntInput type="number" disabled={modalMode === 'view'} /> </Form.Item>
          <Form.Item label="Phone Number" name="phoneNumber"> <AntInput disabled={modalMode === 'view'} /> </Form.Item>
          <Form.Item label="Patient Type" name="patientType"> <Select disabled={modalMode === 'view'} options={[{ value: 'Admitted' },{ value: 'Outpatient' }]} /> </Form.Item>
          <Form.Item label="Primary Doctor" name="primaryDoctor"> <AntInput disabled={modalMode === 'view'} /> </Form.Item>
        </Form>
      </Modal>

      {/* Search, Tabs & Table */}
      <Card className="p-4 shadow-md">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-full">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              className="pl-10"
              placeholder="Search by name, ID or phone"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <Tabs defaultValue="all" onValueChange={value => setTab(value)}>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="admitted">Admitted</TabsTrigger>
              <TabsTrigger value="outpatient">Outpatient</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Table columns={columns} dataSource={filteredPatients} pagination={{ pageSize: 10 }} />
      </Card>
    </div>
  );
}
