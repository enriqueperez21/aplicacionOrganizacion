import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export const cargarConfiguracion = () =>{
  console.log("Inicializacion correcta")
  const app = initializeApp(firebaseConfig)
  global.dbCon = getFirestore(app)
}

const firebaseConfig = {
  apiKey: "AIzaSyBmSDBxRUmIDIj9MrUcy3YDxoVNxInQJyE",
  authDomain: "productosfirebase-b586c.firebaseapp.com",
  projectId: "productosfirebase-b586c",
  storageBucket: "productosfirebase-b586c.appspot.com",
  messagingSenderId: "161217560223",
  appId: "1:161217560223:web:bb4f6e458d7cc9e6a52caa"
};