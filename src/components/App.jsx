import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <div>

                <Switch>
                    {/* <Route exact path='/' render={}/> */}
                </Switch>
            </div>
        );
    }
}

export default App;