"use client";

import React from "react";
import { SearchInput } from "../SearchInput";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { OrderDetail } from "./OrderDetail";

const user = [
  { title: "asdad" },
  { title: "asdad" },
  { title: "asdad" },
  { title: "asdad" },
];

export const AdminDashboard = () => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #ECEDF0",
        width: "1024px",
        marginTop: "20px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 24px 20px 20px",
        }}
      >
        <p style={{ fontSize: "20px", fontWeight: 700 }}>Admin Dashboard</p>

        {/* Search heseg dutuu  */}
        <Stack sx={{ width: 360 }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={user.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: <Search />,
                  type: "search",
                }}
                placeholder="Хайх..."
              />
            )}
          />
        </Stack>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F7F7F8",
          fontSize: "12px",
          fontWeight: 600,
          lineHeight: "16px",
          padding: " 12px 12px 12px 12px",
          textAlign: "start",
          borderBottom: "1px solid #D6D8DB ",
        }}
      >
        <p style={{ width: "230px" }}>Order name</p>
        <p style={{ width: "140px" }}>Buyer info</p>
        <p style={{ width: "230px" }}>Payment</p>
        <p style={{ width: "230px" }}>Address</p>
        <p style={{ width: "130px" }}>Delivery state</p>
        <p></p>
      </div>
      <div>
        <OrderDetail />
      </div>
    </div>
  );
};
