import styled from 'styled-components';
import PatientListSection from './PatientListSection';
import AddPatientSection from './AddPatientSection';

const ManagePatientsContainer = () => {
  return (
    <>
      <Container>
        <PatientListSection />
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
