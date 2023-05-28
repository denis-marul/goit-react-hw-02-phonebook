import React, { Component } from "react";
import css from './App.module.css';
import { nanoid } from 'nanoid'
import { Section } from 'components/Section/Section';
import { Form } from 'components/Form/Form';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';

export class App extends Component{
  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: '',
  };
  
  formSubmitHandler = ({name, number}) => { 
      const isExsist = this.state.contacts.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isExsist) {
      return alert(isExsist.name + ' is already in contacts.'); 
    };
    const contact = {
      id: nanoid(5),
      name: name,
      number: number,
    };  
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value })
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }
  
  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visiableContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter),);

    return <div className={css.container}>
      <Section title={'Phonebook'}>
        <Form onSubmit={this.formSubmitHandler}/>
      </Section>
      <Section title={'Contacts'}>
        <Filter vlaue={filter} onChange={this.onChangeFilter} />
     <ContactsList 
          contacts={visiableContacts}
          onDeleteContact = {this.deleteContact}
        />
      </Section>
    </div>
  }
};

