import { AdminDashboard } from "@/components/admin/AdminDashboard";

const admin = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#F7F7F8",
      }}
    >
      <AdminDashboard />
    </div>
  );
};

export default admin;
