import React from "react";
import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import { Edit, Phone, Mail, Wallet } from "lucide-react";
import ProfilePercentage from "./ProfilePercentage";
const profileImage = "../../src/assets/profileImage.png";

export default function ProfileDetails() {
  const StyledCard = styled(Card)`
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
  `;
  return (
    <Box sx={{ p: 3 }}>
      <StyledCard>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
            }}
          >
            <Box sx={{ display: "flex", gap: "30px", alignItems: "center" }}>
              <Box
                sx={{
                  height: "200px",
                  width: "200px",
                  borderRadius: "50%",
                  padding: "5px",
                  boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)",
                }}
              >
                <img
                  src={profileImage}
                  alt="profile"
                  style={{
                    height: "200px",
                    width: "200px",
                    borderRadius: "50%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: "fit-content",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "7px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      color: "#030303",
                    }}
                  >
                    <span style={{ color: "#64748b" }}>John Doe</span>
                    <Edit style={{ width: "20px", height: "20px" }} />
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#2E90FA",
                      backgroundColor: "#E6F7FF",
                      padding: "5px 10px",
                      borderRadius: "5px",
                      width: "fit-content",
                      border: "1px solid #2E90FA",
                    }}
                  >
                    Full Stack Developer
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Phone style={{ width: "20px", height: "20px" }} />
                    +91 9876543210
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Mail style={{ width: "20px", height: "20px" }} />
                    john.doe@example.com
                  </Typography>
                  {/* wallet balance */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#64748b",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Wallet style={{ width: "20px", height: "20px" }} />
                    $45/hr
                  </Typography>
                </Box>
              </Box>
            </Box>
            {/* Chart 70% */}
            <Box sx={{ width: "fit-content" }}>
              <ProfilePercentage />
            </Box>
          </Box>
        </CardContent>
      </StyledCard>
    </Box>
  );
}
