// Définir une interface pour un contact
interface Contact {
    name: string;
    email: string;
    phone: string;
  }
  
  // Tableau pour stocker les contacts
  let contacts: Contact[] = [];
  

 // Sélectionner les éléments du DOM
const nameInput = document.getElementById('name') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const addBtn = document.getElementById('add-btn') as HTMLButtonElement;
const contactsList = document.getElementById('contacts') as HTMLUListElement;

  
  // Ajouter un contact à la liste
  function addContact() {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
  
    if (name && email && phone) {
      const contact: Contact = { name, email, phone };
      contacts.push(contact);
  
      displayContacts();
      clearInputs();
    }
  }
  
  // Afficher les contacts dans la liste
  function displayContacts() {
    contactsList.innerHTML = '';
  
    contacts.forEach((contact, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${contact.name}</span>
        <br>
        Email: ${contact.email}
        <br>
        Phone: ${contact.phone}
        <br>
        <button onclick="deleteContact(${index})">Supprimer</button>
      `;
      contactsList.appendChild(li);
    });
  }
  
  // Supprimer un contact de la liste
  function deleteContact(index: number) {
    contacts.splice(index, 1);
    displayContacts();
  }
  
  // Effacer les entrées de formulaire
  function clearInputs() {
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  }
  
  // Ajouter un écouteur d'événement pour le bouton "Ajouter"
  addBtn.addEventListener('click', addContact);
  