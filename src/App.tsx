import './App.css'
import {persistor, setupStore} from 'redux/store';

import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import AppRouter from 'components/main/AppRouter';

function App() {
    return (
        <Provider store={setupStore}>
            <PersistGate persistor={persistor}>
                <AppRouter/>
            </PersistGate>
        </Provider>
    )
}

export default App
