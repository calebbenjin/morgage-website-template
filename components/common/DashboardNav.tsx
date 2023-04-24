import AvatarDropdown from './AvatarDropdown';
import Logo from './Logo';

const DashboardNav = () => {
  return (
    <nav className="p-4 bg-brand ">
      <div className="container flex justify-between items-center">
        <div className="">
          <Logo isBage />
        </div>
        <div className="">
          <AvatarDropdown />
        </div>
      </div>
    </nav>
  )
}

export default DashboardNav
