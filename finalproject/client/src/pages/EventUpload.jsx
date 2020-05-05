import React, { Component } from 'react'
import api from '../api'
import styled from 'styled-components'
import axios from 'axios'
const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EventUpload extends Component {
   /* constructor(props) {
        super(props)

        this.state = {
            name: '',
        }
    }*/

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    

    handleIncludeEvent = async () => {
        const { name } = this.state
        const payload = { name }
        console.log(payload)
        api.createTable(name).then(res => {
            window.alert(`Event created successfully`)
        })
        setTimeout(function () {
            window.location.href = "/events/list";
        }, 2);
        window.alert(`Event created successfully`)
    }
    constructor(props) {
        super(props)
        this.uploadFile = this.uploadFile.bind(this);
    }

    uploadFile(event) {
        let file = event.target.files[0];
        console.log(file);

        if (file) {
            const reader = new FileReader()
            reader.onload = event => console.log(event.target.result)
            reader.readAsText(file)
            console.log(event.target.result)
        }
       
    }

    render() {
        return <span>
            <input type="file"
                name="myFile"
                onChange={this.uploadFile} />
        </span>
    }
    //var my_javascript_variable = <? php echo json_encode($_POST['my_post'] ?? null) ?>;
     /*render() {
        const { name } = this.state

       return (
            <Wrapper>
                <Title>Create Event</Title>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                

                <Button onClick={this.handleIncludeEvent}>Add Event</Button>
                <CancelButton href={'/events/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }*/
}

export default EventUpload