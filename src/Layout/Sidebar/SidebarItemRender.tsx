import { Badge } from 'primereact/badge';
import { MenuItem, MenuItemOptions } from 'primereact/menuitem';

export const itemRenderer = (
  item: MenuItem & { badge: number; level: number },
  options: MenuItemOptions
) => {
  // const style =
  //   item.level === 2 ? { backgroundColor: 'var(--surface-200)' } : {};
  return (
    <a
      className="flex align-items-center px-3 py-2 cursor-pointer"
      // style={style}
      onClick={options.onClick}
    >
      <span className={`${item.icon} text-primary`} />
      <span className={`mx-2 ${item.items && 'font-semibold'}`}>
        {item.label}
      </span>
      {item.badge && <Badge className="ml-auto" value={item.badge} />}
    </a>
  );
};
