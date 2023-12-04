// libs
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import PropTypes from "prop-types";

// img
import gitHubIcon from "./../../img/icons/gitHub-black.svg";
import youTubeIcon from "./../../img/icons/youtube.png";
import projectIcon from "./../../img/icons/tools.png";
import gitHubWhiteIcon from "./../../img/icons/gitHub-white.png";
import youTubeWhiteIcon from "./../../img/icons/youtube-white.png";
import projectWhiteIcon from "./../../img/icons/tools-white.png";

// style
import style from "./LinksBox.module.css";

// UI
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

function LinksBox({ links }) {
  const [icons, setIcons] = useState({
    gitHub: gitHubIcon,
    youtube: youTubeIcon,
    project: projectIcon,
  });
  const [mode] = useLocalStorage("mode", "light");

  useEffect(() => {
    const blackIcons = {
      gitHub: gitHubIcon,
      youtube: youTubeIcon,
      project: projectIcon,
    };
    const whiteIcons = {
      gitHub: gitHubWhiteIcon,
      youtube: youTubeWhiteIcon,
      project: projectWhiteIcon,
    };
    if (mode === "dark") {
      setIcons(whiteIcons);
    } else {
      setIcons(blackIcons);
    }
  }, [mode, setIcons]);

  return (
    <>
      <h3 className="title-3">Ссылки</h3>
      <div className={style.links_box}>
        <div className={style.link}>
          {links.gitHubLink && (
            <ButtonHrefOutline
              text="GitHub"
              href={links.gitHubLink}
              icon={icons.gitHub}
            />
          )}
        </div>
        <div className={style.link}>
          {links.projectLink && (
            <ButtonHrefOutline
              text="Project"
              href={links.projectLink}
              icon={icons.project}
            />
          )}
        </div>
        <div className={style.link}>
          {links.youtubeLink && (
            <ButtonHrefOutline
              text="YouTube"
              href={links.youtubeLink}
              icon={icons.youtube}
            />
          )}
        </div>
      </div>
    </>
  );
}

LinksBox.propTypes = {
  links: PropTypes.shape({
    gitHubLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    projectLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
    youtubeLink: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  }),
};

export default LinksBox;
