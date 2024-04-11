import { useState, useEffect, useContext } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProductService } from './service/ProductService';
import { LayoutContext } from '@/store/LayoutContext';

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export default function BasicDemo() {
  const [products, setProducts] = useState<Product[]>([]);
  const { layoutConfig } = useContext(LayoutContext);

  useEffect(() => {
    ProductService.getProductsWithOrders().then((data) => setProducts(data));
  }, []);

  return (
    <div className="card">
      <div className="flex justify-content-center mb-4"></div>
      <DataTable
        className="rounded"
        value={products}
        size={layoutConfig.tableSize}
        tableStyle={{ minWidth: '50rem' }}
      >
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>
    </div>
  );
}
