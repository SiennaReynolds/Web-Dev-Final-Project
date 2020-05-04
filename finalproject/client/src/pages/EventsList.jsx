import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateEvent extends Component {
    updateUser = event => {
        event.preventDefault()
        //make it so that this does the server checkin.
        window.location.href = `/events/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>check-in</Update>
    }
}

class DeleteEvent extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to delete the event ${this.props.id} permanently?`,
            )
        ) {
            api.deleteEventById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class EventsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            events: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllEvents().then(events => {
            this.setState({
                events: events.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { events, isLoading } = this.state

        const columns = [
            {
                Header: 'PantherID',
                accessor: 'Panther ID',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'First Name',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'Last Name',
                filterable: true,
            },
            {
                Header: 'Department',
                accessor: 'Department',
                filterable: true,
            },
            {
                Header: 'Level',
                accessor: 'Level',
                filterable: true,
            },
            {
                Header: 'Campus',
                accessor: 'Campus',
                filterable: true,
            },
            {
                Header: 'Degree',
                accessor: 'Degree',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'Email',
                filterable: true,
            },
            {
                Header: 'College',
                accessor: 'College',
                filterable: true,
            },
            {
                Header: 'Year',
                accessor: 'Year',
                filterable: true,
            },
            {
                Header: 'Check-in',
                accessor: 'checkin',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateEvent id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        /*if (!events.length) {
            showTable = false
        }*/

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={events}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default EventsList
