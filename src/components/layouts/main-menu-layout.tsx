import MainMenu from "~/app/main-menu"
import MainMenu2 from "~/app/main-menu-2"

export default function MainMenuLayout() {

    const currentMenu = 1

    return (
        <>
            {currentMenu === 1 && <MainMenu />}
            {currentMenu === 2 && <MainMenu2 />}
        </>
    )

}
