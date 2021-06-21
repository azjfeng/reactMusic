import React from 'react';
// import Clock from './clock/Clock';
import List from './list/List.tsx';
// import Form from './form/Form'
// import Music from './music/Music';
// import ThemedButton from './context/Context';
// import { ThemeContext, themes } from './context/tsx';
// 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//     return (
//         <ThemedButton onClick={props.changeTheme}>
//             Change Theme
//         </ThemedButton>
//     );
// }

class App extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     theme: themes.light
        // }
        // this.toggleTheme = () => {
        //     this.setState(state => ({
        //         theme:
        //             state.theme === themes.dark
        //                 ? themes.light
        //                 : themes.dark,
        //     }));
        // };
    }
    render() {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        return (
            <div className="App">
                {/* <Clock /> */}
                <List nums={nums} />
                {/* <Form />
                <Music />
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton /> */}
                {/* <Form /> */}
                {/* <Music /> */}
            </div>
        )
    }
}

export default App;