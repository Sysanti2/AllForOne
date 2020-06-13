import React, {Component, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import {RiEdit2Line} from "react-icons/ri";
import {AiFillDelete} from "react-icons/ai";
class Wtable extends Component {
    constructor(props)
    {
        super(props);
    }
    data = () => {

        let header = [];
        if (!!this.props.data) 
            this.props.data.map((data) => {
                debugger;
                header.push(
                    <tr>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>
                            <div className="tableactions">
                                <div className="tableaction">
                                    <a href="#" class="btn btn-primary btn-txt-primary">
                                        <RiEdit2Line size={'1.5em'}/>
                                        Edit</a>
                                </div>
                                <div className="tableaction">
                                    <a href="#" class="btn btn-danger btn-txt-primary">
                                        <AiFillDelete size={'1.5em'}/>
                                        Delete</a>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            });
        return header;

    }
    columns = () => {
        let columnName = [];
        if (!!this.props.data) 
            Object.keys(this.props.data[0]).map((data) => {
                columnName.push(
                    <th>
                        {data}
                    </th>
                )
            })
        return columnName
    }
    render() {
        return (
            <Fragment>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {this.columns()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.data()}
                    </tbody>
                </Table>
            </Fragment>
        );
    }
}

export default Wtable;