import { useSelector } from 'react-redux';

import {
  CustomTable,
  ICustomTableRowProps,
  Cell,
} from '../_element/table.component';
import { selectProducts } from '../../redux/inventory/inventory.selectors';
import { IProduct } from '../../types/product/product.types';
import { formatCurrency } from '../../utils/currency.utils';
import { readableDiscount } from '../../utils/discount.util';
import { InventoryControls } from './inventory-controls.component';
import { useState } from 'react';

const InventoryHeaders: ICustomTableRowProps = {
  cells: [
    {
      value: 'department',
      alignment: 'left',
    },
    {
      value: 'brand',
      alignment: 'center',
    },
    {
      value: 'name',
      alignment: 'left',
    },
    {
      value: 'discount',
      alignment: 'center',
    },
    {
      value: 'price',
      alignment: 'right',
    },
    {
      value: 'quantity',
      alignment: 'right',
    },
  ],
};

export const Inventory = (): JSX.Element => {
  const [keyword, setKeyword] = useState('');

  const products = useSelector(selectProducts);
  const filteredProducts = products.reduce((filtered, product) => {
    const formattedKey = keyword.trim().toLowerCase();
    const { department, brand, name } = product;
    if (
      formattedKey === '' ||
      department.name.toLowerCase().includes(formattedKey) ||
      brand.toLowerCase().includes(formattedKey) ||
      name.toLowerCase().includes(formattedKey)
    ) {
      filtered.push(product);
    }

    return filtered;
  }, [] as IProduct[]);

  const rows = mapRows(filteredProducts);

  const onSearch = (keyword: string) => {
    setKeyword(keyword);
    console.log(`setting keyword: ${keyword}`);
  };
  return (
    <>
      <InventoryControls onSearch={onSearch} />
      <CustomTable table="inventory" headers={InventoryHeaders} rows={rows} />
    </>
  );
};

function mapRows(products: IProduct[]) {
  return products.reduce((rows, product) => {
    const cells: Cell[] = [];
    cells.push(
      {
        value: product.department.name,
        alignment: 'left',
      },
      {
        value: product.brand,
        alignment: 'center',
      },
      {
        value: product.name,
        alignment: 'left',
      },
      {
        value: readableDiscount(product.discount),
        alignment: 'center',
      },
      {
        value: formatCurrency(product.price),
        alignment: 'right',
      },
      {
        value: product.quantity.toString(),
        alignment: 'right',
      }
    );

    rows.push({
      cells,
    });
    return rows;
  }, [] as ICustomTableRowProps[]);
}
