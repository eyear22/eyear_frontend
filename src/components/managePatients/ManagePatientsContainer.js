import styled from 'styled-components';
import PatientListSection from './PatientListSection';
import AddPatientSection from './AddPatientSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from '../../api/patient';
import { useEffect } from 'react';

const ManagePatientsContainer = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const patientList = useSelector((state) => state.patient.patientList);

  useEffect(() => {
    user != null && fetchPatients(dispatch, user.flag);
  }, []);

  return (
    <>
      <Container>
        <PatientListSection patientList={patientList} />
        <AddPatientSection />
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
