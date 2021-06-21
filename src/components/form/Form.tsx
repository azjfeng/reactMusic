import React from 'react';
import '../../style/form/form.less';
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { value: "grapefruit" };
        this.handleChange = this.handleChange.bind(this);
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state.value)
    }
    handleChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    focusTextInput(){
        this.textInput.current.focus()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
                <label>
                    选择你喜欢的风味:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        )
    }
}

export default Form;