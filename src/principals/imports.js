import logoLight from "../assets/img/logo-light.png";
import logoDark from "../assets/img/logo-dark.png";

const workData = {
  title: "“Our Moments...Our Memory...!”",
  quoteV:
    "“Một bức ảnh là một bí mật của bí mật” Nó càng thể hiện nhiều, bạn càng biết ít...!”",
  quoteE:
    "“A photograph is a secret about a secret. The more it tells you the less you know...!”",
  author: "Diane Arbus",
};

const headerData = {
  title1: "Let's Save",
  title2: "Your Great Memories with",
  title3: "Hieu Anh Beo Beo-MrBeo Studio",
  description:
    "Hello there! this is Beo and I am the founder of Hieu Anh Beo Beo - MrBeo Studio. As you might notice, this little studio has been established just few months ago, and you know what, it is the house of my dream, my passion, my love for art and photography. If you have entered into this page, it means you have stepped into my heart. Welcome to my art's world.",
};

const navMenu = [
  { name: "Home", link: "/beo-studio/home", key: "home" },
  { name: "Work", link: "/beo-studio/work", key: "work" },
  { name: "Packages", link: "/beo-studio/packages", key: "packages" },
  { name: "Location", link: "/beo-studio/location", key: "location" },
  {
    name: "FACEBOOK",
    link: "https://www.facebook.com/profile.php?id=100069732395806",
    key: "facebook",
  },
];

const navLayout = {
  home: { logoImg: logoLight, colorCode: "var(--color-text-parchment)" },
  work: { logoImg: logoDark, colorCode: "var(--color-text-parchment)" },
  packages: { logoImg: logoDark, colorCode: "var(--color-text-dark)" },
  location: { logoImg: logoLight, colorCode: "var(--color-text-parchment)" },
  logo: { logoImg: logoLight, colorCode: "var(--color-text-parchment)" },
};

export { workData, headerData, navMenu, navLayout, logoLight, logoDark };
