import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  // root: {
  //   '& .MuiTextField-root': {
  //     margin: theme.spacing(1),
  //   },
  // },
  root: {
    margin: theme.spacing(1)
  },
  textField: {
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    // flexDirection: 'column',
    // alignItems: 'space-between',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));