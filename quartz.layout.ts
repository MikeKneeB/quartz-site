import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import * as ExtraComponent from "./quartz/extra"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/MikeKneeB/quartz-site",
      License: "/License"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(ExtraComponent.OverlayExplorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.MobileOnly(ExtraComponent.OverlayExplorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer(
      {filterFn: (node) => (node.name !== "tags" && node.name !== "License")},
    )),
  ],
  right: [],
}
