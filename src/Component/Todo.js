import React, { useState } from 'react';

function Todo(props){
  
    const [value, setValue] = useState('');
  
    return (
        <div>
            <input
                type='text'
                placeholder='Enter Your Task'
                value={value}
                style={{
                    width: '350px',
                    height: '40px',
                    borderRadius: '20px',
                    fontSize: '19px'
                }}
                onChange={e => {
                    setValue(e.target.value);
                    console.log(e.target.value);
                }}
            />
            <button
                onClick={()=>{
                  props.addList(value);
                  setValue('');
                }}
                style={{
                    width: '90px',
                    height: '40px',
                    marginLeft: '12px',
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '15px',
                    borderStyle: 'none',
                    fontSize: '19px'
                }}
            >
                Add
            </button>
            
        </div>
    );
}
export default Todo;


