import { Fragment, useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../../context/SidebarContext";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMoon, FiSun } from "react-icons/fi";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "../../hooks/useTheme";
import { Menu, Transition } from "@headlessui/react";
import MenuOption from "../generic/MenuOption";

export const HeaderComponent = () => {
  const { logout, user } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const { toggleSidebarMobile } = useContext(SidebarContext);
  const handleToggleMenu = () => toggleSidebarMobile();
  return (
    <div className="app-bg app-text h-14 flex gap-4 items-center justify-between md:justify-end px-5">
      <div className="block md:hidden">
        <button onClick={() => handleToggleMenu()}>
          <RxHamburgerMenu size={24} />
        </button>
      </div>
      <div className="flex gap-4 items-center">
        <button type="button" onClick={toggleTheme}>
          {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
        <div className="">
          <Menu as="div" className="relative inline-block z-20">
            <div>
              <Menu.Button className="inline-flex justify-center items-center app-bg font-medium app-text ">
                {user?.name}
                <RiArrowDownSLine
                  className="ml-1"
                  aria-hidden="true"
                  size={24}
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md app-bg3 app-text shadow-lg ring-1 ring-black/5">
                <div className="p-1">
                  <Menu.Item>
                    {/* <p>sdsd</p> */}
                    <MenuOption
                      text="Editar mi información"
                      onClick={() => console.log("inf")}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    {/* <p>sdsdd</p> */}
                    <MenuOption
                      text="Cambiar contraseña"
                      onClick={() => console.log("ew")}
                    />
                  </Menu.Item>
                  <Menu.Item>
                    {/* <p>sddsd</p> */}
                    <MenuOption text="Cerrar sesión" onClick={() => logout()} />
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};
// 63
