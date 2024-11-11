import {Box} from '@mui/material';
import {Outlet} from 'react-router-dom';
import {QueryParamProvider} from 'use-query-params';
import {ReactRouter6Adapter} from 'use-query-params/adapters/react-router-6';

export const PageLayout = () => {
    const renderContent = () => (
        <QueryParamProvider adapter={ReactRouter6Adapter}>
            <Box minHeight='100vh' display='flex'>
                <Outlet/>
            </Box>
        </QueryParamProvider>
    );

    return renderContent();
};
