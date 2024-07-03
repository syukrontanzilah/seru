import React from 'react'
import {
    TransformWrapper,
    TransformComponent,
    useControls,
  } from "react-zoom-pan-pinch";
import styled from 'styled-components';
import {
  ZoomIn, 
  ZoomOut, 
  RotateCcw
} from 'lucide-react'

type ZoomType = {
    image: string
}

const ZoomImage = (props: ZoomType) => {
  return (
    <TransformWrapper
    // initialScale={1}
    // initialPositionX={200}
    // initialPositionY={100}
  >
    {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
      <React.Fragment>
        <ViewButtonZoom className="tools">
          <Button onClick={() => zoomIn()}><ZoomIn /></Button>
          <Button onClick={() => zoomOut()}><ZoomOut/></Button>
          <Button onClick={() => resetTransform()}><RotateCcw/></Button>
        </ViewButtonZoom>
        <TransformComponent>
          <ImageCustom src={props.image} alt="zoom-img" />
        </TransformComponent>
      </React.Fragment>
    )}
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

export const ViewButtonZoom = styled.div`
  background-color: rgba(0,0,0,0.5);
  border-radius: 20px;
  position: absolute;
  z-index: 2;
  width: 120px;
  margin-top: 160px;
  display: flex;
  color: white;
  justify-content: space-between;
  padding: 5px;
`

export const ImageCustom = styled.img`
  width: 100%;
  height: 250px;
  object-fit: contain;
  border: 1px dashed transparent;
`;

const Button = styled.button`

`