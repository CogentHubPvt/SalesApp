import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "./Sidebar.css";
import { styled } from "@mui/system";

const sidebar = {
  height: "100vh",
};
const sidebarHeader = {
  padding: "8px 35px 8px 20px",
};

const sidebarFooter = {
  padding: "8px 35px 8px 20px",
};

const Link = styled("a")({
  position: "relative",
  display: "flex",
  padding: "12px 35px 8px 20px",
  cursor: "pointer",
  "text-decoration": "none",
  color: "#adadad",
  "&:hover": {
    color: "white",
  },
});

const Sidebar = ({ setContent }) => {
  return (
    <div>
      <ProSidebar style={sidebar}>
        <SidebarHeader style={sidebarHeader}>
          <p>Sales App</p>
        </SidebarHeader>
        <SidebarContent>
          <Link
            href="#"
            id="1"
            onClick={(e) => {
              setContent(e.target.id);
            }}
          >
            Add Lead
          </Link>
          <Link
            href="#"
            id="2"
            onClick={(e) => {
              setContent(e.target.id);
            }}
          >
            Add Company
          </Link>
        </SidebarContent>
        <SidebarFooter style={sidebarFooter}>©CogentHub</SidebarFooter>
      </ProSidebar>
    </div>
  );
};

export default Sidebar;
