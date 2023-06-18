import { markRaw } from 'vue'
import BaseTemplate from '../components/templates/BaseTemplate.ce.vue'
import { notifyMessage, decodeHTML, encodeHTMLtoB64 } from './CommonFunction'


export function importFromStorage(){
    let pageList = Object.keys(sessionStorage)
    let result=[], contenu =[],  error = null
    if (pageList.length === 0){
        console.debug(' Session Storage vide ')       
        return 
    }

    try{
        pageList = pageList.filter((key)=> key.startsWith('Page')  )
        if (pageList.length === 0) {
            console.debug(' Aucune Page à charger dans Session Storage  ' )
            return
            }
    }catch(err){ error = err.message }

    // Tri le tableau par ordre de Page
    try{
        pageList.sort((a, b) => a.slice(4).localeCompare( b.slice(4), undefined, { numeric: true }    ));
    }catch(err){ error = err.message } 
    // Recupere le HTML et le decode avant de l'ajouter dans le Tableau RESULT
    try{
        pageList.forEach((key)=>{
            let encryptedHTML = sessionStorage.getItem(key)
            let HTML = decodeHTML(encryptedHTML)
            let innerHTML =  removeTemplateMark(HTML)
            result[key] = innerHTML
        })
    }catch(err){ error = err.message } 


    try{
        Object.keys(result).forEach( (page) => {
            contenu.push( 
                { template: markRaw(BaseTemplate), props: { innerHTML: result[page]  } }
            ) 
         
        })


    }catch(err){ error = err.message }
    

    finally{
       if(error){
        notifyMessage( 'negative', error)
       }else{
        return(contenu)
       }

    }


}

export function getPagesFromStorage(){
    let storageKeys = []
    let pages = []
    storageKeys = Object.keys(window.sessionStorage).filter( (key)=> key.startsWith('Page') )
    storageKeys.sort((a, b) => a.slice(4).localeCompare( b.slice(4), undefined, { numeric: true }    ));
    storageKeys.forEach( key =>{
        pages.push( {
            pageName : key,
            pageContent : window.sessionStorage.getItem(key)
        })

    }   
    )
    return pages
}

export function saveToStorage(){
    let pagesArray = []
    let error = null
    sessionStorage.clear();

    // Recupere la liste de chaque Page du Contenu
    try{
    pagesArray = document.querySelectorAll('.page')
    } catch(err){ error = err.message }


    // Recupere le HTML de chaque Page, l'encode en Base64 etr le Stock dans SessionStorage
    try{
        pagesArray.forEach( (page, index) => {
            const HTML = page.getInnerHTML({includeShadowRoots: true})  // Recupere les ShadowRoots qui sont en fait les DOM Node ou sont injectés nos Custom Components
            const storageKey = `Page${index+1}`  
            const storageValue = encodeHTMLtoB64(HTML) 
            window.sessionStorage.setItem(storageKey, storageValue); 
        })
    }catch(err){ error = err.message }

    // Alerte Si Erreur, Confirmation Sinon
    finally{
        if (error){
            notifyMessage('negative', error)
        }
        // else{
        //     notifyMessage('positive', 'Sauvegarde effectuée')
        // }
    }

}

function removeTemplateMark(HTML){
    return HTML.replaceAll('template', 'edith');
}



