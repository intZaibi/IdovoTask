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

const MainContent = styled(Box)`
  margin-left: 280px;
  min-height: 100vh;
  background-color: #f8fafc;
`;

export default function Page1() {
  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Sidebar sidebarItems={sidebarItems} />

      {/* Main Content */}
      <MainContent sx={{ width: "100%" }}>
        <Header title="Idevo Solution’s Workspace" />
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
