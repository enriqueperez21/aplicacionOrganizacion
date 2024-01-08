import {doc,addDoc} from 'firebase/firestore'

export const createData =async (CollectionNameStr, updateObject) => {
    const ObjectReference = doc(global.dbCon,CollectionNameStr, updateObject.id)
    await addDoc(ObjectReference, updateObject)
}