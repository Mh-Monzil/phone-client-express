import { Link, useLoaderData } from "react-router-dom";


const Phones = () => {
    const phones = useLoaderData();
    console.log(phones);
        return (
        <div>
            Total Phones : {phones.length} 
            {
                phones.map(phone => <li key={phone.id}>
                    <Link to={`/phones/${phone.id}`}>{phone.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Phones;