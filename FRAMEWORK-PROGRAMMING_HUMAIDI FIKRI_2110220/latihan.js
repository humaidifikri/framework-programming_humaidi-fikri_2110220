import React from 'react'
function Mobil(latian) {
    const mobil = {
        brand: 'Ford',
        models: 'Mustang',
    }

    const speks = {
        cc: 3000,
        tahun: 2021,
    }

    const mobilsaya = { ...mobil, ...speks }
    return(
    <>
    Mobil Ini Milik  <b>{latian.brand.pemilik}</b>, 
    Alamat <b>{latian.brand.alamat}</b> 
    NIM =  <b>{latian.brand.nim}</b>    
    <p>model <b>{mobilsaya.models}</b> spesifikasi : CC = <b>{mobilsaya.cc}</b> , 
    Tahun = <b>{mobilsaya.tahun}</b></p>
    </>
    )
}

function latian(){
    const mobilInfo = { pemilik: "Humaidi Fikri", alamat: "Jakarta Barat", nim:"2110220" };
    return (
        <>
            <h1>Informasi Mobil</h1>
            <Mobil brand={mobilInfo}/>
        </>
            
    )
}

export default latian