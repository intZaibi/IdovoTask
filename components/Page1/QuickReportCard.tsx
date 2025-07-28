import { Box, Card, CardContent, ListItemIcon, styled, Typography, Grid } from "@mui/material";
import { Folder, TrendingUp } from "lucide-react";

export default function QuickReportCard() {
  const StyledCard = styled(Card)`
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
  `;

  const data = [
    {
      title: "Current Salary",
      amount: "$2,000",
      unit: "Per month",
    },
    {
      title: "YTD Earnings",
      amount: "$45,000",
      unit: " 8% vs last month",
      icon: <TrendingUp style={{ color: "#4caf50" }} />,
    },
    {
      title: "Total Deduction",
      amount: "$2,000",
      unit: "Per month",
    },
  ];
  return (
    <Box sx={{ p: 3 }}>
          <Grid container spacing={3}>
            {data.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <StyledCard>
                  <CardContent>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#030303" }}>
                        {item.title}
                      </Typography>
                      <ListItemIcon sx={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "7px 0", border: "1px solid #E2E8F0", borderRadius: "10px"}}>
                        <Folder style={{ width: "20px", height: "20px" }}/>
                      </ListItemIcon>
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#030303" }}>
                        {item.amount}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#64748b", display: "flex", alignItems: "center", gap: "5px" }}>
                        {item?.icon} {item.unit}
                      </Typography>
                    </Box>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
  )
}
