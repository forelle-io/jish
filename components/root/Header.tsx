import React from 'react';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Router from 'next/router';
import Modal from '@material-ui/core/Modal'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { loginFetchData, logoutFetchData } from '../../store/auth/actions';

// TODO:
// Добавить описание и комментарии, написать типы для данных
const headerLinksParams = [
  {
    label: "Пользователи",
    href: "/users"
  },
  {
    label: "Отчеты",
    href: "/reports"
  },
  {
    label: "Выезды",
    href: "/departures"
  },
  {
    label: "Водоемы",
    href: "/ponds"
  },
  {
    label: "Организации",
    href: "/organizations"
  }
]

const AvatarBadge = withStyles(() =>
  createStyles({
    badge: {
      backgroundColor: '#44b700',
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: '$ripple 1.2s infinite ease-in-out',
        border: '1px solid #44b700',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }),
)(Badge);


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      color: '#6C758A'
    },
    activeButton: {
      color: '#0077FF',
      backgroundColor: '#ECF5FF',
      fontWeight: 800,
      "&::before": {
        width: '6px',
        height: '6px',
        borderRadius: '3px',
        backgroundColor: '#0077FF',
        position: 'absolute',
        bottom: -10,
        content: "''"
      }
    },
    input: {
      display: 'none',
    },
  }),
);

const HeaderLink = ({ children, href }) => {
  const router = useRouter()
  const classes = useStyles()

  const isActiveLink = router.pathname === href

  return (
    <Button
      className={isActiveLink ? classes.button + ' ' + classes.activeButton : classes.button}
      onClick={() => Router.push(href)}
    >
      {children}
      {/* <style jsx>

      </style> */}
    </Button>
  )
}



const HeaderLinks = () => {
  
  const linkElements = headerLinksParams.map(link => {
    return (
      <HeaderLink href={link.href}>
        {link.label}
      </HeaderLink>
    )
  })
  return linkElements
}

function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openLoginModal, setOpenLoginModal] = React.useState(false)
  const dispatch = useDispatch()
  const token = useSelector(state => state.authReducer.loginUser.token)
  const isOnline = useSelector(state => state.authReducer.loginUser.isOnline)
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLoginModalOpen = () => {
    setOpenLoginModal(true)
  }
  const handleLoginModalClose = () => {
    setOpenLoginModal(false)
  }
  const isMenuOpen = Boolean(anchorEl);
  
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={'profile-menu'}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem>Войти</MenuItem>
      <MenuItem onClick={handleMenuClose}>{token}</MenuItem>
      <MenuItem onClick={() => dispatch(logoutFetchData())}>Выйти</MenuItem>
    </Menu>
  );
  
  return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Box>
            <Link href="/">
            <img src="/static/logos/Forelle.io.png" alt="" width="80px;"/>
            </Link>
            
          </Box>
          <Box>
            {HeaderLinks}
          </Box>
          <Box style={{flexGrow: 1}}>
            
          </Box>
          {isOnline ? 
            <Box style={{marginRight: '42.5px'}}>
              <Fab
                variant="extended"
                color="primary"
                size="medium"
                style={{background: 'none', boxShadow: 'none', color: '#0077FF', border: '1px solid #0077FF'}}
              >
                <AddIcon />
                Создать
              </Fab>
            </Box>
              : null }
            <Box>
              <IconButton style={{marginRight: '42.5px'}} aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              {isOnline ? 
                <IconButton style={{marginRight: '42.5px'}} aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              : null }

          </Box>
          <Box>
            <Grid container justify="center" alignItems="center">
              {isOnline ? 
              <Box>
                <AvatarBadge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src="/static/avatar.jpeg"/>
                </AvatarBadge>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  size="small"
                  onClick={handleProfileMenuOpen}
                >
                  <ExpandMoreIcon />
                </IconButton>
              </Box>
              : <Box>
                  <Button onClick={handleLoginModalOpen} color="inherit">Login</Button>
                  <Button color="inherit">Registration</Button>
                </Box>
              }
            </Grid>
          </Box>       
        </Toolbar>
        <Modal
          aria-labelledby="Login title"
          aria-describedby="Login description"
          open={openLoginModal}
          onClose={handleLoginModalClose}>
            <button onClick={() => dispatch(loginFetchData({phone: '8977', password: 'qwerty'}))}>Start Login!</button>
        </Modal>
        {renderMenu}
      </AppBar>
  );
}

export default PrimarySearchAppBar