import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { filterContact } from '../../redux/contacts';
import { contactsSelectors } from '../../redux/contacts';

const FindContacts = () => {
  const dispatch = useDispatch();

  const value = useSelector(contactsSelectors.getFilter);

  const onChange = evt => {
    dispatch(filterContact(evt.target.value));
  };

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        name="query"
        value={value}
        required
        onInput={onChange}
        className={styles.input}
        autoComplete="off"
      />
    </div>
  );
};

export default FindContacts;
