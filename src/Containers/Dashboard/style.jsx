const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  avatar: {
  margin: '0 auto',
   width: '80px',
   height: '80px',
  },
  icon: {
   width: '80px',
   height: '80px',
  },
  accountIcon: {
   color: 'white',
  },
  formControl: {
   margin: theme.spacing(1),
   minWidth: 120,
  },
  customSelect: {
    textAlign: 'center',
  },
  account: {
    marginTop: 10,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    position: 'relative',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  }
});

export default styles;