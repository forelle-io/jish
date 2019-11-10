import React from 'react'
import DefaultLayout from '../layouts/Default'
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box'
import Link from 'next/link';
import Badge from '@material-ui/core/Badge'

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

const useStyles = makeStyles({
    userInfo: {
        width: 312,
        height: 364,
        borderRadius: 16
    },
    userConfig: {
        width: 312,
        borderRadius: 16,
        padding: "24px"
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8
    },
    userCounter: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1B263D'
    },
    userCounterCaption: {
        fontSize: 14,
        color: '#6C758A'
    },
    userCity: {
        fontSize: 14,
        color: '#6C758A',
        marginBottom: 20
    },
    userPost: {
        width: 648
    },
    userAvatarWrapper: {
        marginTop: 32,
        marginBottom: 18
    },
    userAvatar: {
        width: 98,
        height: 98
    },
    userConfigSectionCaption: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    userConfigSectionElement: {
        padding: "8px 12px",
        marginRight: 10,
        marginBottom: 10,
        background: "#F6F6F6",
        borderRadius: 8,
        fontSize: 14,
        color: "#6C758A"
    }
})

const ProfileEdit: React.FunctionComponent = () => {
  const classes = useStyles()
  return (
    <DefaultLayout title="Редактирование профиля">
      <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
        <Grid item>
            <Grid spacing={3} container direction="column" justify="flex-start" alignItems="center">
                <Grid item>
                    <Paper className={classes.userInfo}>
                        <Grid style={{height: "100%"}} container direction="column" justify="space-between" alignItems="stretch">
                            <Grid item>
                                <Grid container direction="column" justify="flex-start" alignItems="center">
                                    <Grid item className={classes.userAvatarWrapper}>
                                    <AvatarBadge
                                        overlap="circle"
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        variant="dot"
                                    >
                                        <Avatar alt="Remy Sharp" src="/static/avatar.jpeg" className={classes.userAvatar}/>
                                    </AvatarBadge>
                                    </Grid>
                                    <Grid item className={classes.userName}>
                                        Руслан Петров
                                    </Grid>
                                    <Grid item className={classes.userCity}>
                                        Санкт-Петербург
                                    </Grid>
                                    <Grid item>
                                        <Link
                                            href={`/profile?action=edit`}
                                            as={`/profile/edit`}
                                        >
                                            <Fab
                                                variant="extended"
                                                color="primary"
                                                size="small"
                                                style={{background: 'none', boxShadow: 'none', color: '#0077FF', border: '1px solid #0077FF'}}
                                            >
                                                Редактировать
                                            </Fab>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item style={{padding: "20px 36px 20px 36px", borderTop: "1px solid #F2F2F2"}}>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    <Grid style={{textAlign: 'center'}} item>
                                        <Box className={classes.userCounter}>
                                            232323
                                        </Box>
                                        <Box className={classes.userCounterCaption}>
                                            Подписчиков
                                        </Box>
                                    </Grid>
                                    <Grid style={{textAlign: 'center'}} item>
                                        <Box className={classes.userCounter}>
                                            144
                                        </Box>
                                        <Box className={classes.userCounterCaption}>
                                            Подписки
                                        </Box>
                                    </Grid>
                                </Grid> 
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.userConfig}>
                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                            <Grid item>
                                <Grid container spacing={1} direction="column" justify="flex-start" alignItems="stretch">
                                    <Grid item className={classes.userConfigSectionCaption}>
                                        Техника ловли
                                    </Grid>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item className={classes.userConfigSectionElement}>Спиннинг</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Джиггинг</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Поплавочная удочка</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction="column" justify="flex-start" alignItems="stretch">
                                    <Grid item className={classes.userConfigSectionCaption}>
                                    Предпочитаемая рыба
                                    </Grid>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item className={classes.userConfigSectionElement}>Форель</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Щука</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Карась</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Созан</Grid>
                                            <Grid item className={classes.userConfigSectionElement}>Белуга</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid> 
                    </Paper>
                </Grid>
            </Grid>  
        </Grid>
        <Grid item>
            <Grid spacing={3} container direction="column" justify="flex-start" alignItems="center">
                
            </Grid> 
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}
export default ProfileEdit