import React, {Fragment, useEffect,useState} from "react";
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import RadioMap from './components/radio-map';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import Wtable from './widgets/Wtable';
import '../style/Dashboard/map.css';

import {RiAddLine} from "react-icons/ri";

const _ = require('lodash');
const Posts = () => {
    const [posts,SetPosts] = useState();

    const {refetch: getPosts, loading} = useQuery(GET_POST, {
        variables: '',
        skip: true
    });
    const postResult= async ()=>{
        await getPosts({first:100}).then(handleThings => SetPosts(handleThings));
    }

    useEffect( ()=> {
        async function fetchData() {
            await postResult();;
           }
           fetchData();
    }, [])

    return (
        <Fragment>

        <div id="page-top">
            <div id="wrapper">
                <AppSidebar active='post'/>
                <div className="rowContainer">
                    <AppHeader/>
                   
                    <div className="widgetcontainer ">
                        <div className="card100">
                       { !_.isEmpty(posts) ? <Wtable 
                       data={posts.data.posts}
                       
                       /> :  '' }  
                        </div>

                    </div>
                </div>

            </div>
        </div>
    </Fragment>
    );
};

export default Posts;


const GET_POST = gql `

query posts($first:Int){
    posts(first:$first)
            {
                _id
                titre
                status
                type
                content
                createdDate
                cover
                }
                
              }`;