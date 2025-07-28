import {
  Grid,
  CardContent,
  Box,
  Typography,
  Card,
  styled,
} from "@mui/material";
import { TrendingUp, TrendingDown } from "@mui/icons-material";
import Charts from "./Charts";

export default function LeftColumn() {
  const StatsCard = styled(Card)`
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
  `;
  return (
    <Grid size={{ xs: 12, lg: 8 }}>
      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <StatsCard>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    This month revenue
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, color: "#1a1a1a" }}
                  >
                    $1,280
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#4caf50",
                  }}
                >
                  <TrendingUp sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    10%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StatsCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <StatsCard>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    This month Project
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, color: "#1a1a1a" }}
                  >
                    14
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#4caf50",
                  }}
                >
                  <TrendingUp sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    15%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StatsCard>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 12 }}>
          <StatsCard>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <Box>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    This month proposal
                  </Typography>
                  <Typography
                    variant="h3"
                    sx={{ fontWeight: 700, color: "#1a1a1a" }}
                  >
                    12
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "#f44336",
                  }}
                >
                  <TrendingDown sx={{ fontSize: 16, mr: 0.5 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    2%
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </StatsCard>
        </Grid>
      </Grid>
      <Charts />
    </Grid>
  );
}
