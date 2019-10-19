import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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
          <Box>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
            >
              Добавить
            </Button>
          </Box>
          <Box>
            AAaaaaa
          </Box>       
        </Toolbar>
      </AppBar>
  );
}