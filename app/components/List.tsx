import React from 'react'
import styled from 'styled-components';

type ListType = {
    label: string
    title: string
}

const List = (props: ListType) => {
  return (
    <ListView>
        <Label>{props.label}</Label>
        {
            props.label === "Biodata" ?
            <Desc>{props.title}</Desc> :
            <Title>{props.title}</Title>
        }
        
    </ListView>
  )
}

export default List;

const ListView = styled.div`
    background-color: white;
    margin-bottom: 20px;
`

const Label = styled.div`
    font-size: 14px;
    background-color: white;
    color: darkcyan;
    font-weight: 700;

`
const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #393939;
    margin-bottom: 8px;
    background-color: white;
    text-transform: capitalize;
`
const Desc = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: #393939;
    margin-bottom: 8px;
    background-color: white;
`