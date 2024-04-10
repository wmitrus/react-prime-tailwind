import { items } from '@/SidebarItems';
import { PanelMenu } from 'primereact/panelmenu';

export default function PanelMenuComponent() {
  return (
    <div className="card flex justify-content-center w-64">
      <PanelMenu model={items} className="w-full md:w-20rem" />
    </div>
  );
}
