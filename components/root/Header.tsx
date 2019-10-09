import React from 'react';
import Box from '@material-ui/core/Box';
import Link from 'next/link';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
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

const HeaderLinks = headerLinksParams.map(link => {
  return (
    <Link
      href={link.href}
    >
      {link.label}
    </Link>
  )
})

export default function PrimarySearchAppBar() {

  return (
      <AppBar position="static" color="default">
        <Toolbar>
          <Box>
            <img src="/static/logos/Forelle.io.png" alt="" width="150px;"/>
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