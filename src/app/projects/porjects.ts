export interface ProjectCategories {
  insideText: string;
  link: string
}

const projectsCategories: ProjectCategories[] = [
  {
    insideText: "Logos",
    link: "/projects-gallery?tab=logos"
  },
  {
    insideText: "Websites",
    link: "/projects-gallery?tab=websites"
  },
  {
    insideText: "Posters",
    link: "/projects-gallery?tab=posters"
  },
  {
    insideText: "T-Shirts",
    link: "/projects-gallery?tab=tshirts"
  },
  {
    insideText: "Stickers",
    link: "/projects-gallery?tab=stickers"
  },
  {
    insideText: "Apps",
    link: "/projects-gallery?tab=apps"
  },
]

export default projectsCategories