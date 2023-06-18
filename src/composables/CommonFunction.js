import { Notify, date } from 'quasar'


export function notifyMessage(type, message){    
    Notify.create({
        type: type,
        message: message,
  })
}

export function getUniqueName(label='edith'){
    const timeStamp = Date.now()
    const formattedString = date.formatDate(timeStamp, 'DDMMYYYY')
    const randomName = Math.random().toString(16).substring(4,12) // Genere une chaine de charactere Aleatoire
    const UID  = `${label}-${formattedString}-${randomName}`
    return UID.toLocaleLowerCase() // LowerCase Evite les Erreurs Aleatoire
}

export function encodeHTMLtoB64(htmlcontent){
    let B64HTML, stringifiedB64HTML 
    try{
     B64HTML =  btoa(unescape(encodeURIComponent(htmlcontent))) /* btoa  = Methode JS pour convertir un String en BASE64. Unespace et EncoreURI evite les p de copier/coller depuis WOrd de contenu type Image ... */ 
    } catch(error){console.error(error);  notifyMessage( 'negative', error.message)}

    stringifiedB64HTML = JSON.stringify(B64HTML)
    return stringifiedB64HTML

}

export function decodeHTML(encryptedHTML){
    let B64Html = JSON.parse(encryptedHTML)
    let HTML = decodeURIComponent(escape(window.atob(B64Html)))
    return HTML
}

