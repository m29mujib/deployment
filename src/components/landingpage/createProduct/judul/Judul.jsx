import { useState } from 'react';
import GambarSvg from '../../../../../src/ganteng.jpeg'
import LogoSvg from '../../../../../src/manis.jpeg'

 const styleButton = {
      width: "150px",
      backgroundColor: "#3A98B9",
      padding : "10px",
      borderRadius : "5px",
      border : "none",
      color : "white",
      margin : "5px"
   };

 const article = {
    title: {
       id: "Buat Akun",
       en: "Create Account"
  },
    description: {
      id: "Di bawah ini adalah contoh formulir yang dibuat seluruhnya dengan kontrol formulir Bootstrap. Setiap grup formulir yang diperlukan memiliki status validasi yang dapat dipicu dengan mencoba mengirimkan formulir tanpa menyelesaikannya.",
      en: "Below is an example form built entirely with Bootstrap s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it."
  }
};

const {title, description} = article;

function Judul() {

   const [count, setCount] = useState(0);
   const [images, setImages] = useState(GambarSvg);
   const [textButtonImg, setTextButtonImg] = useState('Ganti Logo');
   const [bahasa, setBahasa] = useState('Indonesia');
   const [head, setHead] = useState(title.en);
   const [parag, setParag] = useState(description.en);


   const handleImage = () => {

      if(images === GambarSvg) {
         setImages(LogoSvg)
         setTextButtonImg("Back Logo")
      } else {
         setImages(GambarSvg)
         setTextButtonImg("Ganti Logo")
      }
   };

   const ubahBahasa = () => {

         if(bahasa === "Indonesia") {
            setBahasa("English")
            setHead(title.id)
            setParag(description.id)
         } else {
            setBahasa("Indonesia")
            setHead(title.en)
            setParag(description.en)
         }

   };
   
   const handleClick = () => {
      setCount(console.log(Math.floor(Math.random() * 10) + 1))
   };

   return (
         <div class="container pt-5 text-center w-100">
            <img 
            src={images}
            width="120px"
            className='mt-5'
            style={{borderRadius: "50%" }}
            alt="mujib"
            />
               <div style={{width: "70%", margin: "auto"}}>
                  <h1
                  className="mt-4"
                  style={{color: "#3A98B9", fontFamily: "monospace", fontWeight: "bold"}}>{head}
                  </h1>
                  <p style={{fontFamily: "monospace", fontWeight: "bold"}}>{parag}</p>
               </div>
            <div>
                  <button
                  onClick={ubahBahasa}
                  style={styleButton}>{bahasa}
                  </button>

                  <button
                  onClick={handleImage}
                  style={styleButton}>{textButtonImg}
                  </button>
                  
                  <button
                  onClick={handleClick}
                  style={styleButton}>Random Angka
                  </button>
               </div>
         </div>
   )
}
export default Judul 