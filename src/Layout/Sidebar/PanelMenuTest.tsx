import { PanelMenu } from 'primereact/panelmenu';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';
import { Badge } from 'primereact/badge';

export default function PanelMenuTest() {
  const itemRenderer = (
    item: MenuItem & { badge: number },
    options: MenuItemOptions
  ) => (
    <a
      className="flex align-items-center px-3 py-2 cursor-pointer"
      onClick={options.onClick}
    >
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && 'font-semibold'}`}>
        {item.label}
      </span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );

  const items: MenuItem[] = [
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
  ] as MenuItem[];

  return (
    <div className="card flex justify-content-center">
      <PanelMenu model={items} className="w-full md:w-20rem" />
    </div>
  );
}
