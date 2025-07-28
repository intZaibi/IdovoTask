import {
  Box,
  styled,
  Typography,
} from "@mui/material";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { sidebarItems } from "../../components/Page2/data";
import RevenueReport from "../../components/Page1/RevenueReport";
import SalaryStatement from "../../components/Page1/SalaryStatement";
import ProfileDetails from "../../components/Page1/ProfileDetails";
import QuickReportCard from "../../components/Page1/QuickReportCard";
import { useState } from "react";

const MainContent = styled(Box)`
  min-height: 100vh;
  background-color: #f8fafc;
`;

export default function Page1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Box
        sx={{
          display: {
            xs: isOpen ? "block" : "none",
            md: "block"
          }
        }}
      >
        <Sidebar setIsOpen={setIsOpen} sidebarItems={sidebarItems} />
      </Box>

      {/* Main Content */}
      <MainContent sx={{ width: "100vw", marginLeft: {xs: "0px", md: "280px"} }}>
        <Header title="Idevo Solution’s Workspace" isOpen={isOpen} setIsOpen={setIsOpen} />
        <Typography
          variant="h1"
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#1e293b",
            margin: "0 30px",
          }}
        >
          My Profile
        </Typography>

        <ProfileDetails />

        <QuickReportCard />

        {/* Salary Statements */}
        <SalaryStatement />

        {/* Revenue report */}
        <Box sx={{ p: 3 }}>
          <RevenueReport />
        </Box>
                      
      </MainContent>
    </Box>
  );
}
