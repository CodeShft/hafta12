import { memo } from "react";

function C1({veri, f1}) {

    console.log("C1 komponenti render olacak.");

    return (
        <>
            <div>
                Gelen veri: {veri}
                <hr />
                <button onClick={ ()=>{ f1("C1'den gelen uyarı!") } }>Uyarı Göster</button>
            </div>
        </>
    )
}

export default memo(C1) //C1 komponentini sadece proplar değişirse render et