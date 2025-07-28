const dashboard = 'sidebarIcons/dashboard.png';
const proposalsIcon = 'sidebarIcons/proposals.png';
const projectsIcon = 'sidebarIcons/projects.png';
const chatIcon = 'sidebarIcons/chat.png';
const calendarIcon = 'sidebarIcons/calendar.png';
const paymentIcon = 'sidebarIcons/invoice.png';
const customSupportIcon = 'sidebarIcons/custom support.png';
const pdfIcon = 'filetypeIcons/File type icon.png';
const pdfIcon1 = 'filetypeIcons/File type icon (1).png';
const pdfIcon2 = 'filetypeIcons/File type icon (2).png';
const pdfIcon3 = 'filetypeIcons/File type icon (3).png';

// Sample data for charts
export const revenueData = [
  { month: 'Jan', value: 1200 },
  { month: 'Feb', value: 1150 },
  { month: 'Mar', value: 1300 },
  { month: 'Apr', value: 1250 },
  { month: 'May', value: 1400 },
  { month: 'Jun', value: 1350 },
  { month: 'Jul', value: 1500 },
  { month: 'Aug', value: 1450 },
  { month: 'Sep', value: 1600 },
  { month: 'Oct', value: 1550 },
  { month: 'Nov', value: 1700 },
  { month: 'Dec', value: 1650 }
];

export const projectData = [
  { name: 'Complete', value: 10, color: '#4CAF50' },
  { name: 'Pending', value: 46, color: '#FF9800' },
  { name: 'In Progress', value: 85, color: '#2196F3' },
];

export const proposals = [
  { title: 'Tech requirements.pdf', size: '234 KB', status: 'overdue', icon: pdfIcon },
  { title: 'Tech requirements.pdf', size: '300 KB', status: 'due', icon: pdfIcon1 },
  { title: 'Tech requirements.pdf', size: '156 KB', status: 'complete', icon: pdfIcon2 },
  { title: 'Tech requirements.pdf', size: '200 KB', status: 'due', icon: pdfIcon3 }
];

export const payments = [
  { project: 'UX/UI Design Overhaul', client: 'Robert Fox', amount: '$244.00', status: 'overdue' },
  { project: 'Implementing DevOps Practices', client: 'Kathryn Murphy', amount: '$334.00', status: 'overdue' },
  { project: 'Blockchain Integration Project', client: 'Ralph Edwards', amount: '$404.00', status: 'overdue' },
  { project: 'UX/UI Design Overhaul', client: 'Cameron Williamson', amount: '$634.00', status: 'overdue' },
  { project: 'Beta Testing New Features', client: 'Kristin Watson', amount: '$166.00', status: 'overdue' },
  { project: 'Customer Portal Revamp 2023', client: 'Annette Black', amount: '$250.00', status: 'overdue' },
  { project: 'Cloud Migration Initiative', client: 'Eleanor Pena', amount: '$344.00', status: 'overdue' },
  { project: 'Software Security Enhancements', client: 'Devon Lane', amount: '$468.00', status: 'overdue' }
];

export const sidebarItems = [
  { icon: dashboard, label: 'Dashboard', active: true },
  { icon: proposalsIcon, label: 'Proposals' },
  { icon: projectsIcon, label: 'Projects' },
  { icon: chatIcon, label: 'Chat' },
  { icon: calendarIcon, label: 'Calendar' },
  { icon: paymentIcon, label: 'Payment' },
  { icon: customSupportIcon, label: 'Custom Support' }
];


