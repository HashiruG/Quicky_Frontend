import { Link } from "react-router-dom";
import {
  TrendingUpDown,
  Gauge,
  MapPin,
  CarTaxiFront,
  Package,
  BadgePercent,
  ChevronDown,
  Dot,
  UserPlus,
  LogOut,
  DollarSign,
  Percent,
  Eye,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { CollapsibleContent } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/features/authentication/AuthProvider";

const navItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Gauge,
    subMenus: [
      {
        name: "Platform revenue",
        url: "/dashboard/dashboard/today-best",
      },
      {
        name: "Delivery distribution",
        url: "/dashboard/dashboard/delivery-distribution",
      },
      {
        name: "New drivers",
        url: "/dashboard/dashboard/new-drivers",
      },
      {
        name: "Inactive drivers",
        url: "/dashboard/dashboard/inactive-drivers",
      },
    ],
  },
  {
    title: "Realtime Driver Statuses",
    url: "/realtime-driver-statuses",
    icon: MapPin,
  },
  {
    title: "Driver Management",
    url: "/driver-management",
    icon: CarTaxiFront,
    subMenus: [
      {
        name: "Driver profiles",
        url: "/driver-management/driver-profiles",
      },
      {
        name: "New registrations",
        url: "/driver-management/new-registrations",
      },
      {
        name: "Blacklist",
        url: "/driver-management/blacklist",
      },
    ],
  },
  {
    title: "Delivery Management",
    url: "/delivery-management",
    icon: Package,
  },
  {
    title: "Churn Prediction",
    url: "/churn-prediction",
    icon: TrendingUpDown,
  },
  {
    title: "Manage Offers",
    url: "/manage-offers",
    icon: BadgePercent,
    subMenus: [
      { name: "View Offers", url: "/manage-offers/view" },
      { name: "Add new Offers", url: "/manage-offers/add" },
    ],
  },
  {
    title: "Payout Requests",
    url: "/payout-requests",
    icon: DollarSign,
  },
  {
    title: "Commission Rate",
    url: "/commission-rates",
    icon: Percent,
  },
];

const SideBarComponent = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Sidebar className="top-14 ">
      <SidebarContent className="bg-slate-950 text-white m-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) =>
                item.subMenus ? (
                  <Collapsible key={item.title}>
                    <SidebarMenuItem className="py-2">
                      <SidebarMenuButton>
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center w-full">
                            <item.icon size={20} />
                            <span className="ml-2">{item.title}</span>
                            <ChevronDown className="ml-auto mr-2" />
                          </div>
                        </CollapsibleTrigger>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <ul className="pl-6">
                      {item.subMenus.map((subMenu) => (
                        <CollapsibleContent key={subMenu.name}>
                          <SidebarMenuButton>
                            <Link
                              to={subMenu.url}
                              className="flex items-center"
                            >
                              <Dot />
                              <span className="ml-2">{subMenu.name}</span>
                            </Link>
                          </SidebarMenuButton>
                        </CollapsibleContent>
                      ))}
                    </ul>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem className="py-2" key={item.title}>
                    <SidebarMenuButton>
                      <Link to={item.url} className="flex items-center">
                        <item.icon size={20} />
                        <span className="ml-2">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-slate-950 text-white sm:pb-14">
        {user && user.role === "SUPER_ADMIN" && (
          <>
            <SidebarMenuButton>
              <Link to="/register" className="flex items-center">
                <UserPlus size={20} />
                <span className="ml-2">Register New Admin</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuButton>
              <Link to="/register/view-admins" className="flex items-center">
                <Eye size={20} />
                <span className="ml-2">View Registered Admins</span>
              </Link>
            </SidebarMenuButton>
          </>
        )}

        <SidebarMenuButton onClick={handleLogout}>
          <LogOut size={20} />
          <span className="ml-2">Log Out</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default SideBarComponent;
