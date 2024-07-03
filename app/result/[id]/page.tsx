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

    const [fileUploadKTP, setFileUploadKTP] = useLocalStorage("file_upload_ktp","");
    const [uploadImagetKTP, setUploadImageKTP] = useLocalStorage("upload_image_ktp", "");
    const [fileNameKTP, setFileNameKTP] = useLocalStorage("file_name_ktp", "");
  
    const [allData, setAllData] = useState([])

    const submit = (e:any) => {
       e.preventDefault();
       const formData = {
        firstName,
        lastName,
        biodata,
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        file_upload: fileUpload,
        upload_image: uploadImage,
        file_name: fileName,

        file_upload_ktp : fileUploadKTP,
        upload_image_ktp : uploadImagetKTP,
        file_name_ktp : fileNameKTP
      }
       localStorage.setItem("user", JSON.stringify(formData));
       const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
       console.log('data detailnya===>', dataDetail);
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
      titleHeader="Result page"
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
        <div>
        <ImageProfile src={fileUploadKTP} alt="profile" />
        </div>

        <Button onClick={(e) => submit(e)}>
        {"Submit"}
      </Button>
        
    </Main>
  )
}

export default ResultPage