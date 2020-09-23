import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Chats from "./Chats/Chats"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import TinderCards from "./TinderCards/TinderCards";
import SwipeButtons from "./SwipeButtons/SwipeButtons";
import ChatScreen from "./Chats/ChatScreen";

function App() {
    return (
        <div className="App">
            <Router>

                <Switch>
                    <Route path="/chat/:person">
                        <Header backButton="/chat"/>
                        <ChatScreen />
                    </Route>
                    <Route path="/chat">
                        <Header backButton="/"/>
                        <Chats/>
                    </Route>

                    {/*
                    // FONTOS!!! A home pagenek mindig az legalján kell lenni különben nem fogsz tudni ugrálgatni PAGE-ek között.
                    // Úgy kell ezt elképzelni mint a JS-t, hogy fenteről lefelé lesz beolvasva.
                    */}
                    <Route path="/">
                        <Header/>
                        <TinderCards />
                        <SwipeButtons />
                    </Route>

                </Switch>


            </Router>

        </div>
    );
}

export default App;
