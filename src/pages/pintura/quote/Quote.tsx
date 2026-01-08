
import { useNavigate, useParams } from 'react-router';
import './estilus.css';
import { obras } from '../data/data';


export const Quote = () => {
  
  const { id } = useParams();
  const navigate = useNavigate();

  const item = obras[Number(id)];
  
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full max-w-[900px] md:mx-auto my-8 gap-8 px-5 md:px-20">

         <div>
	       <h1 className="titulus-quote"> 
		     { item.nomen }
	       </h1>

	      <div className ="info-quote"
        onClick={ () => navigate('/pintura/layout/collectione')}
        >
		    <p className ="descriptione">
          { item.descriptione }
		   </p>
                
		   <div className ="arca-quote">
			 <p className ="quote"> « »</p>
		   </div>
	     </div>
       </div>

       <figure className ="figure-quote">
            <img src={`/PORTAFOLIO-WEB/imagines/pintura/${ item.imago }`} alt="" />
        </figure>
        </div>
  )
}
