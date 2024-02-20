    export const AddItem = (item)=>({
    type:"addItem",
    payload:item
});

export const RemoveItem = (id)=>({
    type:"removeItem",
    payload:id
})

export const UpdateItem = (item)=>({
    type:"updateItem",
    payload:item
})

export const EditItem = (id)=>({
    type:"editItem",
    payload:id,
});