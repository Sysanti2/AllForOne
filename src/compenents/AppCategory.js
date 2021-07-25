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
        <div className="popular_catagory_area">
        <div  id="categorie" className="container">
            <div  className="row">
                <div className="col-xl-12">
                    <div   className="section_title mb-60 text-center">
                        <p>Discover</p>
                        <h3>
                            Most Popular Categories
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row">
            { !_.isEmpty(categories)  && !_.isUndefined(categories.data.categories) && !_.isEmpty(categories.data.categories) ?  categories.data.categories.map((dt, index) =>
                 <div className="col-xl-3 col-md-4 col-lg-3">
                 <div className="single_catagory">
                     <div className="thumb">
                     <Image source={dt.picture} />
                     </div>
                     <div className="hover_overlay">
                         <div className="hover_inner">
                             <a href="/Listing"><h4 className="text-center"> {dt.label}</h4></a>

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