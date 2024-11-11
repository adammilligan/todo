import './App.css'
import {persistor, setupStore} from './redux/store.ts';

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import AppRouter from "./components/main/AppRouter.tsx";
import {ThemeProvider} from "@mui/material";
import {mainTheme} from "./config/themes";

function App() {
    return (
        <ThemeProvider theme={mainTheme}>
            <Provider store={setupStore}>
                <PersistGate persistor={persistor}>
                    <AppRouter/>
                </PersistGate>
            </Provider>
        </ThemeProvider>
    )
}

export default App
