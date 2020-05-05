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
const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

class UpdateEvent extends Component {
    updateUser = async event => {
        event.preventDefault()
       
        window.location.href = `/events/update/${this.props.id}`
    }
    handleUpdateEvent = async () => {
        const id = this.props.id
        const checkin = false
        const payload = { checkin }
        await api.updateEventById(id, payload).then(res => {
            
            this.setState({
                checkin: '',
            })
            setTimeout(function () {
                window.location.href = `./view`;
            }, 2);
            window.alert(`Event updated successfully`)
        })
    }
    render() {
        return <Update className="radio" onClick={this.handleUpdateEvent}>Update Attendance</Update>
    }
}


class EventList extends Component {
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
        await api.getAllEvents(this.props.id ).then(events => {
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
                id: 'checkin',
                accessor: d => d.checkin.toString().substring(0,1).toUpperCase(),
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

                <h1>Update this table</h1>
                {showTable && (
                    <ReactTable
                        data={events}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={11}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default EventList
