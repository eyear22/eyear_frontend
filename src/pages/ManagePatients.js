import TopImg from '../assets/img_receive.png';
import ImgLayout from '../components/common/ImgLayout';
import * as React from 'react';

import { useSelector } from 'react-redux';
import ManagePatientsContainer from '../components/managePatients/ManagePatientsContainer';

const ManagePatients = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <ImgLayout title={`${user.user.hos_name} 환자관리`} src={TopImg} width={'100%'}>
      <ManagePatientsContainer />
    </ImgLayout>
  );
};

export default ManagePatients;
