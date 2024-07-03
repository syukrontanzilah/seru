import styled from "styled-components";

export const ContainerInput = styled.div`
    background-color: white;
`;

export const CardContainer = styled.div`
    background-color: white;
    border: 1px solid #ece8e8;
    border-radius: 12px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
    padding: 20px;
    margin-bottom: 20px;
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
    padding: 14px;
    margin-bottom: 20px;
`;

export const Button = styled.button`
    background-color: darkcyan;
    color: white;
    height : 55px;
    border-radius: 30px;
    width: 100%;
    font-weight: bold;
    margin-top: 40px;
    margin-bottom: 20px;
    transition: .5s;
    &:hover{
      opacity: 0.8;
    }
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
    min-height: 120px;
    margin-bottom: 12px;
`

export const Select = styled.select`
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 6px;
    outline: none;
    padding: 14px;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
`;

export const ViewImage = styled.div`
  width: 100%;
  height: 250px;
  margin-bottom: 8px;
  border: 2px dashed #c4cdd5;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageProfile = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  border: 1px dashed transparent;
`;

export const NoPhoto = styled.div`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.4;
`

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
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #dfe3e8;
  padding: 10px 20px 5px 20px;
  p {
    font-weight: bold;
    font-size: 14px;
    color: #454f5b;
  }
`;

export const ViewCheck = styled.div`
    margin-top: 30px;
`

export const TextCheck = styled.label`
    font-size: 14px;
    background-color: white;
    color: darkcyan;
    font-weight: 700;
`;

export const CheckBox = styled.input`
    color: darkcyan;
    margin-right: 10px;
`