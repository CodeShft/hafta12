import useVeriCek from "./useVericek";

function Yazilar() {
  const kullaniciIstek = useVeriCek("https://jsonplaceholder.org/posts65567"); //{veri, yukleniyor, hata}

  if (kullaniciIstek.yukleniyor === true)
    return (
      <>
        <p>Veriler yükleniyor</p>
      </>
    );

  if (kullaniciIstek.hata !== "")
    return (
      <>
        <h2>HATA OLUŞTU</h2>
        <p>{kullaniciIstek.hata}</p>
      </>
    );


  return (
    <>
      <h2>Yazılar</h2>
      <div>Toplam Kayıt: {kullaniciIstek.veri.length}</div>
    </>
  );
}

export default Yazilar;
