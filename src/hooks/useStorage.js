import React, { useEffect, useState } from 'react'

export function useStorage(key,initialData) {
const[LocalStorage,setLocalStorage]=useState(initialData)

useEffect(()=>{
    const existingData=JSON.parse(localStorage.getItem(key))
    if(existingData){
        setLocalStorage(existingData)
    }
    else{
        localStorage.setItem(key,JSON.stringify(initialData))
    }
},[])
 
  const updateLocalStorage=(newData)=>{
    if(typeof(newData)=='function'){
        localStorage.setItem(key, JSON.stringify(newData(LocalStorage)));
    }
    else{
        localStorage.setItem(key, JSON.stringify(newData));
    }
    setLocalStorage(newData)
  }
  return [LocalStorage,updateLocalStorage]
}