// Mock data for the dashboard
export const mockStats = [
  {
    id: 1,
    title: "Total Users",
    value: "2,543",
    change: "+12.5%",
    isPositive: true,
    icon: "users"
  },
  {
    id: 2,
    title: "Revenue",
    value: "$45,231",
    change: "+8.2%",
    isPositive: true,
    icon: "dollar-sign"
  },
  {
    id: 3,
    title: "Active Sessions",
    value: "1,234",
    change: "-3.1%",
    isPositive: false,
    icon: "activity"
  },
  {
    id: 4,
    title: "Conversion Rate",
    value: "3.24%",
    change: "+5.7%",
    isPositive: true,
    icon: "trending-up"
  }
];

export const mockActivities = [
  {
    id: 1,
    user: "John Doe",
    action: "Created a new account",
    timestamp: "2 minutes ago"
  },
  {
    id: 2,
    user: "Jane Smith",
    action: "Updated profile settings",
    timestamp: "15 minutes ago"
  },
  {
    id: 3,
    user: "Mike Johnson",
    action: "Completed purchase",
    timestamp: "1 hour ago"
  },
  {
    id: 4,
    user: "Sarah Williams",
    action: "Signed up for newsletter",
    timestamp: "2 hours ago"
  },
  {
    id: 5,
    user: "Tom Brown",
    action: "Downloaded report",
    timestamp: "3 hours ago"
  }
];

export const mockQuickActions = [
  { id: 1, title: "Add User", icon: "user-plus" },
  { id: 2, title: "Generate Report", icon: "file-text" },
  { id: 3, title: "View Analytics", icon: "bar-chart" },
  { id: 4, title: "Settings", icon: "settings" }
];