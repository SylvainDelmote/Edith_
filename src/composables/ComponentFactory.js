
import { defineCustomElement, markRaw } from 'vue'
import * as Custom from '../components/custom components/index.js'
import { notifyMessage, getUniqueName } from './CommonFunction.js'

export function componentFactory (tag){
    const componentTable = ['span', 'div', 'img', 'checkbox'] // Tableau des composants actuellement géré
    let error, element, range = null  // Variables déclarée dans le scope de la fonction et alimentée dans les TryCatch

    // Normalize le tag 
    try {
        tag = tag.trim().toLowerCase();
        let tagIsAllowed = componentTable.includes(tag) ? true : false;
        if(!tagIsAllowed) throw new SyntaxError('Invalid component type');
        if(tag === 'span') return spanFactory()

    } catch (err) { error = err.message}

    // Defini le CustomElement => element
    try {
     const name = getUniqueName()
     element = defineCustomElement(markRaw(Custom[tag]) ) // < Recupere le CustomComponent et le transforme en Custom Element.
     customElements.define( name, element ) 
    } catch (err) { error = err.message}
    
    // Recupere l'Emplacement ou l'inserer => range
    try{
        const selection = window.getSelection()
        if (!isValidSelection(selection)) {
            console.debug(' Selection non valide ')
            return
        }
        range = selection.getRangeAt(0);  
    } catch (err) { error = err.message}
    
    // Termine et Notifie si Erreur 
    if (error){
        notifyMessage('negative', error)
        return
    }

    // Insere l'Element
    if(range && element)  {
        const customElement = new element()
        range.insertNode(customElement);
        range.collapse(true); // < Evite que la selection initiale s'applique a tout le customElement
    }
    }

function spanFactory(){
    const selection = window.getSelection();
    let error, element, range = null  // Variables déclarée dans le scope de la fonction et alimentée dans les TryCatch

    // 
    try{
        let selectionIsEmpty  =  selection.toString().trim().length < 1 ? true : false
        if(selectionIsEmpty) return
        else range  =  selection.getRangeAt(0)
         }catch (err) { error = err.message}

    // 
    try {
        const name = getUniqueName()
        element = defineCustomElement(markRaw(Custom.span) ) // < Recupere le CustomComponent et le transforme en Custom Element.
        const options = null
        customElements.define( name,element, options ) 
          } catch (err) { error = err.message}
    
    // Termine et Notifie si Erreur 
    if (error){
        notifyMessage('negative', error)
        return
    }
    // 
    if(range && element)  {
              const customElement = new element({ motInitial: selection.toString().trim() } )
              selection.deleteFromDocument()
              range.insertNode(customElement);   
              range.collapse(true); 
    }
}

function isValidSelection( selection){
    const range = selection.getRangeAt(0);

    try{
        let parentElement = range.commonAncestorContainer;
        while (parentElement.classList.contains('page') === false && parentElement.parentElement) {

            parentElement = parentElement.parentElement;
        }
        if (!parentElement.classList.contains('page')) {
            return false
        }
    } catch (error) { NotifyMessage('negative', error.message)}   

    return true 

    }
