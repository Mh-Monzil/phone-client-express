import { useLoaderData } from "react-router-dom";


const Phone = () => {
    const phone = useLoaderData();
    
    return (
        <div>
            <h4>{phone.name}</h4>
            <img src={phone.image} alt="" />
            
        </div>
    );
};

export default Phone;