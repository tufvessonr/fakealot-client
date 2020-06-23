import { Dispatch } from 'redux';

import { IDepartment } from '../../types/department/department.types';
import { RootAction } from '../store';
import { DepartmentActionTypes } from './department.types';

export const loadDepartments = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const departments: IDepartment[] = []; //TODO: add logic

    dispatch({
      type: DepartmentActionTypes.LOAD_DEPARTMENTS,
      payload: departments,
    });
  };
};

export const addDepartment = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const department = undefined; //TODO: add logic

    dispatch({
      type: DepartmentActionTypes.ADD_DEPARTMENT,
      payload: department,
    });
  };
};

export const editDepartment = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const department = undefined; //TODO: add logic

    dispatch({
      type: DepartmentActionTypes.EDIT_DEPARTMENT,
      payload: department,
    });
  };
};

export const removeDepartment = () => {
  return async (dispatch: Dispatch<RootAction>): Promise<void> => {
    const department = undefined; //TODO: add logic

    dispatch({
      type: DepartmentActionTypes.REMOVE_DEPARTMENT,
      payload: department,
    });
  };
};
