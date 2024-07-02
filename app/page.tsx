"use client"
import Image from "next/image";
import Main from "./components/Main";
import { Button, ContainerInput, Input, TextArea, TextLabel } from "./style/HomeStyle";
import useLocalStorage from "./hooks/useLocalStorage"
import { useEffect, useState } from "react";

export default function Home() {

const [firstName, setFirstName] = useLocalStorage("first_name","");
const [lastName, setLastName] = useLocalStorage("last_name","");
const [loading, setLoading] = useState(false);
const [biodata, setBiodata] = useLocalStorage("biodata", "");

 const submit = (e:any) => {
  e.preventDefault();
  const formData = {
    first_name : firstName,
    last_name : lastName,
    biodata: biodata,
  }
  setLoading(true);
  localStorage.setItem("user", JSON.stringify(formData));
  const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
  console.log('data detalnya', dataDetail);
  setFirstName(dataDetail.first_name);
  setLastName(dataDetail.last_name);
  setBiodata(dataDetail.biodata);
 }


  useEffect(()=> {
  }, []);

  return (
    <Main 
    iconBack
    titleHeader="Informasi Umum"
    >
      <ContainerInput>
        <TextLabel>Nama Depan</TextLabel>
        <Input
        type="text"
        placeholder="Masukkan Nama Depan"
        value={firstName}
        onChange={(e)=> setFirstName(e.target.value)}
        />
        <TextLabel>Nama Belakang</TextLabel>
        <Input
        type="text"
        placeholder="Masukkan Nama Belakang"
        value={lastName}
        onChange={(e)=> setLastName(e.target.value)}
        />
        <TextLabel>Biodata</TextLabel>
        <TextArea
          placeholder="isi biodata.."
          value={biodata}
          onChange={(e)=> setBiodata(e.target.value)}
          maxLength={100}
        />
        
      </ContainerInput>
      <Button onClick={(e) => submit(e)}>
        Next
      </Button>
    </Main>
  );
}
