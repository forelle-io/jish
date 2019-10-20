import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
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
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Router from 'next/router';
import { useRouter } from 'next/router'
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

export default function PrimarySearchAppBar() {

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
          <Box>
              <IconButton style={{marginRight: '42.5px'}} aria-label="search" color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton style={{marginRight: '42.5px'}} aria-label="show 17 new notifications" color="inherit">
                <Badge badgeContent={17} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
          </Box>
          <Box>
            <Grid container justify="center" alignItems="center">
              <Avatar alt="Remy Sharp" src="/static/avatar.jpeg"/>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                size="small"
              >
                <ExpandMoreIcon />
              </IconButton>
            </Grid>
          </Box>       
        </Toolbar>
      </AppBar>
  );
}