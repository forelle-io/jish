import React from 'react'
import DefaultLayout from '../layouts/Default'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box'
import Badge from '@material-ui/core/Badge'
import InputMask from 'react-input-mask'

import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from '@material-ui/pickers';

import TextField from '@material-ui/core/TextField';

const ProfileEdit: React.FunctionComponent = () => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date('2014-08-18T21:11:54'),
    );
    
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    const [tech] = React.useState([])

  return (
    <DefaultLayout title="Редактирование профиля">
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
            </Grid>  
        </Grid>
        <Grid item>
            <Grid spacing={3} container direction="column" justify="flex-start" alignItems="center">
                <Grid item>
                    <Card className={'editSection'}>
                        <CardHeader
                            title={
                                <Typography className={'headerAuthor'} component="h2">
                                    Профиль
                                </Typography>
                            }
                        >
                        </CardHeader>
                        <CardContent>
                            <Grid spacing={1} container direction="column" justify="flex-start" alignItems="stretch">
                                <Grid item>
                                    <TextField
                                        className={"profileFormInput"}
                                        id="nameField"
                                        label="Имя"
                                        fullWidth
                                        margin="normal"
                                        value={"Руслан"}
                                        variant="outlined"
                                    />
                                </Grid>
                                <Grid item>
                                    <TextField
                                        className={"profileFormInput"}
                                        id="lastnameField"
                                        label="Фамилия"
                                        fullWidth
                                        value={"Петров"}
                                        margin="normal"
                                        variant="outlined"
                                    />
                                </Grid> 
                                <Grid item>
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardDatePicker
                                            className={"profileFormInput"}
                                            disableToolbar
                                            variant="inline"
                                            format="MM/dd/yyyy"
                                            fullWidth
                                            margin="normal"
                                            id="date-picker-inline"
                                            label="Date picker inline"
                                            inputVariant="outlined"
                                            value={selectedDate}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid> 
                                <Grid item>
                                    <TextField
                                        className={"profileFormInput"}
                                        id="phoneField"
                                        label="Телефон"
                                        fullWidth
                                        margin="normal"
                                        name="phone"
                                        variant="outlined"
                                        value=""
                                    >
                                        <InputMask mask="+7\999 999-99-99" maskChar=" "/>
                                    </TextField>
                                </Grid> 
                                <Grid item>
                                    <TextField
                                        className={"profileFormInput"}
                                        id="cityField"
                                        label="Населенный пункт"
                                        margin="normal"
                                        fullWidth
                                        select
                                        value={1}
                                        variant="outlined"
                                    >
                                        <MenuItem key={1} value={1}>
                                            Москва
                                        </MenuItem>
                                        <MenuItem key={2} value={2}>
                                            Санкт-Петербург
                                        </MenuItem>
                                        <MenuItem key={3} value={3}>
                                            Омск
                                        </MenuItem>
                                    </TextField>
                                </Grid> 
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item>
                    <Card className={'editSection'}>
                        <CardHeader
                            title={
                                <Typography className={'headerAuthor'} component="h2">
                                    Техника ловли
                                </Typography>
                            }
                        >
                        </CardHeader>
                        <CardContent>
                            <Grid spacing={1} container direction="column" justify="flex-start" alignItems="stretch">
                                <Grid item>
                                    <TextField
                                        className={"profileFormInput"}
                                        id="lastnameField"
                                        label="Техника"
                                        select
                                        SelectProps={{multiple: true}}
                                        fullWidth
                                        value={tech}
                                        margin="normal"
                                        variant="outlined"
                                    >
                                        <MenuItem key={1} value={1}>
                                            Щука
                                        </MenuItem>
                                        <MenuItem key={2} value={2}>
                                            Ерш
                                        </MenuItem>
                                        <MenuItem key={3} value={3}>
                                            Белый амур
                                        </MenuItem>
                                    </TextField>
                                </Grid> 
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid> 
        </Grid>
      </Grid>
    </DefaultLayout>
  )
}
export default ProfileEdit