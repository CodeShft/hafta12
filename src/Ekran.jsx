import useResize from "./useResize"
import useBaglanti from "./useBaglanti"

function Ekran() {
    const ekranBilgi = useResize()
    const baglantiVarmi = useBaglanti()

    if(ekranBilgi[0] < 500)
        return <p style={{color:"red"}}>Uygulamayı en az 500px genişlikte görüntüleyebilirsiniz.</p>

    if(!baglantiVarmi)
        return <p style={{color:"red"}}>İnternet bağlantısı kesildi! Uygulamayı kullanmak için tekrar internete bağlanın.</p>

        
    return (

        <>
            <div>
                <strong>Genişlik:</strong> {ekranBilgi[0]} <br />
                <strong>Yükseklik:</strong> {ekranBilgi[1]} <br />
            </div>
        </>
    )
}

export default Ekran