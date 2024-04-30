import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ExpandMore from '@mui/icons-material/ExpandMore'

const Navbar = () => {
  return (
    <div className='bg-white fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 md:w-[calc(100%)-230px] w-[calc(100%-60px)] '>
      <div className="flex items-center gap-3 cursor-pointer ">
        <PersonOutlineIcon style={{ color: '#fb923c' }} className="h-7 w-7" />
        <span className="text-sm text-orange-400 font-semibold md:text-lg whitespace-nowrap">Board Name</span>
        <ExpandMore style={{color: '#fb923c'}} className='w-4 h-4'/>

      </div>
      <div className="flex items-center gap-2 md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px]">


      </div>
    </div>
  );
}

export default Navbar;