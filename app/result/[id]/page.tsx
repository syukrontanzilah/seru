"use client"
import CardHeader from '@/app/components/CardHeader';
import List from '@/app/components/List';
import ListImage from '@/app/components/ListImage';
import Main from '@/app/components/Main'
import { Toast } from '@/app/components/Toas';
import useLocalStorage from '@/app/hooks/useLocalStorage';
import { 
  Button, 
  CardContainer, 
  CheckBox, 
  ContainerInput, 
  ImageProfile, 
  TextCheck, 
  ViewCheck 
} 
from '@/app/style/HomeStyle';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ResultPage = () => {
    const router = useRouter()
    const [firstName, setFirstName] = useLocalStorage("firstName", "");
    const [lastName, setLastName] = useLocalStorage("lastName", "");
    const [biodata, setBiodata] = useLocalStorage("biodata", "");
    const [provinsi, setProvinsi] = useLocalStorage("provinsi", "");
    const [provinsiId, setProvinsiId] = useLocalStorage("provinsi_id", "");
    const [kota, setKota] = useLocalStorage("kota", "");
    const [kotaId, setKotaId] = useLocalStorage("kota_id", "");
    const [kecamatan, setKecamatan] = useLocalStorage("kecamatan","");
    const [kecamatanId, setKecamatanId] = useLocalStorage("kecamatan_id", "");
    const [kelurahan, setKelurahan] = useLocalStorage("kelurahan", "");
    const [kelurahanId, setKelurahanId] = useLocalStorage("kelurahan_id", "");
    const [fileUpload, setFileUpload] = useLocalStorage("file_upload", "");
    const [uploadImage, setUploadImage] = useLocalStorage("upload_image", "");
    const [fileName, setFileName] = useLocalStorage("file_name", "");

    const [fileUploadKTP, setFileUploadKTP] = useLocalStorage("file_upload_ktp","");
    const [uploadImagetKTP, setUploadImageKTP] = useLocalStorage("upload_image_ktp", "");
    const [fileNameKTP, setFileNameKTP] = useLocalStorage("file_name_ktp", "");
  
    const [fileUploadFree, setFileUploadFree] = useLocalStorage("file_upload_free", "");
    const [uploadImageFree, setUploadImageFree] = useLocalStorage("upload_image_free", "");
    const [fileNameFree, setFileNameFree] = useLocalStorage("file_name_free", "");
    const [nomorKTP, setNomorKTP] = useLocalStorage("nomor_ktp", "");


    const [isUpprove, setIsUpprove] = useLocalStorage("is_upprove", false)
  
    const submit = (e:any) => {
      if(isUpprove === false){
        Toast.fire({
          icon:"error",
          title: "Checklist persetujuan dulu"
        })
        return;
      }
       e.preventDefault();
       const formData = {
        firstName,
        lastName,
        biodata,
        provinsi,
        kota,
        kecamatan,
        kelurahan,
        provinsi_id: provinsiId,
        kota_id: kotaId,
        kecamatan_id: kecamatanId,
        kelurahan_id: kelurahanId,
        file_upload: fileUpload,
        upload_image: uploadImage,
        file_name: fileName,

        file_upload_ktp : fileUploadKTP,
        upload_image_ktp : uploadImagetKTP,
        file_name_ktp : fileNameKTP,

        file_upload_free : fileUploadFree,
        upload_image_free : uploadImageFree,
        file_name_free: fileNameFree,
        nomor_ktp: nomorKTP,
        is_upprove: isUpprove,
      }
       localStorage.setItem("user", JSON.stringify(formData));
       const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
       console.log('data detailnya===>', dataDetail);
       console.log('checked==>', isUpprove)
       router.replace('/success/id', { scroll: true }) 
    }

    useEffect(()=> {
      },[])

  return (
    <Main 
      iconBack
      titleHeader="Result page"
    >
      <CardHeader title="Konfirmasi"/>
        <CardContainer>
        <List label='Nama Lengkap' title={`${firstName}  ${lastName}`}/>
        <List label='Biodata' title={biodata}/>
        <List label='Provinsi' title={provinsi}/>
        <List label='Kota' title={kota}/>
        <List label='Kecamatan' title={kecamatan}/>
        <List label='Kelurahan' title={kelurahan}/>
        </CardContainer>

        <CardContainer>
        <ListImage label='Photo Selfie' image={fileUpload}/>
        <ListImage label='Photo KTP' image={fileUploadKTP}/>
        <List label='Nomor KTP' title={nomorKTP}/>
        <ListImage label='Photo Bebas' image={fileUploadFree}/>
        </CardContainer>

        <ViewCheck>
          <CheckBox type="checkbox" 
          id="checkbox" 
          checked={isUpprove}
          onChange={()=> setIsUpprove(!isUpprove)}
          defaultChecked={false}
          />
          <TextCheck htmlFor="checkbox">
            Dengan ini Saya setuju untuk mengirimkan data-data saya
          </TextCheck>
        </ViewCheck>
        <Button onClick={(e) => submit(e)}>
        {"Submit"}
      </Button>

        
    </Main>
  )
}

export default ResultPage