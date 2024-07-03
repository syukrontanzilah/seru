import React from 'react'
import {
    TransformWrapper,
    TransformComponent,
    useControls,
  } from "react-zoom-pan-pinch";
import styled from 'styled-components';

type ZoomType = {
    image: string
}

const ZoomImage = (props: ZoomType) => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <ImageProfile src={props.image} alt="zoom-img" />
      </TransformComponent>
    </TransformWrapper>
  )
}

export default ZoomImage

export const ImageProfile = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 20px;
  object-fit: cover;
  border: 1px dashed transparent;
`;