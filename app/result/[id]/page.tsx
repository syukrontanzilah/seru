"use client"
import List from '@/app/components/List';
import Main from '@/app/components/Main'
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { Button, ContainerInput, ImageProfile } from '@/app/style/HomeStyle';
import React, { useEffect, useState } from 'react'

const ResultPage = () => {
    const [firstName, setFirstName] = useLocalStorage("firstName", "");
    const [lastName, setLastName] = useLocalStorage("lastName", "");
    const [biodata, setBiodata] = useLocalStorage("biodata", "");
    const [provinsi, setProvinsi] = useLocalStorage("provinsi", "");
    const [kota, setKota] = useLocalStorage("kota", "");
    const [kecamatan, setKecamatan] = useLocalStorage("kecamatan","");
    const [kelurahan, setKelurahan] = useLocalStorage("kelurahan", "")
    const [fileUpload, setFileUpload] = useLocalStorage("file_upload", "");
    const [uploadImage, setUploadImage] = useLocalStorage("upload_image", "");
    const [fileName, setFileName] = useLocalStorage("file_name", "");
    const [allData, setAllData] = useState([])

    const submit = (e:any) => {
       e.preventDefault();
       const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
       console.log('data detalnya', dataDetail);
        // console.log('all data', allData)
    }

    useEffect(()=> {
        // const data = JSON.parse(localStorage.getItem("user") || "{}");
        // setAllData(data)
        // console.log('all data', data)
      },[])
  return (
    <Main 
      iconBack
      titleHeader="Result"
    >
        <ContainerInput>
        <List label={'Nama depan'} title={firstName}/>
        <List label= 'Nama belakang' title={lastName}/>
        <List label='Biodata' title={biodata}/>
        <List label='Provinsi' title={provinsi}/>
        <List label='Kota' title={kota}/>
        <List label='Kecamatan' title={kecamatan}/>
        <List label='Kelurahan' title={kelurahan}/>
        </ContainerInput>
        <div>
        <ImageProfile src={fileUpload} alt="profile" />
        </div>

        <Button onClick={(e) => submit(e)}>
        {"Submit"}
      </Button>
        
    </Main>
  )
}

export default ResultPage