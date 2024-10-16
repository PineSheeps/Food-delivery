import React from "react";

export const OrderDetail = () => {
  const imageStyle = { width: "40px", height: "40px" };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        padding: " 12px 12px 12px 12px",
        textAlign: "start",
      }}
    >
      <div
        style={{
          width: "230px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <img style={imageStyle} src="" alt="" />
        <div>
          <div style={{ fontWeight: 600, fontSize: "14px" }}>#23790</div>
          <div style={{ fontSize: "14px" }}>Breakfast</div>
        </div>
      </div>
      <p style={{ width: "140px" }}>
        <div style={{ fontWeight: 600, fontSize: "14px" }}>99119911</div>
        <div style={{ fontSize: "14px" }}>Boldoo</div>
      </p>
      <p style={{ width: "230px" }}>
        <div style={{ fontWeight: 600, fontSize: "14px" }}>24500₮</div>
        <div style={{ fontSize: "14px" }}>DATE</div>
      </p>
      <p style={{ width: "230px" }}>Address</p>
      <p style={{ width: "130px" }}>Delivery state</p>
      <p></p>
    </div>
  );
};
