import WorkCards from './workCards';

import { PROJECTS } from '../../configs/const';

const Work = () => {
  return (
    <div name='work' className=' dark:bg-white dark:text-slate-900 w-full h-auto py-64 bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'>
        <div>
          <p className='text-4xl border-b-4 font-bold inline text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='my-4'>{'// Check out some fo my recent work!'}</p>
        </div>
        
        <WorkCards projects={PROJECTS}/>
      </div>
    </div>
  );
};

export default Work;