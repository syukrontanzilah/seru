"use client"
import Image from "next/image";
import Main from "./components/Main";
import { Button, ContainerInput, Input, Option, Select, TextArea, TextLabel } from "./style/HomeStyle";
import useLocalStorage from "./hooks/useLocalStorage"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "./components/Toas";

export default function Home() {
  const router = useRouter()
  const [firstName, setFirstName] = useLocalStorage("firstName","");
  const [lastName, setLastName] = useLocalStorage("lastName","");
  const [loading, setLoading] = useState(false);
  const [biodata, setBiodata] = useLocalStorage("biodata", "");
  const [provinsi, setProvinsi] = useLocalStorage("provinsi", "");
  const [kota, setKota] = useLocalStorage("kota", "");
  const [kecamatan, setKecamatan] = useLocalStorage("kecamatan","");
  const [kelurahan, setKelurahan] = useLocalStorage("kelurahan", "")

 const submit = (e:any) => {
  if(firstName === ""){
    Toast.fire({
      icon:"error",
      title: "Nama depan harus diisi"
    })
    return;
  }
  if(lastName === ""){
    Toast.fire({
      icon:"error",
      title: "Nama belakang harus diisi"
    })
    return;
  }
  if(biodata === ""){
    Toast.fire({
      icon:"error",
      title: "Biodata harus diisi"
    })
    return;
  }
  if(provinsi === ""){
    Toast.fire({
      icon:"error",
      title: "Pilih Provinsi"
    })
    return;
  }
  if(kota === ""){
    Toast.fire({
      icon:"error",
      title: "Pilih Kota"
    })
    return;
  }
  if(kecamatan === ""){
    Toast.fire({
      icon:"error",
      title: "Pilih Kecamatan"
    })
    return;
  }
  if(kelurahan === ""){
    Toast.fire({
      icon:"error",
      title: "Pilih Kelurahan"
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
  }
  localStorage.setItem("user", JSON.stringify(formData));
  const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
  console.log('data detalnya', dataDetail);
  setFirstName(dataDetail.firstName);
  setLastName(dataDetail.lastName);
  setBiodata(dataDetail.biodata);
  setProvinsi(dataDetail?.provinsi);
  setKota(dataDetail?.kota);
  setKecamatan(dataDetail?.kecamatan);
  setKelurahan(dataDetail?.kelurahan);
  setLoading(true);
  setTimeout(() => {
  router.push('/upload/id', { scroll: false })  
  }, 2000);
  setLoading(false)
 }

  useEffect(()=> {
    // console.log('loading',loading)
  }, []);
 
  return (
    <Main 
    titleHeader="Informasi diri"
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

        <TextLabel>Provinsi</TextLabel>
        <Select 
        value={provinsi}
        onChange={(e)=> setProvinsi(e.target.value)}
        >
          <Option disabled>Pilih Provinsi...</Option>
          <Option value="jakarta">Jakarta</Option>
          <Option value="jawa barat">Jawa Barat</Option>
          <Option value="jawa tengah">Jawa Tengah</Option>
          <Option value="jawa timur">Jawa Timur</Option>
        </Select>

        <TextLabel>Kota</TextLabel>
        <Select 
        value={kota}
        onChange={(e)=> setKota(e.target.value)}
        >
          <Option disabled>Pilih Kota...</Option>
          <Option value="1">Depok</Option>
          <Option value="2">Bandung</Option>
          <Option value="3">Bogor</Option>
          <Option value="4">Bekasi</Option>
        </Select>

        <TextLabel>Kecamatan</TextLabel>
        <Select 
        value={kecamatan}
        onChange={(e)=> setKecamatan(e.target.value)}
        >
          <Option disabled>Pilih Kecamatan...</Option>
          <Option value="pancoran">Pancoran</Option>
          <Option value="kalibata">Kalibata</Option>
          <Option value="tebet">Tebet</Option>
          <Option value="kuningan">Kuningan</Option>
          <Option value="mampang">Mampang Prapatan</Option>
          <Option value="pasar minggu">Pasar Minggu</Option>
        </Select>

        <TextLabel>Kelurahan</TextLabel>
        <Select 
        value={kelurahan}
        onChange={(e)=> setKelurahan(e.target.value)}
        >
          <Option disabled>Pilih Kelurahan...</Option>
          <Option value="pancoran">Pasar Minggu</Option>
          <Option value="kalibata">Kebon Pedes</Option>
          <Option value="tebet">Kebon Jengkol</Option>
          <Option value="kuningan">Rawa Buaya</Option>
        </Select>

      </ContainerInput>
      <Button onClick={(e) => submit(e)}>
        {loading? "Loading..." : "Selanjutnya"}
      </Button>
    </Main>
  );
}
