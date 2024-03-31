import { useCallback, useState } from "react";
import C1 from "./bilesenler/C1";

function MemoOrnek() {
  const [sayac, sayacGuncelle] = useState(0)

  const deger = sayac % 5 === 0 ? sayac : "5İN KATI DEĞİL"

  const uyariGoster = useCallback( function(uyari) {
    alert(uyari + sayac)
  }, [] )

  return (
    <>
      Merhaba.. Sayaç: {sayac}
      <button onClick={ ()=>{ sayacGuncelle(eskiDeger=>eskiDeger+1) } }>Arttır</button>

      <C1 f1={uyariGoster} veri={deger} />
    </>
  );
}

export default MemoOrnek;
