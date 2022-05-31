import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import DropDownInput from './DropDownInput';
import { fetchPatients, fetchUsers } from '../../api/patient';
import useInput from '../../utils/useInput';

const ReceiverInput = ({ pat_id, receiver }) => {
  const dispatch = useDispatch();

  // 병원 고유 번호 (임의값)
  const hos_id = '000000000000000000000000';

  // 환자 데이터 불러오기
  useEffect(() => {
    fetchPatients(dispatch, hos_id);
  }, [hos_id]);

  // 환자와 관련된 개인 데이터 불러오기
  useEffect(() => {
    pat_id.value != '' && fetchUsers(dispatch, pat_id.value.id);
  }, [pat_id.value]);

  // 환자 리스트
  const patientList = useSelector((state) => state.patient.patientList);
  const userList = useSelector((state) => state.patient.userList);

  return (
    <Container>
      {patientList != null && <DropDownInput data={patientList} onChange={pat_id.onChange} />}
      <DropDownInput data={userList != null ? userList : []} onChange={receiver.onChange} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default ReceiverInput;
