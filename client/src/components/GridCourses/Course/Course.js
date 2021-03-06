import React from 'react';
import { Popper, Box, Typography, IconButton, Paper, Grow } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './styles';
    
const Course = ({ course, style }) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
        <Paper square={true} className={style} >
            <Box onClick={handleClick}>
                <Typography className={classes.id} variant="body1">{course.CourseID}</Typography>
                <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
                <Typography className={classes.credits} variant="body2">{course.CreditHours} Credits</Typography>
            </Box>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <Grow in>
                    <Paper className={classes.paper}>
                        <IconButton onClick={handleClose} className={classes.closeicon}>
                            <CloseIcon/>
                        </IconButton>
                        <div>
                        <Typography className={classes.title1} variant="body1">{course.CourseID}</Typography>
                        </div>
                        <Typography className={classes.title} variant="body1">{course.CourseTitle}</Typography>
                        <div>
                        <Typography className={classes.details} variant="body2">{course.CourseDescription}</Typography>
                        </div>
                        <div className={classes.details2}>
                            <Typography className={classes.details} variant="body2">Minimum Grade: {course.MinimumGrade}</Typography>
                            <Typography className={classes.details} variant="body2">Credit Hours: {course.CreditHours}</Typography>
                        </div>
                        <div className={classes.details2}>
                            <Typography className={classes.details} variant="body2">Prerequisites: {course.PreReqs.map((course) => course + ' ')}</Typography>
                            <Typography className={classes.details} variant="body2">Corequisites: {course.CoReqs.map((course) => course + ' ')}</Typography>
                        </div>
                    </Paper>
                    </Grow>
                </Popper>
        </Paper>
    );
}

export default Course;