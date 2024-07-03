import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import ZoomImage from './ZoomImage';

type ListType = {
    label: string
    image: string
}

const ListImage = (props: ListType) => {
  return (
    <ListView>
        <Label>{props.label}</Label>
        <ImageView>
        <ZoomImage image={props.image}/>
        </ImageView>
    </ListView>
  )
}

export default ListImage;

const ListView = styled.div`
    background-color: white;
    margin-bottom: 20px;
`

const Label = styled.div`
    font-size: 14px;
    background-color: white;
    margin-bottom: 14px;
    color: darkcyan;
    font-weight: 700;
`
const ImageView = styled.div`
    width: 100%;
    height: 250px;
    margin-bottom: 8px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImageList = styled(Image)`
    width: 100%;
    height: 250px;
    border-radius: 20px;
    object-fit: cover;
`