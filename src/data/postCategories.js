import announcementsImg from "../resources/categories/announcements.png"
import publicationsImg from "../resources/categories/publications.png"
import eventsImg from "../resources/categories/events.png"
import mediaImg from "../resources/categories/media.png"

export const postCategories = [
    {   en: "Announcements",
        ru: "Анонсы",
        img: announcementsImg, },

    {   en: "Publications",
        ru: "Публикации",
        img: publicationsImg, },    

    {   en: "Events",
        ru: "Mероприятия",
        img: eventsImg, },

    {   en: "Media",
        ru: "Медия",
        img: mediaImg,
        redirect: true,
        linkEn: "https://mtargetgroup.com/media/",
        linkRu: "https://mtargetgroup.com/ru/%d0%bc%d0%b5%d0%b4%d0%b8%d1%8f/" },    ]