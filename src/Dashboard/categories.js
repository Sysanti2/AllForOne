import React, {Component, Fragment, useState, useEffect} from 'react';
import {Mutation, useMutation, useQuery, useLazyQuery} from 'react-apollo';
import gql from 'graphql-tag';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import 'bootstrap/dist/css/bootstrap.css';
import '../style/Dashboard/Admin.css';
import {RiAddLine} from "react-icons/ri";
import Wtable from './widgets/Wtable';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const _ = require('lodash');

const UPLOAD_PHOTO = gql `
  mutation ($profilePic: [Upload!]!) {
    uploadFile(profilePic: $profilePic)
    {
    filename
    mimetype
    encoding 
    }
  
  
  }
`;
const CREAT_CATEGORY = gql `
 mutation creatCategory($label: String!,$picture: [Upload!]!) {
    creatCategory(categoryInput: {label: $label,picture:$picture}) 
    {
     _id
    label  
    picture
    }
 
  }
  `;
  
const GETCAT_BYID = gql `

query getCategoryById($id:ID!){
    getCategoryById(_id:$id)
            {
            _id
            label
                }
                
              }`
const DELETE_CATEGORY = gql `
 mutation deleteCategory($id:ID!) {
    deleteCategory(_id:$id)
  {
    _id
    label
  }
 
  }


`
const MyVerticallyCenteredModal = (props) => {
  
    let LabelEl = React.createRef();
    let Image =  React.createRef();
    function UploadFile() {
     
      
        function onChange({
            target: {
                validity,
                files: [profilePic]
            }
        }) {
            if (validity.valid) {
              Image  = [profilePic]
            }

        }

        return <input type="file"  onChange={onChange}/>;
    }

    const [mutate] = useMutation(CREAT_CATEGORY);
    const AddCategory = () => {
        const label = LabelEl.current.value;

        mutate({variables: {
                'label' : label, 'picture': Image
            }}).then(data => {
            props.action(data.data.creatCategory._id)
            
        })
            props.onHide()
    };
    const submitHandler = (event, mode = '') => {
        event.preventDefault();

    }
    const addAndSave = (e) => {

        submitHandler(e, 'SaveBack')
    };
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Category
                </Modal.Title>
            </Modal.Header>
            <form id="dataform" onSubmit={submitHandler}>
                <Modal.Body>
                    <label className="txt" htmlFor="uname">Label</label>
                    <input
                        type="text"
                        defaultValue={props.dataAction === 'Edit'
                        ? _.isEmpty(props.data)
                            ? ''
                            : props.data.data.getCategoryById[0].label
                        : ''}
                        placeholder="Label"
                        name="ulabel"
                        ref={LabelEl}
                        required/>

                    <UploadFile/>

                </Modal.Body>
                <Modal.Footer>
                    <div className="modalFooter">
                        <Button variant="danger" size="sm" onClick={props.onHide}>Close</Button>
                        {props.dataAction === 'Add'
                            ? <Button variant="success" onClick={AddCategory} size="sm">Save and Back</Button>
                            : null}
                        <Button variant="primary" type="submit" value="Reset" size="sm">
                            {props.dataAction === 'Add'
                                ? 'Save'
                                : 'Edit'}
                        </Button>
                    </div>
                </Modal.Footer>
            </form>
        </Modal>
    )
}
  
const Categories = () => {
 
    var [modalShow,setModalShow] = useState(),
        [data, setData] = useState(),
        [Selectedcategory, setSelectedcategory] = useState(),
        [newcat, setNewcat] = useState(),
        [currentCategory, setCurrentCategory] = useState(),
        [dataAction, setDataAction] = useState();

    const {refetch: getThings, loading} = useQuery(GETCAT_BYID, {
        variables: '',
        skip: true
    });
    const [DelCat] = useMutation(DELETE_CATEGORY);
    const getCategory = async(id, action) => {

        let result = {}
        await getThings({id}).then(handleThings => result = handleThings);
        setSelectedcategory(Selectedcategory = result)
        if (action === 'Edit' && !_.isEmpty(Selectedcategory)) {

            setModalShow(true)
        }
    }
    const DelCategory = () => {
       const id = currentCategory
         DelCat({variables: {id}}).then(Rdata => {
            setNewcat(Rdata)
        })

    };
    const handleToUpdate = (id, action) => {
        setCurrentCategory(currentCategory = id)
        if (action === 'Delete')
        {
            DelCategory()
        }
        else  {
            setDataAction(dataAction = action)
            getCategory(id, action);    
        }
      

    }
    const addcategory = () => {
        setDataAction(dataAction = 'Add')
        setModalShow(true)
    }
    const handler = (v) => {
        setCurrentCategory(v)
    }
    const LoadData = () => {
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
            body: JSON.stringify(requestBody),
            headers: {

                'Content-Type': 'application/json'
            }
        }).then(res => {

            if (res.status !== 200 && res.status !== 201) {

                throw new Error('Cants creat new category')
            }
            return res.json();

        }).then(resData => {

            setData(data = resData.data.categories)

        }).catch(err => {
            console.log(err);
        });
    }
    useEffect(() => {
        console.log('useeffect', JSON.stringify(data))
        LoadData();
    }, [
        JSON.stringify(data),
        currentCategory
    ]);

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
                                onClick={() => addcategory()}>
                                <RiAddLine size={'2em'}/>
                                Add New Category</a>
                        </div>

                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            action={(e) => handler(e)}
                            data={Selectedcategory}
                            dataAction={dataAction}/>
                        <div className="widgetcontainer ">
                            <div className="card100">
                                <Wtable
                                    data={data}
                                    handleToUpdate={(id, action) => handleToUpdate(id, action)}/>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    );

}

export default Categories;