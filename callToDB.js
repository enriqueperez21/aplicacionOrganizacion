import {doc, setDoc, collection, getDocs} from 'firebase/firestore'

export const updateData = (ObjectNameStr, updateObject) => {
    console.log("Correcto")
    console.log(ObjectNameStr, " -- " ,updateObject)
    const ObjectReference = doc(global.dbCon,ObjectNameStr, updateObject.id)
    setDoc(ObjectReference, updateObject)
}