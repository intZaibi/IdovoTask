import styled from "@emotion/styled";
import { CalendarMonth, FilterList } from "@mui/icons-material";
import { Box, Button, Tab, Tabs, Typography } from "@mui/material";
import React from "react";

export default function TabsBar() {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const StyledTabs = styled(Tabs)`
    border: 2px solid #e0e0e0;
    border-radius: 12px;
    background: #ffffff;
    .MuiTabs-indicator {
      background-color: #ffffff;
    }
    .MuiTab-root.Mui-selected {
      background-color: #f9fafb;
    }
    .MuiTabs-root {
      border-bottom: none;
    }
    .MuiTab-root {
      text-transform: none;
      border-right: 2px solid #e0e0e0;
      border-radius: 0px;
      color: #222222;
    }
  `;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px",
        width: "95%",
      }}
    >
      {/* Right */}
      <Box sx={{ width: "fit-content", color: "#222222" }}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
          sx={{
            minHeight: 32,
            height: 32,
            '.MuiTab-root': { minHeight: 32, height: 32, py: 0.5 },
          }}
        >
          <Tab
            value="this-month"
            label={
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  fontSize: "13px",
                  color: "#222222",
                  lineHeight: 1.2,
                }}
              >
                <div
                  style={{
                    height: "8px",
                    width: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#14B8A6",
                  }}
                />
                This month
              </Typography>
            }
            sx={{ minHeight: 32, height: 32, py: 0.5 }}
          />
          <Tab
            value="last-month"
            label="Last month"
            sx={{ minHeight: 32, height: 32, py: 0.5 }}
          />
          <Tab
            sx={{ border: "none", minHeight: 32, height: 32, py: 0.5 }}
            value="custom"
            label={
              <Typography sx={{ fontSize: "13px", color: "#222222", lineHeight: 1.2 }}>
                + Custom
              </Typography>
            }
          />
        </StyledTabs>
      </Box>

      {/* Left */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          width: "fit-content",
          color: "#222222",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1, border: "1px solid #E0E0E0", borderRadius: "8px", padding: "5px 10px", backgroundColor: "#ffffff" }}>
          <CalendarMonth sx={{ fontSize: "16px" }} /> 
          <Typography variant="body2" color="text.secondary" sx={{  fontSize: "14px" }}>
            Jan 3, 2024 - Jan 13, 2024
          </Typography>
        </Box>
        <Button
          variant="outlined"
          startIcon={<FilterList />}
          size="small"
          sx={{
            backgroundColor: "#ffffff",
            textTransform: "none",
            border: "1px solid #E0E0E0",
            borderRadius: "8px",
            color: "#222222",
            "&:hover": {
              border: "2px solid #E0E0E0",
            },
          }}
        >
          Filters
        </Button>
      </Box>
    </Box>
  );
}
