import styled from 'styled-components';
import TopImg from '../assets/img_receive.png';
import ImgLayout from '../components/common/ImgLayout';

const ManagePatients = () => {
  return (
    <ImgLayout title="환자 관리" src={TopImg} width={900}>
      <table>
        <thead>
          <td>환자</td>
          <td>환자</td>
        </thead>
      </table>
    </ImgLayout>
  );
};

export default ManagePatients;
