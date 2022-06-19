//This is an example component so you can get things going and take a look at some of Material-UIs features.
//You should probably delete or modify this to start your project!
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    title: {
        fontSize: 30,
    },
});

export default function DemoCard() {
    const classes = useStyles();

    return (
        <Card>
            <CardContent>
                <Typography className={classes.title} color="textPrimary" gutterBottom>
                    This is a Card
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}
