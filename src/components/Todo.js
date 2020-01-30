import React, { useRef,useState,useEffect } from "react"
import { useSelector,useDispatch } from "react-redux"

import "../style/todo.css"

export default function Todo(){

    const [item, setItems] = useState([]);

    const items     = useSelector(state => state.data);
    const dispatch  = useDispatch();
    const inputRef  = useRef('input');

    
    useEffect(() =>
         
    {},[items])

    
    function handleChange(evt){

        setItems( evt.target.value );
    }

    function handleSubmit(evt){
        evt.preventDefault();

        dispatch({type: "ADD_ITEM", title: item});

        inputRef.current.value = '';
    }

    function handleRemove(item){

        dispatch({type: "REMOVE_ITEM", title: item.title});
    }

    function handleCompleted(item){

        dispatch({type: "COMPLETE_ITEM", title: item.title, completed: !item.completed });  
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" ref={inputRef} />
            <input type="submit" value="New" />
        </form>
        <ul>
            {items.map( item => 
                <li key={item.title}>
                    <span className={item.completed ? "completed" : ""}>{item.title}</span>
                    {item.completed && <span>(Completo)</span>} 
                    <input type="checkbox" checked={item.completed} onChange={() => handleCompleted(item)}/>
                    <button onClick={() => handleRemove(item)}>x</button>
                </li>
            )}
        </ul>
        </>
    )


}