import {
  TrendingUpDown,
  Gauge,
  MapPin,
  CarTaxiFront,
  Package,
  BadgePercent,
  Eye,
  CirclePlus
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
    url: "#",
    icon: Gauge,
  },
  {
    title: "Realtime Driver Statuses",
    url: "#",
    icon: MapPin,
  },
  {
    title: "Driver Management",
    url: "#",
    icon: CarTaxiFront,
  },
  {
    title: "Delivery Management",
    url: "#",
    icon: Package,
  },
  {
    title: "Churn Prediction",
    url: "#",
    icon: TrendingUpDown
  },
  {
    title: "Manage Offers",
    url: "#",
    icon: BadgePercent,
    subMenus: [{name:"View Offers", icon:Eye},{name:"Add new Offers", icon:CirclePlus} ],
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
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuButton asChild>
                              <a href={item.url} className="flex items-center">
                                <subMenu.icon />
                                <span className="ml-2">{subMenu.name}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <SidebarMenuItem className="py-2" key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url} className="flex items-center">
                        <item.icon />
                        <span className="ml-2">{item.title}</span>
                      </a>
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
