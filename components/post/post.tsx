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
import { makeStyles, createStyles, withStyles } from '@material-ui/core/styles';

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

type PostProps = {
    postData: Post
}

const useStyles = makeStyles({
    postWrapper: {
        borderRadius: 16
    },
    postAvatar: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    postContent: {
        fontSize: 14,
        color: '#1B263D',
        marginBottom: 16
    },
    headerAuthor: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1B263D'
    },
    postTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1B263D',
        marginBottom: 10
    },
    postActionButton: {
        fontSize: 14,
        color: '#6C758A'
    },
    postTagElement: {
        padding: "8px 12px",
        marginRight: 10,
        marginBottom: 10,
        background: "#F6F6F6",
        borderRadius: 8,
        fontSize: 14,
        color: "#6C758A"
    }
})

const Post: React.FunctionComponent<PostProps> = ({ postData }) => {
  const classes = useStyles()

  const postTags = postData.tags.map((tag, index) => {
      return (
        <Grid item key={index} className={classes.postTagElement}>{tag.name} - {tag.weight}{tag.unit}</Grid>
      )
  })

  return (
    <Card className={classes.postWrapper}>
        <CardHeader
            avatar={
                <Link
                    href={`/user?id=${postData.author.id}`}
                    as={`/user/${postData.author.id}`}
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
                            alt="Remy Sharp"
                            className={classes.postAvatar}
                            src={postData.author.avatar}
                        />
                    </AvatarBadge>
                </Link>
            }
            action={
                <IconButton aria-label="settings">
                    <MoreHorizIcon/>
                </IconButton>
            }
            title={
                <Typography className={classes.headerAuthor} component="h2">
                    {postData.author.name}
                </Typography>
            }
            subheader={`${postData.type.name}-${postData.location.name}`}
        >
        </CardHeader>
        <Divider/>
        <CardContent>
            <Typography className={classes.postTitle} component="h3">
                {postData.header}
            </Typography>
            <Typography variant="body1" className={classes.postContent} component="p">
                {postData.content[0]}
            </Typography>
            <Typography className={classes.postContent} component="p">
                {postData.content[1]}
            </Typography>
            <Grid container>
                {postTags}
            </Grid>
        </CardContent>
        <CardActions>
            <Button startIcon={<VisibilityIcon/>} className={classes.postActionButton}>
                {postData.watches}
            </Button>
            <Button startIcon={<CommentsIcon/>} className={classes.postActionButton}>
                {postData.comments}
            </Button>
            <Button startIcon={<BookmarkIcon/>} className={classes.postActionButton}>
                {postData.marks}
            </Button>
        </CardActions>
    </Card>
  )
}
export default Post