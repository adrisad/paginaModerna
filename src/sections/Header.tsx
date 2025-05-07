import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
export const Header = () => {
  return (
    <header>
      <div className="border-b border-b-white/20 px-5 py-4 flex justify-center items-center h-auto">
        <div className="w-[335px] flex justify-between">
          <div className="flex justify-center items-center border border-white/15 w-10 h-10 rounded-lg">
            <LogoIcon className=" w-8 h-8" />
          </div>
          <div className="flex items-center gap-4">
            <button className='border-1 border-white py-2 px-3 rounded-lg font-medium text-sm  bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[inset_0_0_10px_rgba(140,69,255,0.70),0_0_12px_0_#8C45FF]'>Join waitlist</button>
            <MenuIcon/>
          </div>
        </div>
      </div>
    </header>
  );
};
