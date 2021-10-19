interface ItemProps {
  icon: 'step1' | 'step2' | 'step3'
  title: string
  upperDescription: string
  bottomDescription: string
}

export default function index(props: ItemProps) {
  const {
    icon, title, upperDescription, bottomDescription,
  } = props;
  return (
    <div className="col-lg-4">
      <div className="card feature-card border-0">
        <img src={`/icon/${icon}.svg`} className="mb-30" width="80" height="80" alt="" />
        <p className="fw-semibold text-2xl mb-2 color-palette-1">{title}</p>
        <p className="text-lg color-palette-1 mb-0">
          {upperDescription}
          <br />
          {bottomDescription}
        </p>
      </div>
    </div>
  );
}
