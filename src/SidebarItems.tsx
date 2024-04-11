import { MenuItem } from 'primereact/menuitem';
import { itemRenderer } from '@/Layout/Sidebar/SidebarItemRender';
import { router } from './router';

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
    label: 'Demo',
    icon: 'pi pi-chart-bar',
    template: itemRenderer,
    items: [
      {
        label: 'Home',
        icon: 'pi pi-chart-line',
        badge: 3,
        // url: '/demo',
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        command: (_e) => {
          router.navigate('/');
        },
        template: itemRenderer,
      },
      {
        label: 'Table',
        icon: 'pi pi-list',
        badge: 6,
        url: '/demo/table',
        command: () => {
          router.navigate('/demo/table');
          // router.navigate(_e.item.url as string);
        },
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
