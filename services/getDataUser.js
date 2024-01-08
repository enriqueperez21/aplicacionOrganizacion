import {doc, collection, getDocs, where, getDoc, query} from 'firebase/firestore'

export const getAllDataUser = async (idUser) =>{
    const userInfo = await getUserData(idUser)
    const groupIds = userInfo.accountGroups
    const groupInfo = await getCollectionDataWhere("Account groups"/*Nombre de la colección*/, groupIds/*Array de ids de la colección*/)
    const accountIds = mergeEachAccountId(groupInfo);
    const accountInfo = await getCollectionDataWhere("Accounts", accountIds)
    const objectInfo = {
        user: userInfo,
        accountGroups: groupInfo,
        accounts: accountInfo,
    }
    return objectInfo
}

const getUserData = async(idUser) =>{
    const userReference = doc(global.dbCon,"user", idUser)
    const user = await getDoc(userReference)
    return user.data()
}

const getCollectionDataWhere = async(CollectionNameStr, arrayCompared) =>{
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

const mergeEachAccountId = (arrayWithId) =>{
    let arrayId = []
    for (const eachArray of arrayWithId){
        for(const eachId of eachArray.Accounts){
            arrayId.push(eachId)
        }
    }
    return arrayId;
}