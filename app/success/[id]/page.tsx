"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import ImageSuccess from '../../../public/approve.png'

const SuccessPage = () => {
  useEffect(()=> {
    localStorage.clear()
  },[])
  return (
    <View>
        <Text>
          Terima kasih datamu berhasil masuk ke sistem kami
        </Text>
        <ImageView 
        src= {ImageSuccess} 
        width={100} 
        height={100}
        alt='success'
        />
    </View>
  )
}

export default SuccessPage

const View = styled.div`
    min-height: 100vh;
    padding-bottom: 80px;
    background: white;
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ImageView = styled(Image)`

`
const Text = styled.div`
    font-size: medium;
    max-width: 250px;
    text-align: center;
    color: #393939;
    font-weight: 600;
`