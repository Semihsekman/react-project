import {createUserDocumentFromAuth, signInWithGooglePopup } from "../utils/firebase/firebase.utils";


import "../sign-in/sign-in.css";


const SignIn = () => {
    const logGoogleUser = async () =>{
        // Popup ile hesap seçimi
        const {user} = await signInWithGooglePopup();
        // console.log("LGU",user);
        // Seçilen hesaba göre veritabanına bağlantı noktası oluşturma
        await createUserDocumentFromAuth(user);
    }
    return ( 
        <div className="sign-in">
            <h1>Giriş Sayfası</h1>
            <button className="btn" onClick={logGoogleUser}>
                Google ile giriş yap
            </button>
        </div>
    );
}
 
export default SignIn;