import { IDepartment } from '../../types/department/department.types';

export interface IDepartmentState {
  departments: IDepartment[];
  currentDepartment?: IDepartment;
}

export enum DepartmentActionTypes {
  LOAD_DEPARTMENTS = 'LOAD_DEPARTMENTS',
  SET_CURRENT_DEPARTMENT = 'SET_CURRENT_DEPARTMENT',

  ADD_DEPARTMENT = 'ADD_DEPARTMENT',
  REMOVE_DEPARTMENT = 'REMOVE_DEPARTMENT',
  EDIT_DEPARTMENT = 'EDIT_DEPARTMENT',
}

export interface ILoadDepartments {
  type: DepartmentActionTypes.LOAD_DEPARTMENTS;
  payload: IDepartment[];
}

export interface ISetCurrentDeparment {
  type: DepartmentActionTypes.SET_CURRENT_DEPARTMENT;
  payload: IDepartment;
}

export interface IAddDepartment {
  type: DepartmentActionTypes.ADD_DEPARTMENT;
  payload?: IDepartment;
}

export interface IRemoveDepartment {
  type: DepartmentActionTypes.REMOVE_DEPARTMENT;
  payload?: IDepartment;
}

export interface IEditDepartment {
  type: DepartmentActionTypes.EDIT_DEPARTMENT;
  payload?: IDepartment;
}

export type DepartmentAction =
  | ILoadDepartments
  | ISetCurrentDeparment
  | IAddDepartment
  | IRemoveDepartment
  | IEditDepartment;
