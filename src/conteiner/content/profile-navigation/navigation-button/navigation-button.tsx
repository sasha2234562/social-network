import Profile from "./porfile/profile";
import Messages from "./messages/messages";
import News from "./news/news";
import Music from "./music/music";
import Settings from "./settings/settings";
import  nb from "./navigation-button.module.css"

function NavigationButton() {
    return (
        <div className={nb.nawBtn}>
            <Profile/>
            <Messages/>
            <News/>
            <Music/>
            <Settings/>
        </div>
    )
}

export default NavigationButton;