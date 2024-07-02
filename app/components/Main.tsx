"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react'
import styled from 'styled-components';

export type MainType = {
    background? : "primary" | "white" | "transparent";
    titleHeader? : string;
    iconBack? : true | string;
    children: ReactNode
}

const Main = (props: MainType) => {
    const router = useRouter();
  return (
    <>
    <View>
        <Header>
            {
                props.iconBack && (
                    <>
                    <IconBack onClick={() => router.back()}>
                        <Image
                        width={20}
                        height={14}
                        alt='back'
                        src='/back-grey.svg'
                        />
                    </IconBack>
                    </>
                )
            }
            <HeaderText>
                {props.titleHeader}
            </HeaderText>
        </Header>
        <ViewPage>
        {props.children}    
        </ViewPage>
    </View>
    </>
  )
}

export default Main

export const View = styled.div<MainType>`
    min-height: 100vh;
    padding-bottom: 80px;
    /* background: wheat; */
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid gray;
`

export const Header = styled.div`
    background-color: white;
    padding: 16px;
    display: flex;
    align-items: center;
    z-index: 10;
    position: relative;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.06);
`
const IconBack = styled.div`
    margin-right: 20px;
    cursor: pointer;
`

const HeaderText = styled.div`
    font-size: 16px;
    font-weight: bold;
`
const ViewPage = styled.div`
    padding: 20px
`

