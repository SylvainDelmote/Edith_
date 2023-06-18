import {ref} from 'vue'
import { api } from 'src/boot/axios'
import { getUniqueName, notifyMessage } from './CommonFunction.js'
import {getPagesFromStorage} from './SessionStorageServices.js'
import { useDocumentStore } from '../stores/document-store.js'





export function saveToDatabase(){
    const store = useDocumentStore()
    const documentName = ref(store.documentName)
    const documentID = ref(store.documentID)
    const documentPages = getPagesFromStorage()

    if( documentName.value ) {
       putDocument(documentName.value, documentPages)
    }
    else{
        const newDocumentName = setDocumentName()
        postNewDocument(newDocumentName, documentPages)
        store.setDocumentName(newDocumentName)
        documentID.value =  getDocumentID(newDocumentName)
        store.setDocumentID = documentID.value
    }
}
export function getAllDocument(){
    const data = ref(null)
    const error = ref(null)

    api.get('api/documents')
        .then((res) => data.value = res.data['hydra:member'])
        .catch((err) => (error.value = err))
    return { data, error }
}

function setDocumentName(){
    try{
        const documentName = getUniqueName('DOC')
        return documentName
    }catch (err) { notifyMessage( 'negative', err.message)}    
}

function getThisDocument( documentName ){
    let url = `/api/documents?page=1&itemsPerPage=1&documentName=${documentName}`
    api.get(url).then((value)=>{
        return value.data['hydra:member']
       } )
}

function getDocumentID(documentName){
    let url = `/api/documents?page=1&itemsPerPage=1&documentName=${documentName}`
    api.get(url).then((value)=>{
        let id = value.data['hydra:member'][0].id
        return id
       } )


}

function postNewDocument(documentName, documentPages ){
    let error  = null
    const data = {
        documentName : documentName,
        documentPages : documentPages
    }
    api.post('api/documents', data )
    .catch(err =>{ console.debug('POST REQUEST ERROR', err.message), error = err.message, console.debug(err) } )
    .finally(  ()=>{
        error ?  notifyMessage('negative', error) :notifyMessage('positive', 'Sauvegarde Effectuée')
    }
    )
}

function putDocument( documentName, documentPages ){
    let error = null
    let documentID = getDocumentID(documentName)
    let url = `/api/documents/${documentID}`
    
    const data = {
        documentName : documentName,
        documentPages : documentPages
    }
    api.put(url,data )
    .catch(err =>{ console.debug('PUT REQUEST ERROR', err.message), error = err.message, console.debug(err) } )
    .finally(  ()=>{
        error ?  notifyMessage('negative', error) :notifyMessage('positive', 'Sauvegarde Effectuée')
    }
    )
 
}

function deleteDocument( documentID ){
    let url = `/api/documents/${documentID}`
    api.delete(url)
    .catch(err => notifyMessage('negative', err.message) )


}
