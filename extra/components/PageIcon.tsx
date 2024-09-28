import { FullSlug, joinSegments, pathToRoot } from "../util/path"
import pageiconStyle from "./styles/pageicon.scss"

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "../components/types"


export default (() => {
  const PageIcon: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
    const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
    const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug!)
    const iconPath = joinSegments(baseDir, "static/page_icon.png")

    return (
      <a href={baseDir}>
        <img src={iconPath} alt={title} class="pageicon"/>
      </a>
    )
  }

  PageIcon.css = pageiconStyle

  return PageIcon
}) satisfies QuartzComponentConstructor
