import React, { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  styled,
} from '@mui/material';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';

const StyledCard = styled(Card)`
  height: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const TimeFilterButton = styled(Button)<{ active?: boolean }>`
  text-transform: none;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? '#1e293b' : '#64748b'};
  background-color: ${props => props.active ? '#f1f5f9' : 'transparent'};
  border: ${props => props.active ? '1px solid #cbd5e1' : '1px solid transparent'};
  border-radius: 8px;
  padding: 8px 16px;
  min-width: auto;
  &:hover {
    background-color: ${props => props.active ? '#f1f5f9' : '#f8fafc'};
  }
`;

const ViewAllButton = styled(Button)`
  background-color: #14b8a6;
  color: white;
  text-transform: none;
  font-weight: 500;
  border-radius: 8px;
  padding: 8px 16px;
  &:hover {
    background-color: #0d9488;
  }
`;

// Sample data for the chart
const chartData = [
  { month: 'Jan', top: 400, middle: 300, bottom: 100 },
  { month: 'Feb', top: 350, middle: 280, bottom: 120 },
  { month: 'Mar', top: 500, middle: 320, bottom: 150 },
  { month: 'Apr', top: 450, middle: 350, bottom: 180 },
  { month: 'May', top: 600, middle: 400, bottom: 220 },
  { month: 'Jun', top: 550, middle: 380, bottom: 200 },
  { month: 'Jul', top: 800, middle: 450, bottom: 250 },
  { month: 'Aug', top: 700, middle: 420, bottom: 230 },
  { month: 'Sep', top: 650, middle: 480, bottom: 280 },
  { month: 'Oct', top: 750, middle: 520, bottom: 300 },
  { month: 'Nov', top: 800, middle: 540, bottom: 320 },
  { month: 'Dec', top: 900, middle: 550, bottom: 350 },
];

const timeRanges = ['24 hours', '7 days', '30 days', '3 months', '12 months'].reverse();

const RevenueReport: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('12 months');

  return (
    <StyledCard>
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                color: '#1e293b',
                fontSize: '20px',
                mb: 1,
              }}
            >
              Revenue report
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#64748b',
                fontSize: '14px',
              }}
            >
              Track task completion trends and performance over time.
            </Typography>
          </Box>
          <ViewAllButton>
            View All
          </ViewAllButton>
        </Box>

        {/* Time Range Filters */}
        <Box sx={{ display: 'flex', gap: 1, mb: 3, width: '100%', backgroundColor: '#F1F5F9', padding: '5px 10px', borderRadius: '10px' }}>
          {timeRanges.map((range) => (
            <TimeFilterButton
              key={range}
              active={selectedTimeRange === range}
              onClick={() => setSelectedTimeRange(range)}
              size="small"
              sx={{
                backgroundColor: selectedTimeRange === range ? '#ffffff' : 'transparent',
                border: '1px solid #ffffff',
                "&:hover": {
                  border: '1px solid #ffffff',
                } 
              }}
            >
              {range}
            </TimeFilterButton>
          ))}
        </Box>

        {/* Chart */}
        <Box sx={{ height: 400, width: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorMiddle" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorBottom" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#7c3aed" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis 
                dataKey="month" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#64748b' }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                }}
                labelStyle={{ color: '#1e293b', fontWeight: '600' }}
              />
              
              {/* Bottom line area */}
              <Area
                type="monotone"
                dataKey="bottom"
                stroke="#7c3aed"
                strokeWidth={2}
                fill="url(#colorBottom)"
                fillOpacity={0.3}
              />
              
              {/* Middle line area */}
              <Area
                type="monotone"
                dataKey="middle"
                stroke="#ec4899"
                strokeWidth={2}
                fill="url(#colorMiddle)"
                fillOpacity={0.3}
              />
              
              {/* Top line area */}
              <Area
                type="monotone"
                dataKey="top"
                stroke="#8b5cf6"
                strokeWidth={2}
                fill="url(#colorTop)"
                fillOpacity={0.3}
              />
            </AreaChart>
          </ResponsiveContainer>
        </Box>

        {/* Chart Legend */}
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: '#8b5cf6', borderRadius: '50%' }} />
            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '12px' }}>
              Top Performance
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: '#ec4899', borderRadius: '50%' }} />
            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '12px' }}>
              Average Performance
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: '#7c3aed', borderRadius: '50%' }} />
            <Typography variant="body2" sx={{ color: '#64748b', fontSize: '12px' }}>
              Base Performance
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default RevenueReport; 