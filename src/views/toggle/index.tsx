import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    TextField,
    Typography,
    Checkbox,
} from "@mui/material";
import {useAppDispatch, useAppSelector} from 'redux/hooks';
import {add, remove, toggleDone} from 'redux/slices/event';
import {useState} from "react";
import {Delete, ExpandMore} from "@mui/icons-material";

const ViewsToggle = () => {
    const state = useAppSelector(state => state.events);
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>('');

    const addEventHandler = () => {
        if (inputValue.trim()) {
            dispatch(add(inputValue));
            setInputValue('');
        }
    }

    const deleteEventHandler = (id: string) => {
        dispatch(remove(id));
    }

    const toggleTaskCompletion = (id: string) => {
        dispatch(toggleDone(id));
    }

    return (
        <Box display="flex" flexDirection="column" sx={{height: '100vh', justifyContent: 'flex-start'}}>
            <Typography variant='h2' color='primary'>Список задач</Typography>
            <Box display="flex" alignItems="center" sx={{alignItems: "start", marginBottom: 2}}>
                <TextField
                    variant="outlined"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    sx={{
                        width: '800px',
                        height: '56px',
                        color: '#000',
                        '& .MuiInputBase-root': {borderRadius: '8px 0 0 8px'},
                        '& .MuiOutlinedInput-notchedOutline': {borderRadius: '8px 0 0 8px'}
                    }}
                />
                <Button
                    variant='contained'
                    onClick={addEventHandler}
                    sx={{
                        height: '56px',
                        '&:last-child': {borderRadius: '0 8px 8px 0'}
                    }}
                >
                    Добавить
                </Button>
            </Box>
            <Accordion sx={{marginBottom: '20px', borderRadius: '8px'}}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='subtitle1'>Все задачи</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box display="flex" flexDirection="column">
                        {state.data.map((task) => (
                            <Box sx={{cursor: 'pointer'}}
                                 key={task.id}
                                 display="flex"
                                 alignItems="center"
                                 onClick={() => toggleTaskCompletion(task.id)}>
                                <Checkbox
                                    checked={task.isDone}
                                />
                                <Typography
                                    sx={{textDecoration: task.isDone ? 'line-through' : 'none'}}
                                >
                                    {task.description}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginBottom: '20px', borderRadius: '8px'}}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='subtitle1'>Невыполненные задачи</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {state.data.filter(task => !task.isDone).map((task) => (
                        <Box key={task.id} sx={{cursor: 'pointer'}} display="flex" alignItems="center"
                             onClick={() => toggleTaskCompletion(task.id)}>
                            <Checkbox
                                checked={task.isDone}
                            />
                            <Typography
                                sx={{textDecoration: task.isDone ? 'line-through' : 'none'}}
                            >
                                {task.description}
                            </Typography>
                        </Box>

                    ))}
                </AccordionDetails>
            </Accordion>
            <Accordion sx={{marginBottom: '20px', borderRadius: '8px'}}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography variant='subtitle1'>Выполненные задачи</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {state.data.filter(task => task.isDone).map((task) => (
                        <Box sx={{display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center'}} key={task.id}>
                            <Box sx={{cursor: 'pointer'}} display="flex" alignItems="center"
                                 onClick={() => toggleTaskCompletion(task.id)}>
                                <Checkbox
                                    checked={task.isDone}
                                />
                                <Typography
                                    sx={{textDecoration: task.isDone ? 'line-through' : 'none'}}
                                >
                                    {task.description}
                                </Typography>
                            </Box>
                            <Delete color='error'
                                    sx={{cursor: 'pointer'}}
                                onClick={() => deleteEventHandler(task.id)}>
                                Удалить
                            </Delete>
                        </Box>
                    ))}
                </AccordionDetails>
            </Accordion>
        </Box>
    );
};

export default ViewsToggle;
