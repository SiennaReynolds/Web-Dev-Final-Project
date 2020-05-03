import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

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

class Upload extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleIncludeEvent = async () => {
        const { name, rating, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime }

        await api.insertEvent(payload).then(res => {
            window.alert(`Event inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
            })
        })
    }

    render() {
        const { name, rating, time } = this.state
        return (
            <Wrapper>
                <div>
                    <h2>Upload an event</h2>
                    <form action="fileupload" method="post" enctype="multipart/form-data">
                        <p>Please note, only XLS, XLSX and CSV files are accepted.</p>
                        <input class="input" type="text" name="filename" placeholder="Event Name" /><br />
                        <input class="file" type="file" name="filetoupload" accept=".xls,.xlsx,.csv" /><br /><br />
                    </form>
                </div>
                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    class="input"
                    onChange={this.handleChangeInputName}
                />
                

                <Button onClick={this.handleIncludeEvent}>Add Event</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default Upload;