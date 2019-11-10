import React from 'react'
import DefaultLayout from '../layouts/Default'
// import { useRouter } from 'next/router'
import { NextPage } from 'next' //NextPageContext
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Fab from '@material-ui/core/Fab';
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'

import Post from '../components/post/post'

interface UserPageProps {
    name: string,
}

const User: NextPage<UserPageProps> = ({ name }) => {
//   const router = useRouter();
//   const { id } = router.query
  
  const userPosts = [1, 2, 3, 4, 5, 6].map(() => {
      return (
        <Grid item className={'userPost'}>
            <Post postData={userPublicationsData[0]}/>
        </Grid>
      )
  })


  return (
    <DefaultLayout title={`${name}`}>
      <Grid container spacing={3} direction="row" justify="center" alignItems="stretch">
        <Grid item>
            <Grid spacing={3} container direction="column" justify="flex-start" alignItems="center">
                <Grid item>
                    <Paper className={'userInfo'}>
                        <Grid style={{height: "100%"}} container direction="column" justify="space-between" alignItems="stretch">
                            <Grid item>
                                <Grid container direction="column" justify="flex-start" alignItems="center">
                                    <Grid item className={'userAvatarWrapper'}>
                                        <Badge
                                            overlap="circle"
                                            className={'bigAvatarBadge'}
                                            anchorOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                            variant="dot"
                                        >
                                            <Avatar alt="Remy Sharp" src="/static/avatar.jpeg" className={'userAvatar'}/>
                                        </Badge>
                                    </Grid>
                                    <Grid item className={'userName'}>
                                        Руслан Петров
                                    </Grid>
                                    <Grid item className={'userCity'}>
                                        Санкт-Петербург
                                    </Grid>
                                    <Grid item>
                                        <Fab
                                            variant="extended"
                                            color="primary"
                                            size="small"
                                            style={{background: 'none', boxShadow: 'none', color: '#0077FF', border: '1px solid #0077FF'}}
                                        >
                                            Редактировать
                                        </Fab>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item style={{padding: "20px 36px 20px 36px", borderTop: "1px solid #F2F2F2"}}>
                                <Grid container direction="row" justify="space-between" alignItems="center">
                                    <Grid style={{textAlign: 'center'}} item>
                                        <Box className={'userCounter'}>
                                            232323
                                        </Box>
                                        <Box className={'userCounterCaption'}>
                                            Подписчиков
                                        </Box>
                                    </Grid>
                                    <Grid style={{textAlign: 'center'}} item>
                                        <Box className={'userCounter'}>
                                            144
                                        </Box>
                                        <Box className={'userCounterCaption'}>
                                            Подписки
                                        </Box>
                                    </Grid>
                                </Grid> 
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper className={'userConfig'}>
                        <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                            <Grid item>
                                <Grid container spacing={1} direction="column" justify="flex-start" alignItems="stretch">
                                    <Grid item className={'userConfigSectionCaption'}>
                                        Техника ловли
                                    </Grid>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item className={'userConfigSectionElement'}>Спиннинг</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Джиггинг</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Поплавочная удочка</Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container spacing={1} direction="column" justify="flex-start" alignItems="stretch">
                                    <Grid item className={'userConfigSectionCaption'}>
                                    Предпочитаемая рыба
                                    </Grid>
                                    <Grid item>
                                        <Grid container>
                                            <Grid item className={'userConfigSectionElement'}>Форель</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Щука</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Карась</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Созан</Grid>
                                            <Grid item className={'userConfigSectionElement'}>Белуга</Grid>
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
                {userPosts}
            </Grid> 
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}



User.getInitialProps = async () => {
    // fetching userdata here
    return {
        name: 'Руслан Петров'
    }
}

const userPublicationsData = [
    {
        author: {
            id: 1,
            name: 'Андрей Петров',
            avatar: '/static/avatar.jpeg'
        },
        date: new Date(),
        type: {
            id: 1,
            name: 'Отчет'
        },
        location: {
            id: 1,
            name: 'Дон'
        },
        header: 'Вот и мой краткий отчёт о рыбалке',
        content: [
            `Был у Вас с 7 по 9 мая. Сначала были в районе Никольского , на старой Волге . Вода разлилась и ловить там не получилось. Потом переехали на Хурдун за Икряным. Ловилась вобла, но очень мелкая. Всю выпустили обратно. Поймали сомика, тоже сфоткались и отпустили. Переехали на ерик Таранхол , там уже и остались.`,
            `Вобла мелкая , из 20 одна в ведро ( мерили линейкой, не хотелось проблем с законом). Поймали штук 150 от 18 до 25 см. Вообщем рыбалкой остались довольны, особенно сынишка , который первый раз так далеко выехал. Познакомились и обменялись телефонами с многими хорошими людьми.`
        ],
        tags: [
            {
                type: 'fish',
                name: 'Форель',
                weight: 3,
                unit: 'кг'
            },
            {
                type: 'fish',
                name: 'Щука',
                weight: 8.5,
                unit: 'кг'
            }
        ],
        comments: 15,
        marks: 323,
        watches: 1455
    }
]

export default User