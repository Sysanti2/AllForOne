import React, {Fragment, useEffect,useState} from "react";
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import AppSidebar from './Layout/AppSidebar';
import AppHeader from './Layout/AppHeader';
import Wtable from './widgets/Wtable';
import '../style/Dashboard/map.css';

import {RiAddLine} from "react-icons/ri";


const _ = require('lodash');



const Regions = () => {
    const [regions,SetRegions] = useState();

    const {refetch: getRegions, loading} = useQuery(GET_REGION, {
        variables: '',
        skip: true
    });

    const handleToUpdate = (id, action) => {
       
      
        
       
      

    };

    const GetRegions= async ()=>{
        await getRegions({first:100}).then(handleThings => SetRegions(handleThings));
    }
    

    useEffect( ()=> {
        async function fetchData() {
            await GetRegions();;
           }
           fetchData();
    }, [])
        return (

            <Fragment>

                <div id="page-top">
                    <div id="wrapper">
                        <AppSidebar active='area'/>
                        <div className="rowContainer">
                            <AppHeader/>
                            <div className="widgetcontainer-nopadding">
                                <a href="#" className="btn btn-success btn-txt-primary">
                                    <RiAddLine size={'2em'}/>
                                    Add New Area</a>
                            </div>
                            <div className="widgetcontainer ">
                                <div className="card100">
                                    <Wtable data={!_.isEmpty(regions) ?regions.data.regions:[]}/>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }

    export default Regions


    const GET_REGION = gql `

query Regions($first:Int){
    regions(first:$first)
            {
            _id
            label
                }
                
              }`;
 