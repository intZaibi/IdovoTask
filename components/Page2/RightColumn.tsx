import {
  Box,
  Card,
  Typography,
  Grid,
  IconButton,
  CardContent,
  Button,
  styled,
} from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import { payments, proposals } from "./data";
import { ListItemIcon } from "@mui/material";

export default function RightColumn() {

  const getStatusColor = (status: string) => {
    switch (status) {
      case "overdue":
        return "#f44336";
      case "pending":
        return "#ff9800";
      case "paid":
        return "#4caf50";
      default:
        return "#757575";
    }
  };

  const ProposalItem = styled(Box)`
  display: flex;
  align-items: center;
  padding: 12px 0;
  gap: 12px;
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;

const PaymentItem = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px 0;
  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }
`;
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      {/* Proposals */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Proposals
            </Typography>
            <IconButton size="small">
              <MoreVert fontSize="small" />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {proposals.map((proposal, index) => (
              <ProposalItem key={index}>
                <ListItemIcon>
                  <img src={proposal.icon} alt="file-icon" />
                </ListItemIcon>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {proposal.title}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {proposal.size}
                  </Typography>
                </Box>
              </ProposalItem>
            ))}
            <Button
              variant="text"
              size="small"
              sx={{
                textTransform: "none",
                color: "#14b8a6",
                marginLeft: "auto",
                marginTop: "10px",
              }}
            >
              Show more
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Project Payments */}
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Project Payments
            </Typography>
          </Box>

          <Box>
            {payments.map((payment, index) => (
              <PaymentItem key={index}>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="body2" sx={{ fontWeight: 500, mb: 0.5 }}>
                    {payment.project}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {payment.client}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 600,
                    color: getStatusColor(payment.status),
                  }}
                >
                  {payment.amount}
                </Typography>
              </PaymentItem>
            ))}
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
