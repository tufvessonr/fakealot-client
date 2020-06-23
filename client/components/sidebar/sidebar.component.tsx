import { useSelector } from 'react-redux';
import {
  selectDepartments,
  selectCurrentDepartment,
} from '../../redux/department/department.selectors';

export const Sidebar: React.FC = (): JSX.Element => {
  const departments = useSelector(selectDepartments);
  const currentDepartment = useSelector(selectCurrentDepartment);

  //   let departments;

  return <></>;
};
