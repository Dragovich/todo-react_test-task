import React from "react";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    root: {
        width: '100%',
        maxWidth: 600,
        backgroundColor: theme.palette.background.paper,
    },
    multiline: {
        '& span': {
            width: '80%',
        },
        wordWrap: 'break-word',
    }
}));

const Task = ({items, removeItem, editItem}) => {
    const classes = useStyles();

    return (
        <List component="nav" aria-label="main mailbox folders" className={classes.root}>
            {items.map((item) => {
                const {id, title} = item;
                return (
                    <ListItem key={id} alignItems="flex-start">
                        <ListItemText disableTypography={false}
                                      primaryTypographyProps={{ style: { whiteSpace: "normal" } }}
                                      className={classes.multiline}>
                            {title}
                        </ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="delete"
                                        className={classes.margin}
                                        onClick={() => editItem(id)}>
                                <EditIcon fontSize="small"/>
                            </IconButton>
                            <IconButton aria-label="delete"
                                        className={classes.margin}
                                        onClick={() => removeItem(id)}>
                                <DeleteIcon fontSize="small"/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
};

export default Task;