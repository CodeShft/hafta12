import { useEffect, useState } from "react";

/*
Bu custom hook, herhangi bir komponentin, ilk renderandan sonra bir API kaynağına bağlanarak veri cekmesini sağlar. 
*/
function useVeriCek(url) {
    const [veri, veriGuncelle] = useState([])
    const [yukleniyor, yukleniyorGuncelle] = useState(true)
    const [hata, hataGuncelle] = useState("")

    useEffect(()=>{
        async function veriIslem() {
            try{
                const istek = await fetch(url) //urlye istekte bulun
                const sonuc = await istek.json() //gelen json verisini JS objesine çevir
                veriGuncelle(sonuc)
                yukleniyorGuncelle(false)
            }catch(hata) {
                hataGuncelle(hata.message)
                yukleniyorGuncelle(false)
            }
        }

        veriIslem()
    }, [url])

    return {veri, yukleniyor, hata}
}

export default useVeriCek