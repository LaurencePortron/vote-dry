import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

const Login = () => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <TextField
        // error
        id='outlined-error-helper-text'
        label='Login'
        placeholder='Enter your login'
        // helperText='Incorrect entry.'
        variant='outlined'
      />
      <TextField
        // error
        type='password'
        id='outlined-error-helper-text'
        label='Password'
        placeholder='Enter your password'
        // helperText='Incorrect entry.'
        variant='outlined'
      />
    </form>
  );
};

export default Login;
