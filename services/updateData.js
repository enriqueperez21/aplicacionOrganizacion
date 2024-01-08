import {doc, setDoc} from 'firebase/firestore'

export const updateData = async (CollectionNameStr, updateObject) => {
    const ObjectReference = doc(global.dbCon,CollectionNameStr, updateObject.id)
    await setDoc(ObjectReference, updateObject)
}