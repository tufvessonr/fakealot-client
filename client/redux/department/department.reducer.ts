import { MOCK_DEPARTMENT_STATE } from '../../__mock/mock';
import { RootAction } from '../store';
import { DepartmentActionTypes, IDepartmentState } from './department.types';
import {
  addDepartment,
  editDepartment,
  removeDepartment,
} from './department.utils';

let INITIAL_STATE: IDepartmentState = {
  departments: [],
  currentDepartment: undefined,
};

INITIAL_STATE = MOCK_DEPARTMENT_STATE;

export const departmentReducer = (
  state: IDepartmentState = INITIAL_STATE,
  action: RootAction
): IDepartmentState => {
  switch (action.type) {
    case DepartmentActionTypes.LOAD_DEPARTMENTS:
      return {
        ...state,
        departments: action.payload,
      };
    case DepartmentActionTypes.SET_CURRENT_DEPARTMENT:
      return {
        ...state,
        currentDepartment: action.payload,
      };
    case DepartmentActionTypes.ADD_DEPARTMENT:
      return {
        ...state,
        departments: addDepartment(state.departments, action.payload),
      };
    case DepartmentActionTypes.EDIT_DEPARTMENT:
      return {
        ...state,
        departments: editDepartment(state.departments, action.payload),
      };
    case DepartmentActionTypes.REMOVE_DEPARTMENT:
      return {
        ...state,
        departments: removeDepartment(state.departments, action.payload),
      };
    default:
      return state;
  }
};
