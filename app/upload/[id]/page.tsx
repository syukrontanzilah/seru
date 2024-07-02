"use client"
import Main from '@/app/components/Main'
import useLocalStorage from '@/app/hooks/useLocalStorage'
import { Button, ButtonFile, ContainerInput, ContainerPhoto, ImageProfile, InputBukti, TextLabel, ViewImage, ViewUpload } from '@/app/style/HomeStyle'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const UploadPage = () => {
  const router = useRouter()
  const [user, setUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fileUpload, setFileUpload] = useLocalStorage("file_upload", "");
  const [uploadImage, setUploadImage] = useLocalStorage("upload_image", "");
  const [fileName, setFileName] = useLocalStorage("file_name", "");

  const handleChange = (event: any) => {
    event.persist();
    setFileUpload(URL.createObjectURL(event.target.files[0]));
    setUploadImage(event.target.files[0]);
    setFileName(event.target.files[0].name);
    console.log('fileupload', fileUpload);
    console.log('upload image', uploadImage);
    console.log('file name', fileName)
  };

  const submit = (e:any) => {
    setLoading(true);
    e.preventDefault();
    const formData = {
      file_upload : fileUpload,
      upload_image : uploadImage,
      file_name: fileName,
    }
    localStorage.setItem("user", JSON.stringify(formData));
    const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
    console.log('data detalnya', dataDetail);
    setFileUpload(dataDetail?.file_upload);
    setUploadImage(dataDetail?.upload_image);
    setFileName(dataDetail?.file_name);
    router.push('/result/id', { scroll: false }) 
  }

  useEffect(()=> {
  },[])
  return (
    <Main
      iconBack
      titleHeader="Upload Photo">
      <ContainerInput>
      <TextLabel>Foto Selfie</TextLabel>
      <ContainerPhoto>
        <ViewImage>
        {fileUpload ? (
              <ImageProfile src={fileUpload} alt="profile" />
            ) : (
              <ImageProfile
                src={"/vercel.svg"}
                alt="profile"
              />
            )}
        </ViewImage>
        <ViewUpload>
        <label htmlFor="imgUpload">
              <ButtonFile>
                <TextLabel>
                  Upload Foto
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
        {fileName}
      </ContainerPhoto>
      </ContainerInput>
      <Button onClick={(e) => submit(e)}>
        {"Selanjutnya"}
      </Button>
    </Main>
  )
}

export default UploadPage