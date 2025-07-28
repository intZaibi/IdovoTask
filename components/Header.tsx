import { Box, ListItemIcon, Paper, styled, Typography } from "@mui/material";
import { Notifications, Message } from "@mui/icons-material";

export default function Header({ title }: { title: string }) {
  const HeaderContainer = styled(Paper)`
    padding: 24px;
    margin-bottom: 24px;
    border-radius: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  `;

  return (
    <HeaderContainer elevation={0}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 600, color: "#1a1a1a" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, backgroundColor: "#F2F4F8", borderRadius: "12px", padding: "5px 5px"}}>
          <ListItemIcon sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
            <Notifications sx={{ fontSize: "20px" }} />
            <Message sx={{ fontSize: "20px" }}/>
          </ListItemIcon>
        </Box>
      </Box>
    </HeaderContainer>
  );
}
