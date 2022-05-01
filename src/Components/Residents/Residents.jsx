import '../Residents/ResidentsStyles.css'
import ResidentInfo from '../ResidentInfo/ResidentInfo';


const Residents = ({residents, id}) => {

    return (
       
        <div key={id} className='card' >
            
            {
                residents?.map(resident => <ResidentInfo residentUrl={resident} key={id}/>)
            }
        </div>
    );
};

export default Residents;