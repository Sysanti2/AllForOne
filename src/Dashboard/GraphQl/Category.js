import {React,useState} from 'react';
import { Mutation, useMutation } from 'react-apollo';
import gql from 'graphql-tag';


export const Category = (id,action) => {
    
    const DELETE_CATEGORY = gql`
    mutation deleteCategory($id:ID!){
      deleteCategory(_id:$id)
      {
        _id
        label
      }
      
    }
      `;
      const [delCat] = useMutation(DELETE_CATEGORY);
    delCat({variables:{id}}).then(data=> {
        console.log(data)
        return data
     })
 
};

