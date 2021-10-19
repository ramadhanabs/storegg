interface PropsRules{
    title: string;
    thumbnail: string;
    category: string;
}

export default function index(props: PropsRules) {
  const { title, thumbnail, category } = props;
  return (
    <div className="featured-game-card position-relative">
      <a href="./src/detail.html">
        <div className="blur-sharp">
          <img src={`/img/${thumbnail}.png`} width="205" height="270" alt="" className="thumbnail" />
        </div>
        <div className="cover position-absolute bottom-0 m-32">
          <div className="d-flex flex-column h-100 justify-content-between text-decoration-none">
            <div className="game-icon mx-auto">
              <img src="/icon/console.svg" width={54} height={36} alt="" />
            </div>
            <div>
              <p className="fw-semibold text-white text-xl m-0">{title}</p>
              <p className="fw-light text-white m-0">{category}</p>
            </div>
          </div>
        </div>
      </a>

    </div>
  );
}
