import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import styled from '@emotion/styled'

export default function Sidebar({sidebarItems}: any) {
    const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 280px;
    border-right: 1px solid #e0e0e0;
    background-color: #ffffff;
  }
`;

  const LogoContainer = styled(Box)`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 40%;
    margin: 0 auto;
  `;

  return (
    <>
    <StyledDrawer variant="permanent">
    <LogoContainer>
      <img style={{width: "100%"}} src="/logo.png" alt="logo" />
    </LogoContainer>

    <List sx={{ px: 2 }}>
      {sidebarItems.map((item: any, index: any) => (
        <ListItem
          key={index}
          sx={{
            mb: 1,
            borderRadius: 2,
            backgroundColor: item.active ? "#e0f2f1" : "transparent",
            color: item.active ? "#14b8a6" : "#666666",
            "&:hover": {
              backgroundColor: item.active ? "#e0f2f1" : "#f5f5f5",
            },
          }}
        >
          <ListItemIcon sx={{ color: "inherit", minWidth: 40 }}>
            <img src={item.icon} alt="icon" />
          </ListItemIcon>
          <ListItemText
            primary={item.label}
            primaryTypographyProps={{
              fontSize: "14px",
              fontWeight: item.active ? 600 : 400,
            }}
          />
        </ListItem>
      ))}
    </List>
  </StyledDrawer>
  </>
  )
}
