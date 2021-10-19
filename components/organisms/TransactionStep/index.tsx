import StepItem from '/components/molecules/StepItem';

export default function index() {
  return (
    <div>
      <section id="feature" className="feature pt-50 pb-50">
        <div className="container-fluid">
          <h2 className="text-4xl fw-bold color-palette-1 text-center mb-30">
            It’s Really That
            <br />
            {' '}
            Easy to Win the Game
          </h2>
          <div className="row gap-lg-0 gap-4" data-aos="fade-up">
            <StepItem icon="step1" title="1. Start" upperDescription="Pilih salah satu game" bottomDescription="yang anda mainkan." />
            <StepItem icon="step2" title="2. Fill Up" upperDescription="Top up sesuai dengan" bottomDescription="nominal yang sudah tersedia." />
            <StepItem icon="step3" title="2. Be a Winner" upperDescription="Siap digunakan untuk" bottomDescription="improve permainan kamu." />
          </div>
        </div>
      </section>
    </div>
  );
}
