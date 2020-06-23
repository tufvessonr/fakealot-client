import { useSelector } from 'react-redux';

import { BrowseProducts } from '../../components/product/products.component';
import { selectCurrentDepartment } from '../../redux/department/department.selectors';
import { selectProducts } from '../../redux/inventory/inventory.selectors';
import { IDepartment } from '../../types/department/department.types';
import { IProduct } from '../../types/product/product.types';

const BrowsePage = (): JSX.Element => {
  let products = useSelector(selectProducts);
  const currentDepartment = useSelector(selectCurrentDepartment);

  if (currentDepartment) {
    const isInDepartment = (department: IDepartment): boolean => {
      if (department.id === currentDepartment.id) {
        return true;
      }

      const subDepartments = department.subDepartments;
      if (subDepartments) {
        for (const subDepartment of subDepartments) {
          if (isInDepartment(subDepartment)) {
            return true;
          }
        }
      }

      return false;
    };

    products = products.reduce((products, product) => {
      if (isInDepartment(product.department)) {
        products.push(product);
      }
      return products;
    }, [] as IProduct[]);
  }
  return <BrowseProducts products={products} />;
};
export default BrowsePage;
