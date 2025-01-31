import React from "react";
import { useParams } from "react-router";

export default function User(){
    const {userId, departmentId} = useParams();
    return (
        <>
            <h1> User ID : {userId} </h1>
            <h1> Department ID : {departmentId} </h1>
        </>
    );
}