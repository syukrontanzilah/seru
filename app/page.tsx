"use client"
import Main from "./components/Main";
import { 
  Button, 
  ContainerInput, 
  Input, 
  Option, 
  Select, 
  TextArea, 
  TextLabel 
} from "./style/HomeStyle";
import useLocalStorage from "./hooks/useLocalStorage"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Toast } from "./components/Toas";
import CardHeader from "./components/CardHeader";

type ProvinceType = {
  id: string
  name: string
}

type KotaType = {
  id: string
  province_id: string
  name: string
}

type KecamatanType = {
  id: string
  regency_id: string
  name: string
}

type KelurahanType = {
  id: string,
  district_id: string,
  name: string
}

export default function Home() {
  const router = useRouter()
  const [firstName, setFirstName] = useLocalStorage("firstName","");
  const [lastName, setLastName] = useLocalStorage("lastName","");
  const [loading, setLoading] = useState(false);
  const [biodata, setBiodata] = useLocalStorage("biodata", "");

  const [provinsi, setProvinsi] = useLocalStorage("provinsi", "");
  const [provinsiId, setProvinsiId] = useLocalStorage("provinsi_id", "");
  const [dataProvinsi, setDataProvinsi] = useState<ProvinceType[]>([])

  const [kota, setKota] = useLocalStorage("kota", "");
  const [kotaId, setKotaId] = useLocalStorage("kota_id", "");
  const [dataKota, setDataKota] = useState<KotaType[]>([])

  const [kecamatan, setKecamatan] = useLocalStorage("kecamatan","");
  const [kecamatanId, setKecamatanId] = useLocalStorage("kecamatan_id", "");
  const [datakecamatan, setDataKecamatan] = useState<KecamatanType[]>([])

  const [kelurahan, setKelurahan] = useLocalStorage("kelurahan", "");
  const [kelurahanId, setKelurahanId] = useLocalStorage("kelurahan_id", "");
  const [dataKelurahan, setDataKelurahan] = useState<KelurahanType[]>([])


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
      title: "Pilih Kota/Kabupaten"
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
    provinsi_id: provinsiId,
    kota_id: kotaId,
    kecamatan_id: kecamatanId,
    kelurahan_id: kelurahanId
  }
  localStorage.setItem("user", JSON.stringify(formData));
  const dataDetail = JSON.parse(localStorage.getItem("user") || "{}")
  setFirstName(dataDetail.firstName);
  setLastName(dataDetail.lastName);
  setBiodata(dataDetail.biodata);
  setProvinsi(dataDetail?.provinsi);
  setProvinsiId(dataDetail?.provinsi_id);
  setKota(dataDetail?.kota);
  setKotaId(dataDetail.kota_id);
  setKecamatan(dataDetail?.kecamatan);
  setKecamatanId(dataDetail?.kecamatan_id)
  setKelurahan(dataDetail?.kelurahan);
  setKelurahanId(dataDetail?.kelurahan_id);
  setTimeout(() => {
  setLoading(true);
  }, 2000);
  router.push('/upload/id', { scroll: true })  
  setLoading(false)
 }

//  get data provinsi
 const getDataProvinsi = async () => {
  await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
   .then(response => response.json())
   .then(data =>{ 
       setDataProvinsi(data);
   });
}

// get data kota/kabupaten
const getDataKotaKabupaten = async () => {
  await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiId}.json`)
  .then(response => response.json())
  .then(data => {
      setDataKota(data)
  });
}

// get data kecamatan
const getDatakecamatan = async() => {
  await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kotaId}.json`)
  .then(response => response.json())
  .then(data => {
    setDataKecamatan(data)
  });
}

// get data kelurahan
const getDataKelurahan = async() => {
  await fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${kecamatanId}.json`)
.then(response => response.json())
.then(data => {
  setDataKelurahan(data)
});
}

  useEffect(()=> {
    getDataProvinsi()
    getDataKotaKabupaten()
    getDatakecamatan()
    getDataKelurahan()
  }, [
    provinsiId, 
    kotaId, 
    kecamatanId, 
    kelurahanId
  ]);
 
  return (
    <Main 
    titleHeader="Informasi Data Diri"
    >      
      <CardHeader title="Form Registrasi"/>
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
          maxLength={225}
        />

        <TextLabel>Provinsi</TextLabel>
        <Select 
        value={provinsi}
        onChange={(e)=> {
          setProvinsi(e.target.value)
          var name = dataProvinsi.filter(function (element) {
              return element.name === e.target.value;
            })[0];
          setProvinsiId(name.id);
        }}
        >
          <Option value={""} disabled>Pilih Provinsi...</Option>
          {dataProvinsi.map((item, i)=>{
            return(
                <Option 
                key={item.id} 
                value={item.name}>
                  {item.name}
                </Option>
            )
        })}
        </Select>

        <TextLabel>Kota/Kabupaten</TextLabel>
        <Select 
        value={kota}
        onChange={(e)=> {
          setKota(e.target.value)
          var name = dataKota.filter(function (element) {
              return element.name === e.target.value;
            })[0];
          setKotaId(name.id);
        }}
        >
          <Option value={""} disabled>Pilih Kota/Kabupaten...</Option>
          {dataKota.map((item, i)=>{
            return(
                <Option 
                key={item.id} 
                value={item.name}>
                  {item.name}
                </Option>
            )
        })}
        </Select>

        <TextLabel>Kecamatan</TextLabel>
        <Select 
        value={kecamatan}
        onChange={(e)=> {
          setKecamatan(e.target.value)
          var name = datakecamatan.filter(function (element) {
            return element.name === e.target.value;
          })[0];
        setKecamatanId(name.id);
        }}
        >
          <Option value={""} disabled>Pilih Kecamatan...</Option>
          {datakecamatan.map((item, i)=>{
            return(
                <Option 
                key={item.id} 
                value={item.name}>
                  {item.name}
                </Option>
            )
        })}
        </Select>

        <TextLabel>Kelurahan</TextLabel>
        <Select 
        value={kelurahan}
        onChange={(e)=> {
          setKelurahan(e.target.value)
          var name = dataKelurahan.filter(function (element) {
            return element.name === e.target.value;
          })[0];
        setKelurahanId(name.id);
        // console.log('kelurahan id', name.id)
        }}
        >
          <Option value={""} disabled>Pilih Kelurahan...</Option>
          {dataKelurahan.map((item, i)=>{
            return(
                <Option 
                key={item.id} 
                value={item.name}>
                  {item.name}
                </Option>
            )
        })}
        </Select>

      </ContainerInput>
      <Button onClick={(e) => submit(e)}>
        {loading? "Loading..." : "Selanjutnya"}
      </Button>
    </Main>
  );
}
