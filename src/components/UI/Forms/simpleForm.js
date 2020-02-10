import Form from "../../../util/classes/form";
import React from "react";
import Button from "../Buttons/SimpleButton";
import Input from "../FormInput/FormInput";
import Styled, {css} from "styled-components";

const FormCnt = Styled.form`
    display: flex;
    ${ ({direction}) => {
            let style;
            
            if(direction === "row")
                style = css`
                    flex-direction: row;
                    align-items: start;
                `;
            else style = css`
                    flex-direction: column;
                    align-items: center
                `;
            
            return style;
        } 
    };
`;

class SimpleForm extends Form {

    getInputs = () =>
        Object.entries(this.state.inputs)
            .map(([name, input]) => {
                return <Input {...input} name={name} onChange={this.updateValue} />;
})

    render() {
        const {
            props: {
                direction,
                submit: {
                    handler,
                    text}
            },
            state
        }
         = this;
        const inputs = this.getInputs();
        const parsedInputsState = {};

        Object.entries(state.inputs).forEach( ([name, input]) =>
            parsedInputsState[name] = input.value);

        return(
            <FormCnt direction={direction} noValidate>
                {inputs}
                <Button click={ev => handler(ev, parsedInputsState)}>
                    {text}
                </Button>
            </FormCnt>
        );
    }
}

SimpleForm.defaultProps = {
    direction: "column",
    submit: {
        text: "Submit"
    }
};

export default SimpleForm;