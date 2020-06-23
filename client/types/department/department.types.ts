export interface IDepartment {
  id?: string;
  name: string;
  weight: number;
  primary: boolean;

  subDepartments?: IDepartment[];
}
