import { useMemo, useState } from "react";

function uzunsurenIslemler(kullanicilar) {
  console.log("Hesaplama yapılıyor...");
  return (
    kullanicilar.reduce((acc, user) => acc + user.age, 0) / kullanicilar.length
  );
}

function UserList({ users: kullanicilar }) {
  const [sayac, sayacGuncelle] = useState(0);
  const [filtre, filtreGuncelle] = useState("");

  // Filtrelenmiş kullanıcı listesini useMemo ile hesapla
  const filtrelenmisKullanicilar = useMemo(() => {
    return kullanicilar.filter((kullanici) =>
      kullanici.name.toLowerCase().includes(filtre.toLowerCase())
    );
  }, [kullanicilar, filtre]);

  // Maliyetli hesaplama işlemini yine useMemo kullanarak yap
  const ortalamaYas = useMemo(
    () => {
        return uzunsurenIslemler(filtrelenmisKullanicilar);
    }, 
    [filtrelenmisKullanicilar]
  );

  return (
    <div>
      <input
        type="text"
        value={filtre}
        onChange={(e) => filtreGuncelle(e.target.value)}
        placeholder="Kullanıcıları filtrele"
      />
      <ul>
        {filtrelenmisKullanicilar.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age}
          </li>
        ))}
      </ul>
      <div>Ortalama Yaş: {ortalamaYas}</div>

      <button
        onClick={() => {
          sayacGuncelle((eskiDeger) => eskiDeger + 5);
        }}
      >
        Sayıyı arttır: {sayac}
      </button>
    </div>
  );
}

export default UserList;
