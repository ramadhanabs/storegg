interface RowPropsRules{
    label: string
    value: string | number
    className? : string
}

export default function Row(props: Partial<RowPropsRules>) {
  const { label, value, className } = props;
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      {' '}
      <span
        className={`purchase-details ${className}`}
      >
        {value}
      </span>

    </p>
  );
}
