import React from 'react'
import DefaultLayout from '../layouts/Default'
import Link from 'next/link';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Fab from '@material-ui/core/Fab';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import MenuItem from '@material-ui/core/MenuItem';
import RefreshIcon from '@material-ui/icons/Refresh'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  userListWrapper: {
    width: 648,
    borderRadius: 16
  },
  userListFormWrapper: {
    width: 312,
    borderRadius: 16
  },
  userListFormTitleCaption: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  textInput: {
    fontSize: 14,
    borderRadius: 16
  },
  userListAvatar: {
      '&:hover': {
          cursor: 'pointer'
      }
  },
})

const Users: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <DefaultLayout title="Пользователи">
      <Grid spacing={3} container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
            <Card className={classes.userListWrapper}>
              <CardHeader
                title={
                  <TextField fullWidth variant="outlined" className={classes.textInput} label="Поиск пользователей"/>
                }>
              </CardHeader>
              <CardContent>
                <List>
                  {[0, 1, 2, 3, 4, 5].map((value) => {
                    return (
                      <ListItem>
                        <ListItemAvatar>
                          <Link
                              href={`/user?id=${value}`}
                              as={`/user/${value}`}
                          >
                              <Badge
                                  overlap="circle"
                                  anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  className={'avatarBadge'}
                                  variant="dot"
                              >
                                  <Avatar
                                      className={classes.userListAvatar}
                                      alt="Remy Sharp"
                                      src="/static/avatar.jpeg"
                                  />
                              </Badge>
                          </Link>
                        </ListItemAvatar>
                        <ListItemText secondary="Москва">
                          Руслан Петров
                        </ListItemText>
                        <ListItemSecondaryAction>
                          <Fab
                            variant="extended"
                            color="primary"
                            size="small"
                            children={
                              <Typography style={{textTransform: 'none'}} component="span">
                                Подписаться
                              </Typography>
                            }
                            style={{background: 'none', boxShadow: 'none', color: '#0077FF', border: '1px solid #0077FF'}}
                          />
                        </ListItemSecondaryAction>
                        
                      </ListItem>
                    )
                  })}
                </List>
              </CardContent>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.userListFormWrapper}>
                <CardHeader
                    action={
                        <IconButton>
                            <RefreshIcon style={{color: "#0077FF"}}/>
                        </IconButton>
                    }
                    title={
                        <Typography className={classes.userListFormTitleCaption} component="h2">
                            Фильтр
                        </Typography>
                    }
                >
                </CardHeader>
                <Divider/>
                <CardContent>
                  
                  <Grid spacing={2} container direction="column" justify="flex-start" alignItems="stretch">
                    <Grid item>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        label="Населенный пункт"
                        >
                          <MenuItem key={1} value={1}>
                            Москва
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Санкт-Петербург
                          </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        label="Предпочитаемая рыба"
                        >
                          <MenuItem key={1} value={1}>
                            Карп
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Щука
                          </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        label="Техника ловли"
                        >
                          <MenuItem key={1} value={1}>
                            Супер-техника
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Такая себе
                          </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        label="Пол"
                        >
                          <MenuItem key={1} value={1}>
                            Мужской
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            Женский
                          </MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        fullWidth
                        select
                        variant="outlined"
                        label="Возраст"
                        >
                          <MenuItem key={1} value={1}>
                            18-24
                          </MenuItem>
                          <MenuItem key={2} value={2}>
                            25-30
                          </MenuItem>
                        </TextField>
                    </Grid>
                  </Grid>
                </CardContent>
                <CardActions>
                </CardActions>
              </Card>
        </Grid>
      </Grid> 
    </DefaultLayout>
  )
}
export default Users