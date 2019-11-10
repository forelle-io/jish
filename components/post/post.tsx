import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined'
import CommentsIcon from '@material-ui/icons/ChatBubbleOutlineOutlined'
import VisibilityIcon from '@material-ui/icons/Visibility'
import Typography from '@material-ui/core/Typography'
import CardContent from '@material-ui/core/CardContent'
import Divider from '@material-ui/core/Divider'
// import Router from 'next/router';
import Link from 'next/link';
// import { createStyles, withStyles } from '@material-ui/core/styles';

interface Tag {
    type: string,
    name: string,
    weight: number,
    unit: string
}

interface Post {
    author: {
        id: number,
        name: string,
        avatar: string
    },
    date: Date,
    type: {
        id: number,
        name: string
    },
    location: {
        id: number,
        name: string
    },
    header: string,
    content: Array<string>,
    tags: Array<Tag>,
    comments: number,
    marks: number,
    watches: number
}

// const AvatarBadge = withStyles(() =>
//   createStyles({

//   }),
// )(Badge);

type PostProps = {
    postData: Post
}

const Post: React.FunctionComponent<PostProps> = ({ postData }) => {

  const postTags = postData.tags.map((tag, index) => {
      return (
        <Grid item key={index} className={'postTagElement'}>{tag.name} - {tag.weight}{tag.unit}</Grid>
      )
  })

  return (
    <Card className={'postWrapper'}>
        <CardHeader
            avatar={
                <Link
                    href={`/user?id=${postData.author.id}`}
                    as={`/user/${postData.author.id}`}
                >
                    <Badge
                        overlap="circle"
                        className={'avatarBadge'}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        variant="dot"
                    >
                        <Avatar
                            alt="Remy Sharp"
                            className={'postAvatar'}
                            src={postData.author.avatar}
                        />
                    </Badge>
                </Link>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreHorizIcon/>
                </IconButton>
            }
            title={
                <Typography className={'headerAuthor'} component="h2">
                    {postData.author.name}
                </Typography>
            }
            subheader={`${postData.type.name}-${postData.location.name}`}
        >
        </CardHeader>
        <Divider/>
        <CardContent>
            <Typography className={'postTitle'} component="h3">
                {postData.header}
            </Typography>
            <Typography variant="body1" className={'postContent'} component="p">
                {postData.content[0]}
            </Typography>
            <Typography className={'postContent'} component="p">
                {postData.content[1]}
            </Typography>
            <Grid container>
                {postTags}
            </Grid>
        </CardContent>
        <CardActions>
            <Button startIcon={<VisibilityIcon/>} className={'postActionButton'}>
                {postData.watches}
            </Button>
            <Button startIcon={<CommentsIcon/>} className={'postActionButton'}>
                {postData.comments}
            </Button>
            <Button startIcon={<BookmarkIcon/>} className={'postActionButton'}>
                {postData.marks}
            </Button>
        </CardActions>
    </Card>
  )
}
export default Post