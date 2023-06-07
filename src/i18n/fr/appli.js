export default {
  // message pour l'application
  application: {
    titre: 'Nord ~ App',
    description: 'Une appli qui est cool', 
    breadcrumbTitre: 'PROJET INITIAL QUASAR', //Pas Utilisé,
    breadcrumbSousTitre: 'BIENVENUE SUR LE SITE DU' //Pas Utilisé
  },
  // message pour le menu securite
  securite: {
    profil: 'Votre profil',
    role: 'Liste des rôles',
    options : 'Vos Options',
    exception: {
      titreErreur: 'Il y a eu une erreur.',
      denied: 'Accès non autorisé.',
      auth: 'Authentification non conforme.',
      forb: 'Autorisation non conforme.',
      other: 'Pas d\'accès à l\'application.',
      urlws: 'Le webservice n\'existe pas pour cet organisme !!!',
      curl: 'Appel au webservice impossible : exception CURL .',
      appli: 'Aucune données concernant les applications.',
      utilisateur: 'Aucune données concernant l\'utilisateur.',
      userappli: 'L\'utilisateur n\'a pas d\'application.',
      noprofil: 'Aucun profil de défini pour cette application.',
      httpremoteuser: 'La variable http_remote_user est introuvable.',
      remoteuser: 'La variable remote_user est introuvable.',
      whitelist: 'Le serveur Reverse Proxy n\'est pas dans la whitelist.',
      unauthorized: 'Autorisation refusée',
      bypassWS: {
        file: 'Pas de fichier disponible pour bypasser le webservice.'
      }
    }
  },
  // message pour la dialog Info
  info: {
    version: 'Version :',
    utilisateur: 'Utilisateur :',
    prenom: 'Prénom :',
    nom: 'Nom :',
    email: 'Email :',
    rolehabnims: 'Rôle HabNims :',
    organisme: 'Organisme :',
    codeApplication: 'Code application :'
  },
  //Contenu du Tooltip
  darkmode : {
    clair : 'Theme clair',
    sombre : 'Theme sombre'
  }
  


}
