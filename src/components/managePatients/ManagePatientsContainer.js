import styled from 'styled-components';
import PatientListSection from './PatientListSection';
import AddPatientSection from './AddPatientSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../../api/patient';
import useInput from '../../utils/useInput';
import { useEffect } from 'react';
import axios from 'axios';

const ManagePatientsContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const patientList = useSelector((state) => state.patient.patientList);
  const patNum = useInput('');
  const patName = useInput('');
  const patGender = useInput(0);
  const patBirth = useInput('');

  useEffect(() => {
    user != null && fetchPatients(dispatch, user.flag);
  }, []);

  const addPatient = () => {
    axios({
      method: 'post',
      url: `http://localhost:5000/business/patient`,
      data: {
        pat_number: patNum.value,
        pat_name: patName.value,
        sex: patGender.value == 0 ? 'male' : 'female',
        birth: patBirth.value,
      },
    })
      .then((res) => {
        console.log(res.data);
        alert('환자가 등록되었습니다.');
      })
      .catch(() => alert('환자 등록에 실패하였습니다.'));
  };

  return (
    <>
      <Container>
        <PatientListSection patientList={patientList} />
        <AddPatientSection
          patNum={patNum}
          patName={patName}
          patGender={patGender}
          patBirth={patBirth}
          addPatient={addPatient}
        />
      </Container>
    </>
  );
};

const Container = styled.main`
  display: flex;
  width: 80%;
  height: 500px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 40px;
`;

export default ManagePatientsContainer;
