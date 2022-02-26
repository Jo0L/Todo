import React, { useContext } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import CropFreeIcon from '@material-ui/icons/CropFree';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';

import { TaskContext } from '../../contexts/TaskContext';
import { Action } from '../../reducers/TaskReducer';

const useStyles = makeStyles((theme) => ({
    marked: {
        textDecoration: 'line-through'
    }
}));


const TaskList = (isDone) => {
    
    const { tasks, sortedTasks, dispatch } = useContext(TaskContext)
    const classes = useStyles();
    const onChecked = (id, isDone) => {
        dispatch({
            type: Action.CHECK_TASK,
            task: {
                id,
                isDone
            }
        })
    };
    const filteredTasks= tasks.filter(task => task.isDone === isDone);
    return (
        <List>
            {filteredTasks.map((tasks) => {
                return (
                    <ListItem key={tasks.id}
                        role={undefined}
                        dense
                        button
                        onClick={() => {
                            onChecked(tasks.id, !tasks.isDone)
                        }
                        }>
                        <IconButton color="primary">
                            {
                                !tasks.isDone ? (<CropFreeIcon />) : (<LibraryAddCheckIcon />)
                            }
                        </IconButton>
                        <ListItemText
                            secondaryTypographyProps={{style: {textShadow: 'none' }}}
                            primary={tasks.data}
                            secondary={tasks.date}
                            className={tasks.isDone ? classes.marked : ''} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="comments"
                                onClick={() => {
                                    dispatch({
                                        type: Action.REMOVE_TASK,
                                        id: tasks.id
                                    })
                                }}>
                                <DeleteOutlineIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TaskList;