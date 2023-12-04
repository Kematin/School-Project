// libs
import PropTypes from "prop-types";

// img
import gitHubIcon from "./../../img/icons/gitHub-black.svg";
import youTubeIcon from "./../../img/icons/youtube.png";
import projectIcon from "./../../img/icons/tool.png";

// style
import style from "./LinksBox.module.css";

// UI
import ButtonHrefOutline from "../UI/ButtonHrefOutline/ButtonHrefOutline";

function LinksBox({ links }) {
  return (
    <>
      <h3 className="title-3">Ссылки</h3>
      <div className={style.links_box}>
        <div className={style.link}>
          {links.gitHubLink && (
            <ButtonHrefOutline
              text="GitHub"
              href={links.gitHubLink}
              icon={gitHubIcon}
            />
          )}
        </div>
        <div className={style.link}>
          {links.projectLink && (
            <ButtonHrefOutline
              text="Project"
              href={links.projectLink}
              icon={projectIcon}
            />
          )}
        </div>
        <div className={style.link}>
          {links.youtubeLink && (
            <ButtonHrefOutline
              text="YouTube"
              href={links.youtubeLink}
              icon={youTubeIcon}
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
