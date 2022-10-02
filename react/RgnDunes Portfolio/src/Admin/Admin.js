import React from "react";

import "./Admin.css";
import AdminControls from "./AdminControls/AdminControls";
import Login from "./Login/Login";
import { useStateValue } from "../hoc/StateProvider";

const Admin = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="admin">
      <h3>
        {user &&
          user?.email != "singh.divyansh1802@gmail.com" &&
          "You are not the admin."}
      </h3>
      {user?.email == "singh.divyansh1802@gmail.com" ? (
        <AdminControls />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Admin;
