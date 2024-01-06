import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import AppSettingsAltOutlinedIcon from "@mui/icons-material/AppSettingsAltOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import GradingOutlinedIcon from "@mui/icons-material/GradingOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Ivanaadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <DashboardIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <Person2OutlinedIcon />
            <span>Users</span>
          </li>
          <li>
            <CategoryOutlinedIcon />
            <span>Products</span>
          </li>
          <li>
            <GradingOutlinedIcon />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon />
            <span>Delivery</span>
          </li>
          <li>
            <QueryStatsOutlinedIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon />
            <span>Notifications</span>
          </li>
          <li>
            <SystemSecurityUpdateGoodOutlinedIcon />
            <span>System Health</span>
          </li>
          <li>
            <LoginOutlinedIcon />
            <span>Logs</span>
          </li>
          <li>
            <AppSettingsAltOutlinedIcon />
            <span>Settings</span>
          </li>
          <li>
            <ContactPageOutlinedIcon />
            <span>Profile</span>
          </li>
          <li>
            <LogoutOutlinedIcon />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="botom">color</div>
    </div>
  );
};

export default Sidebar;
