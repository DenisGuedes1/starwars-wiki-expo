import create from 'zustand'

export const useDataStore = create((set) =>({
    selectdData: null,
    setSelectedData:(selectdData) => set({selectdData}),
    
   
}))