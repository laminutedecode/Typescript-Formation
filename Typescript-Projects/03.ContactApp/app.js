"use strict";
// Tableau pour stocker les contacts
let contacts = [];
// Sélectionner les éléments du DOM
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addBtn = document.getElementById('add-btn');
const contactsList = document.getElementById('contacts');
// Ajouter un contact à la liste
function addContact() {
    const name = nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    if (name && email && phone) {
        const contact = { name, email, phone };
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
function deleteContact(index) {
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
