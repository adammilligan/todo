import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, Typography } from '@mui/material';
import { Delete, ExpandMore } from '@mui/icons-material';

import { IEvent } from '../../types/models/event';

interface IProps {
    headerText: string
    events: IEvent[]
    onComplete: (id: string) => void
    onDelete?: (id: string) => void
}

const TasksList = ({events, headerText, onComplete, onDelete}: IProps) => {
    return (
        <Accordion sx={{ marginBottom: '20px', borderRadius: '8px' }}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                <Typography variant='subtitle1'>
                    {headerText}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {events.map((task) => (
                    <Box
                        sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}
                        key={task.id}>
                        <Box sx={{ cursor: 'pointer' }}
                             display="flex"
                             alignItems="center"
                             onClick={() => onComplete(task.id)}>
                            <Checkbox
                                checked={task.isDone}
                            />
                            <Typography
                                sx={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
                            >
                                {task.description}
                            </Typography>
                        </Box>
                        {onDelete && (
                            <Delete color='error'
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => onDelete(task.id)}>
                                Удалить
                            </Delete>
                        )}
                    </Box>
                ))}
            </AccordionDetails>
        </Accordion>
    );
};

export default TasksList;
