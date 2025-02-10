import {TrendingUpDown, Gauge,MapPin, CarTaxiFront, Package, BadgePercent} from "lucide-react"
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"


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
      icon: TrendingUpDown,
    },
    {
        title: "Manage Offers",
        url: "#",
        icon: BadgePercent,
      }
  ]

const SideBarComponent = () => {
  return (
    <Sidebar className="top-14">
    <SidebarContent className="bg-slate-950 text-white m-0">
      <SidebarGroup>
     
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem className="py-2" key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url}>
                    <item.icon />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
  );
};

export default SideBarComponent;
