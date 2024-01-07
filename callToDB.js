import {doc, setDoc, collection, getDocs, where, addDoc, getDoc, query} from 'firebase/firestore'

export const updateData = async (CollectionNameStr, updateObject) => {
    const ObjectReference = doc(global.dbCon,CollectionNameStr, updateObject.id)
    await setDoc(ObjectReference, updateObject)
}

export const createData =async (CollectionNameStr, updateObject) => {
    const ObjectReference = doc(global.dbCon,CollectionNameStr, updateObject.id)
    await addDoc(ObjectReference, updateObject)
}

export const getData =async (CollectionNameStr, idObject) => {
    const ObjectReference = doc(global.dbCon,CollectionNameStr,idObject)
    await getDocs(ObjectReference)

}

export const getAllDataUser = async (idUser) =>{
    const userInfo = await getUserData(idUser)
    const groupInfo = await getCollectionDataWhere("Account groups", userInfo.accountGroups)
    
    const accountInfo = await getCollectionDataWhere("Accounts", groupInfo[0].Accounts)
    console.log("Objeto del usuario: ",userInfo)
    console.log("Objeto de grupos: ",groupInfo)
    console.log("Objeto de cuentas: ",accountInfo)
}

const getUserData = async(idUser) =>{
    const userReference = doc(global.dbCon,"user", idUser)
    const user = await getDoc(userReference)
    return user.data()
}

const getCollectionDataWhere = async(CollectionNameStr, arrayCompared) =>{
    console.log("collecion: ", arrayCompared)
    const collectionReference = collection(global.dbCon, CollectionNameStr)
    const collectionQuery = query(collectionReference, where("id", "in", arrayCompared))
    const collectionRecive = await getDocs(collectionQuery)
    const arrayIndividualCollection = getEachData(collectionRecive)
    return arrayIndividualCollection
}

const getEachData = (collectionGroup) =>{
    let collectionData = []
    for (const collection of collectionGroup.docs) {
        const docData = collection.data();
        collectionData.push(docData); // Añadir los datos de cada documento al array
    }
    return collectionData
}