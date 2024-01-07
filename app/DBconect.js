import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

export const cargarConfiguracion = () =>{
  console.log("Inicializacion correcta")
  const app = initializeApp(firebaseConfig)
  global.dbCon = getFirestore(app)
}

const firebaseConfig = {
  apiKey: "AIzaSyCy1GLA-HuemrjygO2u53tdxCM-2XKfot0",
  authDomain: "cuentasfacil-da92b.firebaseapp.com",
  projectId: "cuentasfacil-da92b",
  storageBucket: "cuentasfacil-da92b.appspot.com",
  messagingSenderId: "844886659306",
  appId: "1:844886659306:web:415ae51b470a4649158793"
};