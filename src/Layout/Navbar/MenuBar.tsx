import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
import { Avatar } from 'primereact/avatar';

import { PrimeReactContext } from 'primereact/api';
import { LayoutContext } from '@/store/LayoutContext';
import { useContext } from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export default function MenuBar() {
  const { layoutConfig, setLayoutConfig } = useContext(LayoutContext);
  const { changeTheme } = useContext(PrimeReactContext);

  const itemRenderer = (item: MenuItem) => (
    <a className="flex align-items-center p-menuitem-link">
      <span className={item.icon} />
      <span className="mx-2">{item.label}</span>
    </a>
  );

  const items: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
    },
    {
      label: 'Features',
      icon: 'pi pi-star',
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Core',
          icon: 'pi pi-bolt',
          shortcut: '⌘+S',
          template: itemRenderer,
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server',
          shortcut: '⌘+B',
          template: itemRenderer,
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil',
          shortcut: '⌘+U',
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette',
              badge: 2,
              template: itemRenderer,
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette',
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      template: itemRenderer,
    },
  ] as MenuItem[];

  const changeThemeHandler = (value: boolean) => {
    let colorScheme = layoutConfig.colorScheme;
    const oldTheme = layoutConfig.theme;
    let theme = layoutConfig.theme;

    if (value) {
      console.log(value);
      colorScheme = 'dark';
      theme = layoutConfig.theme.replace('light', 'dark');
    } else {
      colorScheme = 'light';
      theme = layoutConfig.theme.replace('dark', 'light');
    }
    console.log(oldTheme, theme, colorScheme);
    changeTheme?.(oldTheme, theme, 'theme-css', () =>
      setLayoutConfig((prevState) => ({ ...prevState, theme, colorScheme }))
    );
  };

  const start = (
    // <img
    //   alt="logo"
    //   src="https://primefaces.org/cdn/primereact/images/logo.png"
    //   height="20"
    //   className="mr-2"
    // ></img>
    <></>
  );

  const end = (
    <div className="flex align-items-center gap-2">
      <InputSwitch
        checked={layoutConfig.colorScheme === 'dark'}
        onChange={(e) => changeThemeHandler(e.value)}
      />
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );

  return (
    <div className="card w-full">
      <Menubar model={items} start={start} end={end} className="rounded-none" />
    </div>
  );
}
