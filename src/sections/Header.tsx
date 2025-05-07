import LogoIcon from '@/assets/logo.svg'
export const Header = () => {
  return (
    <header>
      <div className=" flex justify-center items-center h-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center border border-white/15 w-10 h-10 rounded-lg">
            <LogoIcon className=" w-8 h-8" />
          </div>
          <div className="flex justify-center items-center">
            <button>Join waitlist</button>
            <div>
              menu
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
