import { title } from "process"
import AppsTabContent from "./tabs-contents/AppsTabContent"
import LogosTabsContent from "./tabs-contents/LogosTabsContent"
import PostersTabContent from "./tabs-contents/PostersTabContent"
import StickersTabContent from "./tabs-contents/StickersTabContent"
import TShirtsTabContent from "./tabs-contents/TShirtsTabContent"
import WebsitesTabContent from "./tabs-contents/WebsitesTabContent"

const tabs = [
  {
    value: 'tshirts',
    title: 'T-Shirts',
    tabContent: TShirtsTabContent,
  },
  {
    value: 'posters',
    title: 'Posters',
    tabContent: PostersTabContent,
  },
  {
    value: 'stickers',
    title: 'Stickers',
    tabContent: StickersTabContent,
  },
  {
    value: 'websites',
    title: 'Websites',
    tabContent: WebsitesTabContent,
  },
  {
    value: 'apps',
    title: 'Apps',
    tabContent: AppsTabContent,
  },
  {
    value: 'logos',
    title: 'Logos',
    tabContent: LogosTabsContent,
  },
]

export default tabs