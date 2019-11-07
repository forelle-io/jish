import React from 'react'
import DefaultLayout from '../layouts/Default'
import Grid from '@material-ui/core/Grid'

import { makeStyles } from '@material-ui/core/styles';

import Post from '../components/post/post'

const useStyles = makeStyles({
  userPost: {
      width: 648
  },
})



const Reports: React.FunctionComponent = () => {
  const classes = useStyles()
  
  const userPosts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((...args) => {
    return (
      <Grid item key={args[1]} className={classes.userPost}>
          <Post postData={userPublicationsData[0]}/>
      </Grid>
    )
  })
  return (
    <DefaultLayout title="Reports">
      <Grid spacing={3} container direction="column" justify="flex-start" alignItems="center">
          {userPosts}
      </Grid> 
    </DefaultLayout>
  )
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

export default Reports