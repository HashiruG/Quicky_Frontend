import { Link } from "react-router-dom";
import {
  TrendingUpDown,
  Gauge,
  MapPin,
  CarTaxiFront,
  Package,
  BadgePercent,
  Eye,
  CirclePlus,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Gauge,
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
      { name: "View Offers", url: "/manage-offers/view", icon: Eye },
      { name: "Add new Offers", url: "/manage-offers/add", icon: CirclePlus },
    ],
  },
];

const SideBarComponent = () => {
  return (
    <Sidebar className="top-14">
      <SidebarContent className="bg-slate-950 text-white m-0">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.subMenus ? (
                  <div key={item.title} className="pb-2">
                    <SidebarMenuItem className="py-2">
                      <div className="flex items-center">
                        <item.icon />
                        <span className="ml-2">{item.title}</span>
                      </div>
                    </SidebarMenuItem>
                    <ul className="pl-6">
                      {item.subMenus.map((subMenu) => (
                        <SidebarMenuSub key={subMenu.name}>
                          <SidebarMenuSubItem>
                            <SidebarMenuButton asChild>
                              <Link to={subMenu.url} className="flex items-center">
                                <subMenu.icon />
                                <span className="ml-2">{subMenu.name}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <SidebarMenuItem className="py-2" key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center">
                        <item.icon />
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
    </Sidebar>
  );
};

export default SideBarComponent;