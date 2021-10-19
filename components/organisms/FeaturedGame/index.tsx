import FeaturedItem from '/components/molecules/FeaturedItem';

export default function index() {
  return (
    <section className="featured-game pt-50 pb-50">
      <div className="container-fluid">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">
          Our Featured
          <br />
          {' '}
          Games This Year
        </h2>

        <div
          className="d-flex flex-row flex-lg-wrap overflow-setting justify-content-lg-between gap-lg-3 gap-4"
          data-aos="fade-up"
        >
          <FeaturedItem thumbnail="Thumbnail-1" title="Super Mechs" category="Mobile" />
          <FeaturedItem thumbnail="Thumbnail-2" title="Call of Duty: Modern" category="Mobile" />
          <FeaturedItem thumbnail="Thumbnail-3" title="Mobile Legends" category="Mobile" />
          <FeaturedItem thumbnail="Thumbnail-4" title="Clash of Clans" category="Mobile" />
          <FeaturedItem thumbnail="Thumbnail-5" title="Valorant" category="Mobile" />

        </div>
      </div>
    </section>
  );
}
