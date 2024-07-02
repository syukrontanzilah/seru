import styled from "styled-components";

export const ContainerInput = styled.div`
    background-color: white;
`;

export const H5Text = styled.h5`
    font-size: 12px;
`;

export const TextLabel = styled(H5Text)`
    font-size: 16px;
    font-weight: 700;
    color: #393939;
    margin-bottom: 8px;
    background-color: white;
`;

export const Input = styled.input`
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    color: #393939;
    width: 100%;
    border: 0.815px solid #c4c4c4;
    background: #ffffff;
    outline: none;
    padding: 12px;
    margin-bottom: 12px;
`;

export const Button = styled.button`
    background-color: darkcyan;
    color: white;
    height : 45px;
    border-radius: 12px;
    width: 100%;
    font-weight: bold;
`
export const TextArea = styled.textarea`
    border-radius: 6px;
    font-weight: 400;
    font-size: 16px;
    color: #393939;
    width: 100%;
    border: 0.815px solid #c4c4c4;
    background: #ffffff;
    outline: none;
    padding: 12px;
    min-height: 100px;
    margin-bottom: 12px;
`

export const Select = styled.select`
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 10px;
    width: 100%;
    background-color: white;
    margin-bottom: 12px;
`

export const Option = styled.option`
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 10px;
    min-width: 168px;
    width: 100%;
`

export const ContainerPhoto = styled.div`
  background-color: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ViewImage = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 8px;
  border: 1px dashed #c4cdd5;
  /* border-radius: 105px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.img`
  width: 100%;
  height: auto;
  /* border-radius: 105px; */
  object-fit: cover;
`;

export const ViewUpload = styled.div`
  input {
    display: none;
  }
`;

export const InputBukti = styled.input`
  width: 40%;
  display: inline-block;
  padding: 6px 12px;
  background: #ffffff;
  border: 1px solid #dfe3e8;
  text-align: center;
  outline: none;
`;

export const ButtonFile = styled.div`
  background: #ffffff;
  border-radius: 36px;
  padding: 7px 20px;
  cursor: pointer;
  border: 1px solid #dfe3e8;

  p {
    font-weight: bold;
    font-size: 14px;
    color: #454f5b;
  }
`;
