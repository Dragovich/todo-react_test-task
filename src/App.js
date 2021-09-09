import React, {useState, useEffect} from "react";
import Task from "./Task";
import "./App.css";
import {Button, Container, makeStyles, TextField} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const getLocalStorage = () => {
    let list = localStorage.getItem("list");
    if (list) {
        return (list = JSON.parse(localStorage.getItem("list")));
    } else {
        return [];
    }
};

export const App = () => {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsEditing] = useState(false);
    const [editID, setEditID] = useState(null);
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) {
            if (name && isEditing) {
                setList(
                    list.map((item) => {
                        if (item.id === editID) {
                            return {...item, title: name};
                        }
                        return item;
                    })
                );
                setName("");
                setEditID(null);
                setIsEditing(false);
            } else {
                const newItem = {id: new Date().getTime().toString(), title: name, status: false};

                setList([...list, newItem]);
                setName("");
            }
        }
    }


    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id));
    };
    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsEditing(true);
        setEditID(id);
        setName(specificItem.title);
    };

    const changeCheck = (id, status) => {
        setList(
            list.map((item) => {
                if (item.id === id) {
                    return {...item, status: !status};
                }
                return item;
            })
        );
    }

    useEffect(() => {
        localStorage.setItem("list", JSON.stringify(list));
    }, [list]);

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <TextField id="standard-basic"
                           label="Введите задачу"
                           value={name}
                           fullWidth
                           onChange={(e) => setName(e.target.value)}/>
                <Button variant="contained"
                        size="small"
                        color="primary"
                        className={classes.margin}
                        type="submit">
                    {isEditing ? "Редактировать" : "Добавить"}
                </Button>
            </form>
            {list.length > 0 && (
                <div className="task-body">
                    <Task items={list}
                          removeItem={removeItem}
                          editItem={editItem}
                          changeCheck={changeCheck}/>
                </div>
            )}
        </Container>
    );
}