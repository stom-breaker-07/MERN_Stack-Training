import React from 'react'
import { create } from 'zustand'

const useZustandStore= create((set)=>({
   count:0,
   increment: ()=>set((state)=>{ set()})
})
)

export default useZustandStore;