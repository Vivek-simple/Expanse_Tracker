import { useState } from "react"

export function useFilter(Expenses,callback) {
    const[query,setQuery]=useState('')
   
    const filterData=Expenses.filter((expense) =>
        callback(expense).toLowerCase().includes(query)
      )
      return [filterData,setQuery]
}
