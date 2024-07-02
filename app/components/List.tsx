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
        <Title>{props.title}</Title>
    </ListView>
  )
}

export default List;

const ListView = styled.div`
    background-color: white;
`

const Label = styled.div`
    font-size: 14px;
    background-color: white;

`
const Title = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #393939;
    margin-bottom: 8px;
    background-color: white;
`