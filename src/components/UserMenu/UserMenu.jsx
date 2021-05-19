import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { userSelectors, userOperations } from '../../redux/user';

const UserMenu = ({ name, onClick }) => {
  return (
    <div>
      <span>Welcome, {name}</span>
      <Button variant="outlined" color="inherit" onClick={onClick}>
        Logout
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: userSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onClick: userOperations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
