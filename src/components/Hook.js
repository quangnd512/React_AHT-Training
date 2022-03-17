import { useState } from 'react'; 

const Hook = (props) => {    

    const newCouses = props.couses;
    // const [KH, setKH] = useState('');

    // const [couse, setCouse] = useState([
    //     { id: 1, name: 'PHP' },
    //     { id: 2, name: 'Java' },
    //     { id: 3, name: 'React' }
    // ])
    
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let newCouse = { id: Math.floor(Math.random() * 11), name: KH }
    //     setCouse([...couse, newCouse]) //merge list

    // }

    // const handleOnChange = (event) => {
    //     setKH(event.target.value);
    // }

    return (
        <>
            {/* <input type="text" value={KH} onChange={(event)=> handleOnChange(event)}/>
            <button onClick={(e) => handleSubmit(e)}>Submit</button> */}
            {newCouses.map(couse => {
                return (
                    <h2>{couse.id} - { couse.name }</h2>
                )
            })}

        </>
    )
}

export default Hook;