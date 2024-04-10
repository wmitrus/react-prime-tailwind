import { MenuItem } from 'primereact/menuitem';
import { itemRenderer } from '@/Layout/Sidebar/SidebarItemRender';

export const items: MenuItem[] = [
  {
    label: 'Mail',
    icon: 'pi pi-envelope',
    badge: 5,
    template: itemRenderer,
    items: [
      {
        label: 'Compose',
        icon: 'pi pi-file-edit',
        template: itemRenderer,
      },
      {
        label: 'Inbox',
        icon: 'pi pi-inbox',
        badge: 5,
        template: itemRenderer,
      },
      {
        label: 'Sent',
        icon: 'pi pi-send',
        template: itemRenderer,
      },
      {
        label: 'Trash',
        icon: 'pi pi-trash',
        template: itemRenderer,
      },
    ],
  },
  {
    label: 'Reports',
    icon: 'pi pi-chart-bar',
    template: itemRenderer,
    items: [
      {
        label: 'Sales',
        icon: 'pi pi-chart-line',
        badge: 3,
        template: itemRenderer,
      },
      {
        label: 'Products',
        icon: 'pi pi-list',
        badge: 6,
        template: itemRenderer,
      },
    ],
  },
  {
    label: 'Profile',
    icon: 'pi pi-user',
    template: itemRenderer,
    items: [
      {
        level: 2,
        label: 'Settings',
        icon: 'pi pi-cog',
        template: itemRenderer,
        items: [
          {
            label: 'Settings',
            icon: 'pi pi-cog',
            template: itemRenderer,
          },
          {
            label: 'Privacy',
            icon: 'pi pi-shield',
            template: itemRenderer,
          },
        ],
      },
      {
        label: 'Privacy',
        icon: 'pi pi-shield',
        template: itemRenderer,
      },
    ],
  },
] as MenuItem[];
