import burger1 from "../assets/meet-the-long-kings.jpg";
import slide from "../assets/New-Sides-Intro-Blog-1.jpg";
import artboard from "../assets/Artboard-15-20.jpg";

export const NewsCard = ({ title }) => {
  const cards = [
    {
      id: 1,
      image: burger1,
      alt: "image saying meet the new king",
      title: "WHAT'S BETTER THAN ONE KING?",
      content:
        "Burger king is now grilling in Nigeria and the whopper has a new home",
      link: "https://www.burger-king.ng/news/whats-better-than-one-king",
    },
    {
      id: 2,
      image: slide,
      alt: "A picture saying new alert",
      title: "NEWS SIDE ALERT!!!",
      content: "Burger king has introduced NEW SIDES to the BK SIDES GENG",
      link: "https://www.burger-king.ng/news/new-sides-alert",
    },
    {
      id: 3,
      image: artboard,
      alt: "A picture of burger saying budgeat",
      title: "BudgEat Menu Is Back",
      content: "BudgEat Menu Is Back! Ball on a BudgeEat only at a Burger king",
      link: "https://www.burger-king.ng/news",
    },
  ];

  return (
    <>
      <div className="card">
        <div className="burger1">
          <img
            src={burger1}
            alt=""
            width={"30%"}
            className="image"
            style={{ marginTop: "0.5rem" }}
          />
          <a href={cards[0].link}>
            <h2 className="title">{cards[0].title}</h2>
            <p className="content">{cards[0].content}</p>
          </a>
        </div>

        <div className="burger1">
          <img src={slide} alt="" width={"30%"} className="image" />
          <a href={cards[1].link}>
            <h2 className="title">{cards[1].title}</h2>
            <p className="content">{cards[1].content}</p>
          </a>
        </div>

        <div className="burger1">
          <img src={artboard} alt="" width={"30%"} className="image" />
          <a href={cards[2].link}>
            <h2 className="title">{cards[2].title}</h2>
            <p className="content">{cards[2].content}</p>
          </a>
        </div>
      </div>
    </>
  );
};
