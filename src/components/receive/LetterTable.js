import styled from 'styled-components';

const LetterTable = () => {
  return (
    <div>
      <div style={{ marginTop: 15, textAlign: 'right' }}>카테고리</div>
      <Table>
        <thead style={{ borderTop: '4px solid #889287', borderBottom: '1px solid #889287' }}>
          <tr>
            <td style={{ padding: 10, width: 40 }}>번호</td>
            <td style={{ padding: 10, width: 60 }}>확인</td>
            <td style={{ padding: 10 }}>제목</td>
            <td style={{ padding: 10, width: 80 }}>작성자</td>
            <td style={{ padding: 10, width: 100 }}>작성일</td>
          </tr>
        </thead>
        <tbody
          style={{ backgroundColor: '#fff', borderTop: '2.2px solid #889287', borderBottom: '2.2px solid #889287' }}
        >
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
          <tr style={{ borderBottom: '2px solid #EBEEEC' }}>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>9</td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>no</td>
            <td style={{ borderRight: '2px solid #EBEEEC', textAlign: 'left', padding: 15, paddingLeft: 30 }}>
              할머니 보고싶어요.
            </td>
            <td style={{ borderRight: '2px solid #EBEEEC', padding: 15 }}>김대식</td>
            <td>22.02.19</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  margin-top: 10px;
`;

export default LetterTable;
