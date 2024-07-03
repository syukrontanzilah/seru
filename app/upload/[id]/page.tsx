"use client"
import CardHeader from '@/app/components/CardHeader'
import Main from '@/app/components/Main'
import useLocalStorage from '@/app/hooks/useLocalStorage'
import { Button, ButtonFile, ContainerInput, ContainerPhoto, ImageProfile, Input, InputBukti, NoPhoto, TextLabel, ViewImage, ViewUpload } from '@/app/style/HomeStyle'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import imageCamera from '../../../public/camera.png';
import { Toast } from '@/app/components/Toas'
import ZoomImage from '@/app/components/ZoomImage'

const UploadPage = () => {
  const router = useRouter()
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUpload, setFileUpload] = useLocalStorage("file_upload", "");
  const [uploadImage, setUploadImage] = useLocalStorage("upload_image", "");
  const [fileName, setFileName] = useLocalStorage("file_name", "");

  const [fileUploadKTP, setFileUploadKTP] = useLocalStorage("file_upload_ktp","");
  const [uploadImagetKTP, setUploadImageKTP] = useLocalStorage("upload_image_ktp", "");
  const [fileNameKTP, setFileNameKTP] = useLocalStorage("file_name_ktp", "");

  const [nomorKTP, setNomorKTP] = useLocalStorage("nomor_ktp", "");

  const [fileUploadFree, setFileUploadFree] = useLocalStorage("file_upload_free", "");
  const [uploadImageFree, setUploadImageFree] = useLocalStorage("upload_image_free", "");
  const [fileNameFree, setFileNameFree] = useLocalStorage("file_name_free", "");

  const handleChange = (event: any) => {
    event.persist();
    setFileUpload(URL.createObjectURL(event.target.files[0]));
    setUploadImage(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  const handleChangeKTP = (event: any) => {
    event.persist();
    setFileUploadKTP(URL.createObjectURL(event.target.files[0]));
    setUploadImageKTP(event.target.files[0]);
    setFileNameKTP(event.target.files[0].name);
  };

  const handleChangeFree = (event: any) => {
    event.persist();
    setFileUploadFree(URL.createObjectURL(event.target.files[0]));
    setUploadImageFree(event.target.files[0]);
    setFileNameFree(event.target.files[0].name);
  };

  const submit = (e:any) => {
    if(fileUpload === ""){
      Toast.fire({
        icon:"error",
        title: "Upload Foto selfie dulu"
      })
      return;
    }
    if(fileUploadKTP === ""){
      Toast.fire({
        icon:"error",
        title: "Upload Foto KTP dulu"
      })
      return;
    }
    if(nomorKTP === ""){
      Toast.fire({
        icon:"error",
        title: "Masukkan nomor KTP"
      })
      return;
    }
    if(fileUploadFree === ""){
      Toast.fire({
        icon:"error",
        title: "Upload Foto bebas dulu"
      })
      return;
    }
    setLoading(true);
    e.preventDefault();
    const formData = {
      file_upload : fileUpload,
      upload_image : uploadImage,
      file_name: fileName,

      file_upload_ktp : fileUploadKTP,
      upload_image_ktp : uploadImagetKTP,
      file_name_ktp : fileNameKTP,

      file_upload_free : fileUploadFree,
      upload_image_free : uploadImageFree,
      file_name_free: fileNameFree,
      nomor_ktp: nomorKTP
    }
    localStorage.setItem("user", JSON.stringify(formData));
    const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
    setFileUpload(dataDetail?.file_upload);
    setUploadImage(dataDetail?.upload_image);
    setFileName(dataDetail?.file_name);
    setFileUploadKTP(dataDetail?.file_upload_ktp);
    setUploadImageKTP(dataDetail?.upload_image_ktp);
    setFileNameKTP(dataDetail?.file_name_ktp);
    setFileUploadFree(dataDetail?.file_upload_free);
    setUploadImageFree(dataDetail?.upload_image_free);
    setFileNameFree(dataDetail?.file_name_free);
    setNomorKTP(dataDetail?.nomor_ktp)
    router.push('/result/id', { scroll: true }) 
  }

  useEffect(()=> {
  },[])

  return (
    <Main
      iconBack
      titleHeader="Upload Photo">
        <CardHeader title="Form KTP"/>
      <ContainerInput>
      {/* upload photo selfie */}
      <TextLabel>1. Photo Selfie</TextLabel>
      <ContainerPhoto>
        <ViewImage>
        {fileUpload ? (
              <ZoomImage image={fileUpload} />
            ) : (
              <NoPhoto>
                <Image 
                src={imageCamera} 
                alt='no-image' 
                width={45} 
                height={45}/>
              </NoPhoto>
            )}
        </ViewImage>
        <ViewUpload>
        <label htmlFor="imgUpload">
              <ButtonFile>
                <TextLabel>
                 {fileUpload ==="" ? "Upload photo selfie": "Ganti photo"}             
                 </TextLabel>
              </ButtonFile>
            </label>
            <InputBukti
              accept="image/*"
              onChange={(event) => handleChange(event)}
              id="imgUpload"
              type="file"
            />
        </ViewUpload>
      </ContainerPhoto>

      {/* upload photo KTP */}
      <TextLabel>2. Photo KTP </TextLabel>
      <ContainerPhoto>
        <ViewImage>
        {fileUploadKTP ? (
              <ZoomImage image={fileUploadKTP} />
            ) : (
              <NoPhoto>
              <Image src={imageCamera} alt='no-image' width={45} height={45}/>
            </NoPhoto>
            )}
        </ViewImage>
        <ViewUpload>
        <label htmlFor="imgUploadKTP">
              <ButtonFile>
                <TextLabel>
                 {fileUploadKTP ==="" ? "Upload photo KTP": "Ganti photo"}             
                 </TextLabel>
              </ButtonFile>
            </label>
            <InputBukti
              accept="image/*"
              onChange={(event) => handleChangeKTP(event)}
              id="imgUploadKTP"
              type="file"
            />
        </ViewUpload>
      </ContainerPhoto>

      <TextLabel>Nomor KTP</TextLabel>
        <Input
        type="text"
        placeholder="Masukkan Nomor KTP"
        value={nomorKTP}
        onChange={(e)=> setNomorKTP(e.target.value)}
        />

 {/* upload photo Bebas */}
 <TextLabel>2. Photo Bebas</TextLabel>
      <ContainerPhoto>
        <ViewImage>
        {fileUploadFree ? (
              <ZoomImage image={fileUploadFree} />
            ) : (
              <NoPhoto>
              <Image src={imageCamera} alt='no-image' width={45} height={45}/>
            </NoPhoto>
            )}
        </ViewImage>
        <ViewUpload>
        <label htmlFor="imgUploadFree">
              <ButtonFile>
                <TextLabel>
                 {fileUploadFree ==="" ? "Upload photo bebas": "Ganti photo"}             
                 </TextLabel>
              </ButtonFile>
            </label>
            <InputBukti
              accept="image/*"
              onChange={(event) => handleChangeFree(event)}
              id="imgUploadFree"
              type="file"
            />
        </ViewUpload>
      </ContainerPhoto>

      </ContainerInput>
      <Button 
      onClick={(e) => submit(e)}
      >
        {"Selanjutnya"}
      </Button>
    </Main>
  )
}

export default UploadPage