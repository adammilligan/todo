import { Box, Button, TextField } from '@mui/material';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { add } from 'redux/slices/event';

interface IFormData {
    task: string;
}

const AddTaskInput = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit, reset } = useForm<IFormData>();

    const addEventHandler: SubmitHandler<IFormData> = (data) => {
        if (data.task.trim()) {
            dispatch(add(data.task));
            reset();
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit(addEventHandler)}
             sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <TextField
                variant="outlined"
                {...register('task', {required: true})}
                sx={{
                    width: '800px',
                    height: '56px',
                    color: '#000',
                    '& .MuiInputBase-root': { borderRadius: '8px 0 0 8px' },
                    '& .MuiOutlinedInput-notchedOutline': { borderRadius: '8px 0 0 8px' }
                }}
            />
            <Button
                type="submit"
                variant='contained'
                sx={{
                    height: '56px',
                    '&:last-child': { borderRadius: '0 8px 8px 0' }
                }}
            >
                Добавить
            </Button>
        </Box>
    );
};

export default AddTaskInput;
