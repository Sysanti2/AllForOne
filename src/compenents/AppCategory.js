import React, { useState, useEffect} from 'react';
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import Image from './Image';

const _ = require('lodash');

const GETCAT = gql `

query categories($first:Int){
    categories(first:$first)
            {
            _id
            label
            picture
                }
                
              }`;

const AppCategory = () => {
 
    const  [categories,setCategories] = useState()

    const {refetch: getCategories, loading} = useQuery(GETCAT, {
        variables: '',
        skip: true
    });

    const getCategory = async() => {

        await getCategories({first:8}).then(handleThings => setCategories(handleThings));
        console.log(categories)
       
    }
     const  LoadData =  ()=>{
        getCategory()
    }
   
    useEffect(  () => {

              async function fetchData() {
               await LoadData();;
               console.log(categories)
              }
              fetchData();
        console.log('useeffect', JSON.stringify(categories))
       
    }, []);
    return (
        <div class="popular_catagory_area">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="section_title mb-60 text-center">
                        <p>Discover</p>
                        <h3>
                            Most Popular Categories
                        </h3>
                    </div>
                </div>
            </div>
            <div class="row">
            { !_.isEmpty(categories)  && !_.isUndefined(categories.data.categories) && !_.isEmpty(categories.data.categories) ?  categories.data.categories.map((dt, index) =>
                 <div class="col-xl-3 col-md-4 col-lg-3">
                 <div class="single_catagory">
                     <div class="thumb">
                     <Image source={dt.picture} />
                     </div>
                     <div class="hover_overlay">
                         <div class="hover_inner">
                             <a href="Listings.html"><h4 class="text-center"> {dt.label}</h4></a>

                         </div>
                     </div>
                 </div>
             </div>
            ):null}
               
             
                   
                </div>
            </div>
        </div>
   
    );
};

export default AppCategory;