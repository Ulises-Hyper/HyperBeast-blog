import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import DashboardMain from "../components/dashboard/DashboardMain";

function DashboardPage({ user }) {
  return (
    <DashboardLayout user={user}>
      <DashboardMain />
    </DashboardLayout>
  );
}

export default DashboardPage;