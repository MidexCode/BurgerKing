import WhooperSandwich from "../../assets/Whopper-Sandw-1024x659.jpg";
import SteakHouse from "../../assets/steakhouses-1024x659.jpg";
import BigKing from "../../assets/big-king-middle-bun-1024x659.jpg";
import DoubleWhooper from "../../assets/769_DOUBLE-WHOPPER.jpg";
import { MenuNewsCard } from "./MenuNewsCard";

export const MenuNews = () => {
  const cards = [
    {
      id: 1,
      image: WhooperSandwich,
      alt: "Whopper® image",
      title: "Whopper®",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/whopper",
    },
    {
      id: 2,
      image: SteakHouse,
      alt: "Steakhouse image",
      title: "Steakhouse",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/steakhouse",
    },
    {
      id: 3,
      image: BigKing,
      alt: "Big King image",
      title: "Big King",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/big-king",
    },

    {
      id: 4,
      image: DoubleWhooper,
      alt: "Double Whopper® image",
      title: "Double Whopper®",
      link: "https://www.burger-king.ng/menu/flame-grilled-burgers/double-whopper",
    },
  ];

  return (
    <>
      <div className="news-container">
        <div className="news-title">
          <div className="news-heading">
            <div className="news-title-1">
              {/* <h2 className="News">News</h2> */}
            </div>
          </div>

          <div className="card">
            {cards.map((card, index) => {
              return (
                <MenuNewsCard
                  image={card.image}
                  title={card.title}
                  // content={card.content}
                  link={card.link}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
