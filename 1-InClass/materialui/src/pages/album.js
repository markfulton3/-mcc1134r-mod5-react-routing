import React from 'react';
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Typography, Container, Link } from '@material-ui/core/';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2)
    },
    hero: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    cardMedia: {
        paddingTop: '55%',
    },
    cardContent: {
        flexGrow: 1,
    },
}));

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright @'}
            <Link color="inherit" href="/">
                Albums Inc.
            </Link>
            { new Date().getFullYear()}
        </Typography>
    );
}

export default function Album() {
    const classes = useStyles();

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <> 
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon}/>
                    <Typography variant="h6" component="h2" color="inherit" noWrap>
                        Album Layout
                    </Typography>
                </Toolbar>
            </AppBar>
            <main>
               <div className={classes.hero}>
                   <Container maxWidth="sm">
                        <Typography variant="h2" component="h1" align="center" color="textPrimary" gutterBottom>
                            Album Layout
                        </Typography>
                        <Typography variant="h5" component="h5" align="center" color="textSecondary" gutterBottom>
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.
                        </Typography>
                        <div className={classes.heroButtons}>
                            <Grid container spacing={2} justify="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Main Call to Action
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" color="primary">
                                        Secondary Action
                                    </Button>
                                </Grid>
                            </Grid>    
                        </div>
                   </Container>
               </div> 
               <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card} xs={12} sm={6} md="4">
                                <Card>
                                    <CardMedia 
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Card Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography align="left" variant="h5" component="h2" gutterBottom >
                                            Heading
                                        </Typography>
                                        <Typography align="left">
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            View
                                        </Button>
                                        <Button size="small" color="primary">
                                            Edit
                                        </Button>
                                    </CardActions>    
                                </Card>
                            </Grid>    
                        ))}
                    </Grid>
               </Container>
            </main>
            <footer>
                <Typography variant="h6" align="center" color="textPrimary" component="h6">
                    Album Inc.
                </Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                  Something here to give the footer a purpose!
                </Typography>
                <Copyright />
            </footer>    
        </>
    );
}