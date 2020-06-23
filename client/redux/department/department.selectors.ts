import { createSelector } from 'reselect';

import { IRootState } from '../store';
import { IDepartmentState } from './department.types';

const selectDepartment = (state: IRootState): IDepartmentState =>
  state.department;

export const selectDepartments = createSelector(
  [selectDepartment],
  (department) => department.departments
);

export const selectCurrentDepartment = createSelector(
  [selectDepartment],
  (department) => department.currentDepartment
);
