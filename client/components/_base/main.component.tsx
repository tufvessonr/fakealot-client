import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';

import { CustomTabs, ICustomTabOption } from '../_element/tab.component';
import {
  createUserProfileDoc,
  FirebaseDocumentData,
  FirebaseDocumentReference,
  getFirebaseUser,
} from '../../hooks/firebase/firebase-utils';
import { selectDepartments } from '../../redux/department/department.selectors';
import { DepartmentActionTypes } from '../../redux/department/department.types';
import { RootAction } from '../../redux/store';
import { UserActionType } from '../../redux/user/user.types';
import { Footer } from './footer/footer.component';
import { Header } from './header/header.component';
import {
  ContentContainer,
  ContentSection,
  MainContainer,
  SidebarSection,
} from './main.styles';
import { Route } from '../../constants';
import CONFIG from '../../config';

export const Main: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({
  children,
}) => {
  const router = useRouter();
  const user = getFirebaseUser();
  const departments = useSelector(selectDepartments);

  const dispatch = useDispatch<Dispatch<RootAction>>();

  if (!user) {
    dispatch({ type: UserActionType.SET_CURRENT_USER, payload: null });
  } else {
    createUserProfileDoc(user).then(
      (userRef?: FirebaseDocumentReference<FirebaseDocumentData>) => {
        userRef?.onSnapshot((snapshot) => {
          const data = snapshot.data();
          if (data) {
            const { displayName, firstName, lastName, email, createdAt } = data;
            dispatch({
              type: UserActionType.SET_CURRENT_USER,
              payload: {
                id: snapshot.id,
                displayName,
                firstName,
                lastName,
                email,
                createdAt,
              },
            });
          }
        });
      }
    );
  }

  let includeSidebar: boolean;
  let includeDepartmentBar: boolean;
  switch (router.pathname) {
    case Route.Root:
    case Route.Browse:
      includeSidebar = true;
      includeDepartmentBar = true;
      break;
    default:
      includeSidebar = false;
      includeDepartmentBar = false;
  }

  let departmentTabOptions: ICustomTabOption[] = [];
  if (includeDepartmentBar) {
    departmentTabOptions = departments
      .sort((a, b) => a.weight - b.weight)
      .map<ICustomTabOption>((department) => {
        const { name } = department;
        return {
          value: name,
          onClick: (): void => {
            dispatch({
              type: DepartmentActionTypes.SET_CURRENT_DEPARTMENT,
              payload: department,
            });
          },
        };
      });
  }
  return (
    <>
      <Head>
        <title>fakelot.com</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
      </Head>
      <MainContainer>
        <Header />
        {includeDepartmentBar ? (
          <CustomTabs
            name={`departments`}
            options={departmentTabOptions}
          ></CustomTabs>
        ) : null}
        <ContentContainer>
          {includeSidebar ? <SidebarSection /> : null}

          <ContentSection>{children}</ContentSection>
        </ContentContainer>
        {/* <Footer /> */}
      </MainContainer>
    </>
  );
};
