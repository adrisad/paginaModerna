import LogoIcon from '@/assets/logo.svg'
import MenuIcon from '@/assets/icon-menu.svg'
export const Header = () => {
  return (
    <header className='py-4 border-b border-b-white/20 md:border-none'>
      <div className="container">
        <div className="flex justify-between items-center md:border md:border-white/15 md:p-2 max-w-2xl mx-auto rounded-xl">
          <div className="flex justify-center items-center border border-white/15 w-10 h-10 rounded-lg">
            <LogoIcon className=" w-8 h-8" />
          </div>
          <div className='hidden md:flex'>
            <nav className='flex gap-8 items-center text-sm text-white/70'>
              <a href="">Features</a>
              <a href="">Developers</a>
              <a href="">Pricing</a>
              <a href="">Changelog</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className='border-1 border-white py-2 px-3 rounded-lg font-medium text-sm  bg-gradient-to-b from-[#190D2E] to-[#4A208A] shadow-[inset_0_0_10px_rgba(140,69,255,0.70),0_0_12px_0_#8C45FF]'>Join waitlist</button>
            <MenuIcon className="md:hidden"/>
          </div>
        </div>
      </div>
    </header>
  );
};
