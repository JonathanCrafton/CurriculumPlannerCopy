import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  smMargin: {
    margin: theme.spacing(1),
  },
  actionDiv: {
    textAlign: 'center',
  },
  container: {
    marginTop: 10
  },
  title: {
    padding: '0 16px',
    marginLeft: 30,
  },
  card: {
    padding: '0 16px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
  },
  heading: {
    color: '#ffffff',
  },
  button: {
    marginLeft: 10,
    color: 'white',
    backgroundColor: '#ff5050',
  },
}));