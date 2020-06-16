import React, {Component, Fragment} from 'react';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Dashboard/Admin.css';
import {RiAddLine} from "react-icons/ri";
import Wtable from './widgets/Wtable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const _ = require('lodash');
class MyVerticallyCenteredModal extends Component {
    
  state={
    SaveBack: false
  }
    constructor(props){
        super(props);
        this.LabelEl =  React.createRef();  
    }

    submitHandler = (event,mode='')=> {
        event.preventDefault(); 
        const label =  this.LabelEl.current.value
        let requestBody = {
            query: `
            mutation{
                creatCategory(categoryInput:{label:"${label}"})
                {
                    _id
                    label
                } 
              }
            `
        };
        if (this.props.dataAction ==='Edit' )
        {
            requestBody = {
                query: `
                mutation{
                    updateCategory(_id:"${this.props.data.data.getCategoryById[0]._id}",categoryInput:{label:"${label}"})
                    
                    {
                        _id
                        label
                    }  
                  }
                `
            };
        }
        fetch('http://localhost:4000/graphql', { 
            method: 'POST',
            body : JSON.stringify(requestBody) ,
            headers: {
                'Content-Type': 'application/json',
            }
         } )  .then(res => {
            if (res.status !== 200 && res.status !== 201 )
            {
                throw new Error ('Cants creat new category')
            }
            return res.json();
        })
        .then(resData => {
           this.props.action(resData)
           if ( mode==='SaveBack')
           {document.getElementById("dataform").reset();
            this.forceUpdate();
           }
         } )
        .catch( err=>{
            console.log( err) ;
        });

    }
    addAndSave= (e)=>{
        this.submitHandler(e,'SaveBack')
    };
   
    render() {
    return (
        <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Category
                </Modal.Title>
            </Modal.Header>
            <form  id="dataform"  onSubmit={this.submitHandler}>
            <Modal.Body>
                    <label className="txt" htmlFor="uname">Label</label>
                    <input type="text"  defaultValue={this.props.dataAction ==='Edit' ? this.props.data.data.getCategoryById[0].label: ''}   placeholder="Label" name="ulabel" ref={this.LabelEl} required/>
            </Modal.Body>
            <Modal.Footer>
                <div className="modalFooter">
                    <Button variant="danger" size="sm" onClick={this.props.onHide}>Close</Button>
                   {this.props.dataAction ==='Add' ?  <Button  variant="success" onClick={this.addAndSave} size="sm">Save and Back</Button>:null }
                    <Button variant="primary" type="submit"  value="Reset" size="sm"> {this.props.dataAction ==='Add'? 'Save': 'Edit'} 
                    </Button>
                </div>
            </Modal.Footer>
            </form>
        </Modal>
    )};
}

class categories extends Component {

    constructor(props){
        super(props)
        this.handler = this.handler.bind(this)
        var handleToUpdate  = this.handleToUpdate.bind(this);
    }
    state = {
        modalShow: false,
        setModalShow: false,
        data : [],
        newcat: null,
        Selectedcategory:null,
        dataAction:''
    }
    getCategory =(id,action)=>{
        let requestBody = {
            query: `
            query{
                getCategoryById(_id:"${id}")
                {
                    _id
                    label
                }
                
              }
            `
        };
        if ( action=== 'Delete')
        {
            requestBody= {
                query: `
                mutation{
                    deleteCategory(_id:"${id}")
                    {
                      _id
                      label
                    }
                    
                  }
                `
            };
        }
        fetch('http://localhost:4000/graphql', { 
            method: 'POST',
            body : JSON.stringify(requestBody) ,
            headers: {
            
                'Content-Type': 'application/json',
            }
         } )  .then(res => {
        
            if (res.status !== 200 && res.status !== 201 )
            {

                throw new Error ('Cants get new category')
            }
            return res.json();

        })
        .then(resData => {
          this.setState({
            newcat:resData,
            dataAction :action,
            Selectedcategory:resData
          })
         } )
        .catch( err=>{
            console.log( err) ;
        });
    }
    ShowModal = () => {
        this.setState({
            modalShow: !this.state.modalShow
        })
    };
    handleToUpdate(id,action){
    
        this.getCategory(id,action);
        if (action=== 'Edit')
        {
              this.ShowModal(true)
        }
        else {
            this.forceUpdate();
        }
    }
    addcategory = ()=>{
        this.setState({
            dataAction: 'Add'
           })
        this.ShowModal()
    };
    handler(v) {
        this.setState({
            newcat: v
        });
       // this.ShowModal(false)
      }
    LoadData = ()=> {
        let requestBody = {
            query: `
            query{
                categories
                {
                    _id
                    label
                }
                
              }
            `
        };
        fetch('http://localhost:4000/graphql', { 
            method: 'POST',
            body : JSON.stringify(requestBody) ,
            headers: {
            
                'Content-Type': 'application/json',
            }
         } )  .then(res => {
        
            if (res.status !== 200 && res.status !== 201 )
            {

                throw new Error ('Cants creat new category')
            }
            return res.json();

        })
        .then(resData => { 
            console.log(resData)
            this.setState({data:resData.data.categories})
        } )
        .catch( err=>{
            console.log( err) ;
        });
    }
    componentDidUpdate(prevProps, prevState){
     
        if (!_.isEqual(prevState.newcat,this.state.newcat))
        {
            this.LoadData();
        }
        
    }
    componentWillMount(){

        this.LoadData();
    }
    render() {
        return (
            <Fragment>
                <div id="page-top">
                    <div id="wrapper">
                        <AppSidebar active='categories'/>
                        <div className="rowContainer">
                            <AppHeader/>
                            <div className="widgetcontainer-nopadding">
                                <a
                                    href="#"
                                    className="btn btn-success btn-txt-primary"
                                    variant="primary"
                                    onClick={this.addcategory}>
                                    <RiAddLine size={'2em'}/>
                                    Add New Category</a>
                            </div>

                            <MyVerticallyCenteredModal
                                show={this.state.modalShow}
                                onHide={() => this.ShowModal(false)}
                                action={(e) => this.handler(e)}
                                data={this.state.Selectedcategory}
                                dataAction={this.state.dataAction}
                                />
                            <div className="widgetcontainer ">
                                <div className="card100">
                                    <Wtable data={this.state.data}
                                    handleToUpdate={(id,action) => this.handleToUpdate(id,action)}
                                   
                                    />
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default categories;