import { Box, Grid } from "@mui/material";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TabsComponent from "../../components/Page2/TabsBar";
import RightColumn from "../../components/Page2/RightColumn";
import LeftColumn from "../../components/Page2/LeftColumn";
import { sidebarItems } from "../../components/Page2/data";

const MainContent = styled(Box)`
  margin-left: 280px;
  min-height: 100vh;
  background-color: #f8fafc;
`;

const Dashboard = () => {

  return (
    <Box sx={{ display: "flex", width: "100vw" }}>
      <Sidebar sidebarItems={sidebarItems} />

      {/* Main Content */}
      <MainContent sx={{ width: "100%" }}>
        <Header title="Dashboard"/>
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
