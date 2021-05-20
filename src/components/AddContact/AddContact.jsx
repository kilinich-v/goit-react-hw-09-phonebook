import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';
import { addContact } from '../../redux/contacts';

const AddContact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const handleName = evt => {
    setName(evt.target.value);
  };

  const [number, setNumber] = useState('');

  const handleNumber = evt => {
    setNumber(evt.target.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <span>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="John Doe"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleName}
          className={styles.input}
        />
      </label>
      <label className={styles.label}>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          value={number}
          placeholder="+38..."
          pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
          title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
          required
          onChange={handleNumber}
          className={styles.input}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default AddContact;
