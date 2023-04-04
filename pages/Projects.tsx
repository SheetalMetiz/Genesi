// Projects Page
import envirenment from '../public/static/images/envirenment.svg';
import Image from 'next/image';

const Projects = () => {
  return (
    <div className="container sm:w-100">
      <div className="grid place-center min-screen">
        <div className="flex flex-col  gap-4">
          <h1 className="text-4xl md:text-7xl  font-bold text-white my-8">ENVIRONMENT STATEMENT</h1>
        </div>
        {/* h-56 */}
        <div className=" text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          <div>
            <h2 className='text-xl'>PROOF OF STAKE</h2> 
            <p className='text-gray-400'>Proof of stake blockchain validation is more environmentally friendly than proof of work, as it consumes significantly less energy by not requiring computational puzzles to be solved. Validators are selected based on cryptocurrency holdings,
             reducing the carbon footprint of the network.
             </p>
             <p className='text-gray-400'>Unless directly disclosed none of the projects we support will operate through Proof of Work.</p>
              {/* <Image className="w-[18px] h-[18px] my-3" src={codenode} alt="me" width="64" height="64" /> */}
          </div>
          
          <div>
          <h2 className='text-xl'>CLOUD COMPUTING</h2>
            <p className='text-gray-400'>
            Cloud computing provides more efficient resource usage , reducing the need for physical hardware and lowering the carbon footprint of the network. Other benefits include increased scalability, faster transaction speeds, and improved accessibility. 
            </p>
            <p className='text-gray-400'>Overall, cloud computing provides an eco-friendly and efficient solution for validating and recording transactions on PoS blockchains.</p>
            {/* <Image className="w-[18px] h-[18px] my-3" src={managenode} alt="me" width="64" height="64" /> */}
          </div>
          
          <div className="visible sm:hidden md:invisible"></div>

          <div className="visible sm:hidden md:invisible">
          <Image className="w-[320px]" src={envirenment} alt="me" width="64" height="64" />
          </div>

          <div className="visible sm:hidden md:invisible"></div>

          <div>
          <h2 className='text-xl'>NODE ARMY</h2>
            <p className='text-gray-400'>
            We regularly review cloud computing platforms to ensure you can choose from proven, reliable, scalable and environmentally responsible providers. Node Army will endeavor to integrate a energy utilization metric to our and your dashboards in the near future for transparency of impact.
            </p>
           
          </div>

          {/* </div> */}
          
        </div>
      </div>
      
    </div>
  );
};

export default Projects;