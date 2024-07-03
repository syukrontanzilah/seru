"use client"
import React from 'react'
import styled from 'styled-components'
import DoneIcon from '../../public/done1.png'
import DoneIcon2 from '../../public/approve.png'
import CardIcon from '../../public/car.png'
import IDIcon from '../../public/idcard.png'
import FileIcon from '../../public/file.png'
import Image from 'next/image'

// form registrasi, form ktp, konfirmasi

type CardHeaderType = {
    title : string
}

const icon = (x: string) => {
    if(x==="Form Registrasi"){
        return FileIcon;
    }
    else if(x==="Form KTP"){
        return IDIcon
    } 
    else if(x==="Konfirmasi"){
        return CardIcon
    }
    return DoneIcon;  
}

const secondIcon = (y:string)=>{
    if(y==="Form Registrasi"){
        return IDIcon;
    }
    else if(y==="Form KTP"){
        return CardIcon
    } 
    else if(y==="Konfirmasi"){
        return DoneIcon2
    }
    return DoneIcon; 
}

const CardHeader = (props: CardHeaderType) => {
  return (
    <Container>
        <ViewLeft>
            <LineLeft/>
            <ViewLeftOne>
                <Image alt='ico' src={icon(props.title)} height={50} width={50}/>
            </ViewLeftOne>
            <ViewLeftTwo>
                {props.title}
            </ViewLeftTwo>
        </ViewLeft>
        <ViewRight>
            <LineRight/>
            <ViewRightone>
            <Image alt='ico-second' src={secondIcon(props.title)} height={50} width={50}/>
            </ViewRightone>
        </ViewRight>
    </Container>
  )
}

export default CardHeader

const Container = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-bottom: 30px;
`
const ViewLeft = styled.div`
    width: 70%;
    border: 1px solid #ece8e8;
    border-radius: 12px;
    display: flex;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
`
const LineLeft = styled.div`
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 8px;
    background-color: darkcyan;
`
const ViewLeftOne = styled.div`
    background-color: #f1f4f5;
    padding: 5px;
`
const ViewLeftTwo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    color: #393939;
    font-weight: bold;
`
const ViewRight = styled.div`
    width: 30%;
    border: 1px solid #ece8e8;
    border-radius: 12px;
    display: flex;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
`
const LineRight = styled.div`
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    width: 8px;
    background-color: #49eb87; 
`
const ViewRightone = styled.div`
    background-color: #def7e7;
    padding: 5px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`
