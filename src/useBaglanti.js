import { useEffect, useState } from "react";

function useBaglanti() {
    const [baglanti, baglantiGuncelle] = useState(navigator.onLine)

    useEffect( ()=> {

        const kontrol = setInterval(() => {
            baglantiGuncelle(navigator.onLine)
        }, 1000);

        return ()=>{ clearInterval(kontrol) }
    }, [] )

    return baglanti
}

export default useBaglanti