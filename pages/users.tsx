import React from 'react'
import DefaultLayout from '../layouts/Default'
import Link from 'next/link';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Avatar from '@material-ui/core/Avatar'
import Badge from '@material-ui/core/Badge'
import Fab from '@material-ui/core/Fab';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


import { makeStyles, withStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  userListWrapper: {
    width: 648,
    borderRadius: 16,
    padding: "20px 24px 20px 24px"
  },
  userListFormWrapper: {
    width: 312,
    borderRadius: 16,
    padding: "20px 24px 20px 24px"
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

const Users: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <DefaultLayout title="Пользователи">
      <Grid spacing={3} container direction="row" justify="center" alignItems="flex-start">
        <Grid item>
          <Paper className={classes.userListWrapper}>
            <Grid spacing={2} container direction="column" justify="flex-start" alignItems="stretch">
              <Grid item>
                <TextField fullWidth className={classes.textInput} variant="outlined" label="Поиск пользователей"/>
              </Grid>
              <Grid item>
                <List>
                  {[0, 1, 2, 3, 4, 5].map((value) => {
                    return (
                      <ListItem>
                        <ListItemAvatar>
                          <Link
                              href={`/user?id=${value}`}
                              as={`/user/${value}`}
                          >
                              <AvatarBadge
                                  overlap="circle"
                                  anchorOrigin={{
                                      vertical: 'top',
                                      horizontal: 'right',
                                  }}
                                  variant="dot"
                              >
                                  <Avatar
                                      className={classes.userListAvatar}
                                      alt="Remy Sharp"
                                      src="/static/avatar.jpeg"
                                  />
                              </AvatarBadge>
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
                            style={{background: 'none', boxShadow: 'none', color: '#0077FF', border: '1px solid #0077FF'}}
                          >
                            Подписаться
                          </Fab>
                        </ListItemSecondaryAction>
                      </ListItem>
                    )
                  })}
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Paper className={classes.userListFormWrapper}>
            <Grid spacing={2} container direction="column" justify="flex-start" alignItems="stretch">
              <Grid item>
                Фильтр
              </Grid>
              <Grid item>
                <Grid spacing={2} container direction="column" justify="flex-start" alignItems="stretch">
                  <Grid item>
                    <FormControl fullWidth variant="outlined">
                      <InputLabel>
                        Населенный пункт
                      </InputLabel>
                      <Select
                        fullWidth
                        native>
                          <option value="">Москва</option>
                          <option value="">Москва</option>
                          <option value="">Москва</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth variant="outlined" label="Предпочитаемая рыба"/>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth variant="outlined" label="Поиск пользователей"/>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth variant="outlined" label="Поиск пользователей"/>
                  </Grid>
                  <Grid item>
                    <TextField fullWidth variant="outlined" label="Поиск пользователей"/>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid> 
    </DefaultLayout>
  )
}
export default Users