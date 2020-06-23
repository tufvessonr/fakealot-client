import {
  DepartmentBarContainer,
  DepartmentBarOption,
} from './department.styles';

export const DepartmentBar: React.FC = (): JSX.Element => {
  return (
    <DepartmentBarContainer>
      <DepartmentBarOption>HOME</DepartmentBarOption>
      <DepartmentBarOption>Garden</DepartmentBarOption>
      <DepartmentBarOption>PETS</DepartmentBarOption>
      <DepartmentBarOption>Automotive</DepartmentBarOption>
      <DepartmentBarOption>Electronics</DepartmentBarOption>
      <DepartmentBarOption>LIQOUR</DepartmentBarOption>
      <DepartmentBarOption>FASHION</DepartmentBarOption>
      <DepartmentBarOption>Books</DepartmentBarOption>
      <DepartmentBarOption>Gaming</DepartmentBarOption>
      <DepartmentBarOption>DIY</DepartmentBarOption>
    </DepartmentBarContainer>
  );
};
