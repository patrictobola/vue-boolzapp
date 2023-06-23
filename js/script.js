console.log('JS OK')

// Estrapolo il metodo createApp 
const { createApp } = Vue;

// Starto l'app Vue 
const app = createApp({
    data() {
      return {
        user: {
          name: 'Nome Utente',
          avatar: '_io'
        },
        contacts: [
          {
            id: 1,
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent'
              },
              {
                id: 3,
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received'
              }
            ],
          },
          {
            id: 2,
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [
              {
                id: 1,
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent'
              },
              {
                id: 2,
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received'
              },
              {
                id: 3,
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent'
              }
            ],
          },
          {
            id: 3,
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [
              {
                id: 1,
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received'
              },
              {
                id: 2,
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent'
              },
              {
                id: 3,
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received'
              }
            ],
          },
          {
            id: 4,
            name: 'Alessandro B.',
            avatar: '_4',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received'
              }
            ],
          },
          {
            id: 5,
            name: 'Alessandro L.',
            avatar: '_5',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received'
              }
            ],
          },
          {
            id: 6,
            name: 'Claudia',
            avatar: '_6',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received'
              },
              {
                id: 3,
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent'
              }
            ],
          },
          {
            id: 7,
            name: 'Federico',
            avatar: '_7',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received'
              }
            ],
          },
          {
            id: 8,
            name: 'Davide',
            avatar: '_8',
            visible: true,
            messages: [
              {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received'
              },
              {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent'
              },
              {
                id: 3,
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received'
              }
            ],
          }
        ],
        searchValue: '',
        newMessage: '',
        currentId: 1,
        currentMessageId: 0,
      }
      
      
    },

    computed: {
      // Filtro i contatti e li aggiorno automaticamente in base alla barra di ricerca 
      filteredContacts () {
        const word = this.searchValue.toLowerCase();
        return this.contacts.filter((contact) => {
          return contact.name.toLowerCase().includes(word)
        })
      },

      // Genero un nuovo id per ogni nuovo messaggio 
      newIdMessage () {
        let highestId = this.currentContact.messages.reduce((result, cv) => cv.id > result ? cv.id : result, 0)
        return ++highestId
      },

      // Filtro gli ultimi messaggi  
      filteredMessages () {
        this.contacts.messages[0].message
      },


      // Prendo l'ultimo messaggio di un utente
      lastMessageId () {
        let highestId = this.currentContact.messages.reduce((result, cv) => cv.id > result ? cv.id : result, 0)
        return highestId
      },


      currentContact(){
        return this.contacts.find((contact) =>  contact.id === this.currentId);
      },
    },

    methods: {
      // Metodo per importare id di un contatto 
      setCurrentContactID(target) {
        this.currentId = target;
      },
      // Resettare id messaggio al click fuori dalla casella messaggio 
      resetCurrentMessageID() {
        this.currentMessageId = 0
      },
      // Metodo per importare id di un messaggio 
      setCurrentMessageID(target) {
        this.currentMessageId = target;
      },
      // Seleziono un contatto 
      isSelected(target) { 
        if (target === this.currentId)
        return true

      },
      // Al click rimuovo un contatto dalla lista 
      removeMessage(target){
        return this.currentContact.messages = this.currentContact.messages.filter(message => target !== message.id)  
      },

      // Pusho all'interno dell'oggetto dedicato un nuovo messaggio
      addNewMessage (statusMessage, message) {
        const newMessage = {
          id: this.newIdMessage,
          date: '',
          message: message,
          status: statusMessage
        }
        if (message.trim() !== ''){

          this.currentContact.messages.push(newMessage)
          
          this.newMessage = ''
          this.addReceivedMessage('received');
        }
      },

      // All'invio del messaggio imposto un timer e ricevo una risposta statica dopo 1 secondo di attesa

      // TODO fix 
      // Ho provato a centralizzarla ma se risfrutto il metodo sopra il setTimeout ogni secondo stampa un messaggio ricevuto.
      addReceivedMessage (statusMessage) {
        setTimeout(() => {
          const newMessage = {
            id: this.newIdMessage,
            date: '',
            message: 'Ok, daje!',
            status: statusMessage
          }
          
          this.currentContact.messages.push(newMessage)
        },1000)
      },


      
    },
  })
  app.mount("#app");
