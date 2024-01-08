import { getAllDataUser } from './getDataUser';

export const createDataObject = async(idUser) =>{
    if(global.dataObject === undefined){
        //Creamos el objeto global dataObject usando el objeto devuelto por getAllDataUser
        global.dataObject = await getAllDataUser(idUser)
      }
      console.log( global.dataObject)
}

export const waitForData = async () => {
    if(!global.dataObject){
        for (let attempts = 0; attempts < 5; attempts++) {
      
          if (global.dataObject) {
            return global.dataObject;
          }
      
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Espera 5 segundos
        }
        throw new Error("Datos no disponibles después de 5 intentos");
    }else{
        return global.dataObject; 
    }
  };