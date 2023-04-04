// Services page
import Image from 'next/image';
import frame from '../public/static/images/Frame.svg';
import frame1 from '../public/static/images/Frame1.svg';
import codenode from '../public/static/images/codenodeIcon.svg';
import managenode from '../public/static/images/managenodeicon.svg';
import reward from '../public/static/images/rewardIcon.svg';
import nodecuild from '../public/static/images/nodebuildicon.svg';
import block from '../public/static/images/blockchainicon.svg';
import nodeicon from '../public/static/images/nodeicon.svg';



const Services = () => {
  return (
    <div className="container sm:w-100">
      <div className="grid place-center min-screen">
        <div className="flex flex-col  gap-4">
          <h1 className="text-4xl md:text-7xl  font-bold text-white my-8">SERVICES</h1>
        </div>
        {/* h-56 */}
        <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-8">
          <div>
            <h2 className="text-xl">Co-Nodes</h2> 
            <p className="text-gray-400">Collaborative staking among users to pool to achieve threshold stake and operate collectively. This democratises participation and allows sub-stake holders to benefit from reward protocols.
               It also enables compounding as participants can sweep earned rewards
              into further Co-Nodes</p>
              <Image className="w-[18px] h-[18px] my-3" src={codenode} alt="me" width="64" height="64" />
          </div>
          
          <div>
          <h2 className="text-xl">Managed nodes</h2>
            <p className="text-gray-400">
            Outsource node deployment, management, and maintenance to Node Army for a small commission of
             earned rewards. Develop a passive yield portfolio 
             with minimum time and skill commitment.
            </p>
            <Image className="w-[18px] h-[18px] my-3" src={managenode} alt="me" width="64" height="64" />
          </div>
          <div>
          <Image className="w-[320px]" src={frame} alt="me" width="64" height="64" />
            <p className="text-gray-400"> Nodes as a service
          An industrial node solution for projects requiring robust decentralised node infrastructures at scale. 
          Node Army collaborates with projects during development phase and through a blockchain lifecycle.</p>
          <Image className="w-[18px] h-[18px] my-3" src={nodeicon} alt="me" width="64" height="64" />
          </div>
          {/* <div className='text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 lg:gap-8'> */}
          <div>
            <h2 className="text-xl">Rewards</h2>

            <p className="text-gray-400">
              Participate in underlying projects offering rewards for staking,
              validating, and securing their network through a transparent process.
              Node Army does not offer or promote its own Node Army yield, but rewards are transparently distributed on
              the blockchain according to the underlying projects protocol and tokenomics.
            </p>
            <Image className="w-[18px] h-[18px] my-3" src={reward} alt="me" width="64" height="64" />
          </div>

          <div>
            <h2 className="text-xl">Node build templates</h2>

            <p className="text-gray-400">
              Easily deploy nodes with pre-built templates hosted in the Marketplaces of premier cloud computing providers.
              Templates are specific to the different underlying blockchain networks, designed to make deployment seamless.
            </p>
            <Image className="w-[18px] h-[18px] my-3" src={nodecuild} alt="me" width="64" height="64" />
          </div>

          <div className="visible sm:hidden md:invisible"></div>

          {/* invisible ... */}
          <div className="visible sm:hidden md:invisible"></div>
          <div className="">
          {/* h-[410px] */}
          <Image className="w-[320px]" src={frame1} alt="me" width="64" height="64" />
          
          </div>
          <div className="">
          <h2 className="text-xl">Blockchain scalability</h2>
            <p className="text-gray-400">
            Leverage scalable blockchain infrastructure and a substantial and growing community of committed datapreneurs 
            for rapid and effective scaling of blockchain-based applications. 
            Maintain high performance and security in a decentralised approach.
            </p>
            <Image className="w-[18px] h-[18px] my-3" src={block} alt="me" width="64" height="64" />
          </div>


          {/* </div> */}
          
        </div>
      </div>
      
    </div>
  );
};

export default Services;