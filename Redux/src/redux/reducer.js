import { AddItem,RemoveItem,UpdateItem } from "./action";
const initialState = {
    items: [],
    edituser:{},
};

const rootReducers =(state=initialState, action)=>{
    switch(action.type){
        case "addItem":{
            return{...state,items: [...state.items,action.payload]};
        }

        case "removeItem":{
            const data =state.items.filter((i)=>{
                return i.id != action.payload;
            });
            return{...state, items:data};
        }

        case "editItem":{   
            const data =state.items.filter((i)=>{
                return i.id == action.payload;
            });
            return {...state, edituser:data[0]};
        }

        case "updateItem":{
            return{...state, items:state.items.map((task)=>
                task.id === action.payload.id?action.payload.name : task
            ),
            };
        }
        default:return state
    }
}

export default rootReducers;