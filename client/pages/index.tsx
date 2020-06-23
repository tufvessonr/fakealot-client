import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { INVENTORY_DATA } from '../__mock/inventory.data';
import { CustomCarousel } from '../components/_element/carousel.component';
import { BrowseProducts } from '../components/product/products.component';
import { RootAction } from '../redux/store';
import { fetchData } from '../redux/test/test.actions';
import { selectFetchData } from '../redux/test/test.selectors';
import { TestActionTypes } from '../redux/test/test.types';
import { DropZone, Files } from '../components/upload/upload.component';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = (): JSX.Element => {
  // const dispatch = useDispatch<Dispatch<RootAction>>();
  // useEffect(() => {
  //   fetchData()(dispatch);
  //   console.log('got here');
  // }, []);

  // const items = INVENTORY_DATA[0].items.map((item) => {
  //   return {
  //     ...item,
  //     id: item.id.toString(),
  //     quantity: 1,
  //   };
  // });

  // const data = useSelector(selectFetchData);
  // console.log(data);

  return <HomeContainer>{/* <CustomCarousel /> */}</HomeContainer>;
};

export default Home;
