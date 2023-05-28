import React, { Component } from "react";
import css from './Form.module.css';
export class Form extends Component  {
  state = {
    name: '',
    number: '',
    
  }
    handleChange = event => {
        const {name,value} = event.currentTarget
        event.preventDefault();
        this.setState({
         [name]: value,
        })
    }

    handleSubmit = event => {
        const { name, number } = this.state;
        event.preventDefault();
         this.props.onSubmit({name: name, number: number})
         this.setState({ name: '', number: '' });
        
    }
  
    render() {
        const { name, number } = this.state;
        return <form className={css.form} onSubmit={this.handleSubmit}>
            <label className={css.label}>Name</label>
            <input
                className={css.formInput}
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label className={css.label}>Number</label>
            <input
                className={css.formInput}
                type="tel"
                name="number"
                value={number}
                onChange={this.handleChange}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <button className={css.submitBtn} type="submit">Add contact</button>
        </form>
    }
}

