import styled from "styled-components";

export const ContainerInput = styled.div`
    background-color: white;
`;

export const H5Text = styled.h5`
    font-size: 12px;
`;

export const TextLabel = styled(H5Text)`
    font-size: 14px;
    font-weight: 700;
    color: #393939;
    margin-bottom: 8px;
    background-color: white;
`;

export const Input = styled.input`
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
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
    height : 36px;
    border-radius: 12px;
    width: 100%;
    font-weight: bold;
`
export const TextArea = styled.textarea`
    border-radius: 6px;
    font-weight: 400;
    font-size: 14px;
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
