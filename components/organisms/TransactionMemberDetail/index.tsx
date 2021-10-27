import DetailItem from './DetailItem';
import Row from './Row';

export default function index() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Details #GG001</h2>
        <div className="details">
          <div className="main-content main-content-card overflow-auto">
            <section className="checkout mx-auto">
              <DetailItem thumbnail="Thumbnail-3" category="Mobile" status="Pending">
                Mobile Legends:
                {' '}
                <br />
                {' '}
                Bang Bang 2021
              </DetailItem>
              <hr />
              <div className="purchase pt-30">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Purchase Details</h2>
                <Row label="Your Game ID" value="masyoshizero" />
                <Row label="Order ID" value="#GG011" />
                <Row label="Item" value="250 Diamonds" />
                <Row label="Price" value={420000} />
                <Row label="Tax 10%" value={4200} />
                <Row label="Total" value={424200} className="color-palette-4" />

              </div>
              <div className="payment pt-10 pb-10">
                <h2 className="fw-bold text-xl color-palette-1 mb-20">Payment Informations</h2>
                <Row label="Your Account Name" value="Masayoshi Angga Zero" />
                <Row label="Type" value="Worldwide Transfer" />
                <Row label="Bank Name" value="Mandiri" />
                <Row label="Bank Account Name" value="PT GG Store Indonesia" />
                <Row label="Bank Number" value="1800-9090-2021" />
              </div>
              <div className="d-md-block d-flex flex-column w-100">
                <a
                  className="btn btn-whatsapp rounded-pill fw-medium text-white border-0 text-lg"
                  href="/#"
                  role="button"
                >
                  WhatsApp ke Admin

                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
