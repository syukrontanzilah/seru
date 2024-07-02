"use client"
import Main from '@/app/components/Main'
import { ContainerInput } from '@/app/style/HomeStyle'
import React, { useEffect, useState } from 'react'

const UploadPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(()=> {
    const data = JSON.parse(localStorage.getItem("user") || "{}");
    setFirstName(data.first_name)
    setLastName(data.last_name)

  },[])
  return (
    <Main
      iconBack
      titleHeader="Upload Photo">
      <ContainerInput>
Hi {firstName} {lastName}, Please upload your photo below!
      </ContainerInput>
    </Main>
  )
}

export default UploadPage