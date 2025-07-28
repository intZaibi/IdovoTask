import { Box, Button, CardContent, Typography, Stack, Card, styled } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { revenueData, projectData } from "./data";

export default function Charts() {

  const ChartContainer = styled(Card)`
  margin-bottom: 24px;
  .MuiCardContent-root {
    padding: 24px;
  }
`;

  return (
    <>
      {/* Revenue Chart */}
      <ChartContainer>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Revenue report
            </Typography>
            <Button
              variant="text"
              size="small"
              sx={{
                textTransform: "none",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                color: "#222222",
                "&:hover": {
                  border: "2px solid #E0E0E0",
                  backgroundColor: "#ffffff",
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                View
              </Typography>
            </Button>
          </Box>

          <Stack direction="row" spacing={3} sx={{ mb: 3 }}>
            {["12 months", "3 months", "30 days", "7 days", "24 hours"].map(
              (period) => (
                <Typography key={period} variant="body2" color="text.secondary">
                  {period}
                </Typography>
              )
            )}
          </Stack>

          <Box sx={{ height: 300 }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <XAxis dataKey="month" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#14B8A6"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </CardContent>
      </ChartContainer>

      {/* Projects Chart */}
      <ChartContainer>
        <CardContent>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Projects report
            </Typography>
            <Button
              variant="text"
              size="small"
              sx={{
                textTransform: "none",
                border: "1px solid #E0E0E0",
                borderRadius: "8px",
                color: "#222222",
                "&:hover": {
                  border: "2px solid #E0E0E0",
                  backgroundColor: "#ffffff",
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                View
              </Typography>
            </Button>
          </Box>

          {/* Pie Chart */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ position: "relative", width: 200, height: 200 }}>
              <Box sx={{ width: "100%", height: "100%", transform: "rotate(270deg)" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={projectData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={100}
                      dataKey="value"
                    >
                      {projectData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h4" sx={{ fontWeight: 700 }}>
                  138
                </Typography>
              </Box>
            </Box>

            <Stack spacing={2}>
              {projectData.map((item, index) => (
                <Box
                  key={index}
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Box
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      backgroundColor: item.color,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item.name}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </CardContent>
      </ChartContainer>
    </>
  );
}
