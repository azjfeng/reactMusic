import React from 'react';
import Clock from './clock/Clock.tsx';
import List from './list/List.tsx';
import Form from './form/Form.tsx';
import Music from './music/Music.tsx';
import ThemedButton from './context/Context.tsx';
import { ThemeContext, themes } from './context/tsx';

//一个使用 ThemedButton 的中间组件
function Toolbar(props) {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    );
}
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            theme: themes.light
        }
        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                        ? themes.light
                        : themes.dark,
            }));
        };
    }
    render() {
        const list = [1, 2, 3];
        return (
            <div className="App">
                <Clock />
                <List nums={list} />
                <Form />
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton />
                <Music />
            </div>
        )
    }
}

export default App;