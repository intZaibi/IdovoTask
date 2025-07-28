import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TabsComponent from "../../components/Page2/TabsBar";
import RightColumn from "../../components/Page2/RightColumn";
import LeftColumn from "../../components/Page2/LeftColumn";
import { sidebarItems } from "../../components/Page2/data";
import { useState } from "react";

const MainContent = styled(Box)`
  min-height: 100vh;
  background-color: #f8fafc;
`;

const Dashboard = () => {
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
      <MainContent sx={{ width: "100%", marginLeft: {md: "280px", sm: "0px"} }}>
        <Header title="Dashboard" isOpen={isOpen} setIsOpen={setIsOpen} />
        <TabsComponent />

        <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            <LeftColumn />
            <RightColumn />
          </Grid>
        </Box>
      </MainContent>
    </Box>
  );
};

export default Dashboard;
