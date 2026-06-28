import React from "react";
import { Link } from "react-router-dom";
import "../styles/admin.css";

function AdminLayout({ children }) {

  return (
    <div className="admin-container">

      <div className="admin-sidebar">

        <h2>Admin Panel</h2>

        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/doctors">Doctors</Link>
        <Link to="/admin/appointments">Appointments</Link>
        <Link to="/admin/contact">Contact</Link>

      </div>

      <div className="admin-content">
        {children}
      </div>

    </div>
  );
}

export default AdminLayout;