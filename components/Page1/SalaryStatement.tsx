import { Box, Card, CardContent, styled, Typography } from "@mui/material";
import { Calendar, Check, DownloadIcon, Eye, FileText } from "lucide-react";
import { Button } from "@mui/material";

export default function SalaryStatement() {
  const StyledCard = styled(Card)`
    height: 100%;
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    }
  `;

  const salaryStatements = [
    {
      month: "January",
      date: "2025-01-01",
      amount: "$1000",
      status: "Paid",
    },
    {
      month: "February",
      date: "2025-02-01",
      amount: "$1000",
      status: "Paid",
    },
    {
      month: "March",
      date: "2025-03-01",
      amount: "$1000",
      status: "Paid",
    },
    {
      month: "April",
      date: "2025-04-01",
      amount: "$1000",
      status: "Paid",
    },
  ];
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ width: "100%" }}>
        <StyledCard>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "8px",
                padding: "0 10px",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <FileText style={{ width: "30px", height: "30px" }} />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    color: "#030303",
                    fontSize: "30px",
                  }}
                >
                  Salary Statements
                </Typography>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "8px",
                  padding: "0 10px",
                }}
              >
                {salaryStatements.map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "20px",
                      padding: "0 10px",
                      border: "1px solid #E2E8F0",
                      borderRadius: "10px",
                      width: "100%",
                    }}
                  >
                    {/* left side */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Calendar
                        style={{
                          width: "30px",
                          height: "30px",
                          border: "2px solid #E2E8F0",
                          borderRadius: "10px",
                          padding: "5px",
                          strokeWidth: 1.5,
                        }}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "semibold",
                            color: "#030303",
                            fontSize: "16px",
                          }}
                        >
                          {item.month}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{ color: "#030303", fontSize: "12px" }}
                        >
                          Paid on {item.date}
                        </Typography>
                      </Box>
                    </Box>
                    {/* right side */}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "5px",
                            margin: "4px 15px 4px 0",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{ color: "#030303", fontSize: "16px" }}
                          >
                            {item.amount}
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{
                              color: "#030303",
                              fontSize: "12px",
                              textAlign: "right",
                            }}
                          >
                            Net Pay
                          </Typography>
                        </Box>
                        <Typography
                          variant="h5"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                            color: "#067647",
                            fontSize: "12px",
                            backgroundColor: "#ABEFC6",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            border: "1px solid #2E90FA",
                          }}
                        >
                          <Check
                            style={{
                              color: "#2E90FA",
                              width: "16px",
                              height: "16px",
                            }}
                          />{" "}
                          {item.status}
                        </Typography>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#030303",
                            border: "2px solid #E2E8F0",
                            padding: "5px 10px",
                            borderRadius: "10px",
                            width: "fit-content",
                            "&:hover": {
                              border: "1px solid #E2E8F0",
                              backgroundColor: "#E2E8F0",
                            },
                          }}
                        >
                          <Eye style={{ width: "20px", height: "20px" }} />{" "}
                          <span style={{ marginLeft: "5px" }}>View</span>
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            color: "#030303",
                            border: "2px solid #E2E8F0",
                            padding: "5px 10px",
                            borderRadius: "10px",
                            width: "fit-content",
                            "&:hover": {
                              border: "1px solid #E2E8F0",
                              backgroundColor: "#E2E8F0",
                            },
                          }}
                        >
                          <DownloadIcon
                            style={{ width: "20px", height: "20px" }}
                          />{" "}
                          <span style={{ marginLeft: "5px" }}>Download</span>
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </CardContent>
        </StyledCard>
      </Box>
    </Box>
  );
}
