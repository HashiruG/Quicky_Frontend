import { Link } from "react-router-dom";
import {
  TrendingUpDown,
  Gauge,
  MapPin,
  CarTaxiFront,
  Package,
  BadgePercent,
  ChevronDown,
  Dot
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { CollapsibleContent } from "@/components/ui/collapsible";

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
    subMenus: [
      {
        name: "Driver profiles",
        url: "/driver-management/driver-profiles",
      },
      {
        name: "New registrations",
        url: "/driver-management/new-registrations",
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
      { name: "View Offers", url: "/manage-offers/view"},
      { name: "Add new Offers", url: "/manage-offers/add" },
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
                  <Collapsible key={item.title}>
                    <SidebarMenuItem className="py-2">
                      <SidebarMenuButton>
                        <CollapsibleTrigger asChild>
                          <div className="flex items-center w-full">
                            <item.icon size={20}/>
                            <span className="ml-2">{item.title}</span>
                            <ChevronDown className="ml-auto mr-2" />
                          </div>
                        </CollapsibleTrigger>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    <ul className="pl-6">
                      {item.subMenus.map((subMenu) => (
                        <CollapsibleContent key={subMenu.name}>
                          <SidebarMenuButton asChild>
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
                    <SidebarMenuButton asChild>
                      <Link to={item.url} className="flex items-center">
                        <item.icon size={20}/>
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
