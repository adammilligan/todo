import { Box, Typography } from '@mui/material';

import AddTaskInput from 'components/toggle/AddTaskInput';
import TasksList from 'components/toggle/TasksList.tsx';

import { remove, toggleDone } from 'redux/slices/event';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const ViewsToggle = () => {
    const state = useAppSelector(state => state.events);
    const dispatch = useAppDispatch();

    const deleteEventHandler = (id: string) => {
        dispatch(remove(id));
    }

    const toggleTaskCompletion = (id: string) => {
        dispatch(toggleDone(id));
    }

    return (
        <Box display="flex" flexDirection="column" sx={{height: '100vh', justifyContent: 'flex-start'}}>
            <Typography variant='h2' color='primary'>
                Список задач
            </Typography>
            <AddTaskInput/>
            <TasksList events={state.data}
                       headerText='Все задачи'
                       onComplete={toggleTaskCompletion}/>
            <TasksList events={state.data.filter(task => !task.isDone)}
                       headerText='Неыполненные задачи'
                       onComplete={toggleTaskCompletion}/>
            <TasksList headerText='Выполненные задачи'
                       events={state.data.filter(task => task.isDone)}
                       onComplete={toggleTaskCompletion}
                       onDelete={deleteEventHandler}/>
        </Box>
    );
};

export default ViewsToggle;
