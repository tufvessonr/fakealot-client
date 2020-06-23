import { IDepartment } from '../../types/department/department.types';

export const addDepartment = (
  departments: IDepartment[],
  departmentToAdd?: IDepartment
): IDepartment[] => {
  if (!departmentToAdd) {
    return departments;
  }

  const existingDepartment = departments.find(
    (department) => department.id === departmentToAdd.id
  );
  if (existingDepartment) {
    return departments;
  }
  departments.push(departmentToAdd);
  return departments;
};

export const editDepartment = (
  departments: IDepartment[],
  editedDepartment?: IDepartment
): IDepartment[] => {
  if (!editedDepartment) {
    return departments;
  }

  const updatedDepartments = departments.reduce((departments, department) => {
    const existingDepartment = department.id === editedDepartment.id;
    if (existingDepartment) {
      const updatedDepartment = {
        ...department,
        ...editedDepartment,
      };
      departments.push(updatedDepartment);
      return departments;
    }

    departments.push(department);
    return departments;
  }, [] as IDepartment[]);

  return updatedDepartments;
};

export const removeDepartment = (
  departments: IDepartment[],
  departmentToRemove?: IDepartment
): IDepartment[] => {
  if (!departmentToRemove) {
    return departments;
  }

  const updatedDepartments = departments.reduce((departments, department) => {
    const existingDepartment = department.id === departmentToRemove.id;
    if (existingDepartment) {
      return departments;
    }

    departments.push(department);
    return departments;
  }, [] as IDepartment[]);

  return updatedDepartments;
};
