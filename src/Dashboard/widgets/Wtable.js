import React, {Component, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import {RiEdit2Line} from "react-icons/ri";
import {AiFillDelete} from "react-icons/ai";
import Button from 'react-bootstrap/Button';

class Wtable extends Component {
   
    constructor(props)
    {
        super(props);
    }
    handleClick=(event) => {
        this.props.action(event)
      };
   
    data = () => {

        let header = [];
        var handleToUpdate  =   this.props.handleToUpdate;
        if (!!this.props.data) 
            this.props.data.map((data,index) => {
           
                let val = Object.values(data),
                row =[];
                val.map( (dataRow)=> {
                    console.log(dataRow);
                    row.push( <td key={`td-${dataRow}`}>{dataRow}</td>)
                })
                header.push(
                    <tr key={data._id}>
                       {row}
                    
                        <td>
                            <div className="tableactions">
                                <div className="tableaction">
                                    <Button href="#" className="btn btn-primary btn-txt-primary" onClick={() => handleToUpdate(data._id,'Edit')}>
                                        <RiEdit2Line size={'1.5em'}/>
                                        Edit</Button>
                                </div>
                                <div className="tableaction">
                                    <Button href="#" className="btn btn-danger btn-txt-primary"  onClick={() => handleToUpdate(data._id,'Delete')}>
                                        <AiFillDelete size={'1.5em'}/>
                                        Delete</Button>
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
        
        if (!!this.props.data && this.props.data.length>0) 
            Object.keys(this.props.data[0]).map((data) => {
                columnName.push(
                    <th key={data}>
                        {data}
                    </th>
                )
            })
        return columnName
    }
    editeItem(id)
    {
        console.log(id);
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