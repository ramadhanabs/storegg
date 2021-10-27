interface InputPropsRules{
   label: string
   placeholder: string
   type: string
   id?: string
   name?: string
}

export default function index(props: InputPropsRules) {
  const {
    label, placeholder, type, id, name, ...nativeProps
  } = props;
  return (
    <>
      <label htmlFor="name" className="form-label text-lg fw-medium color-palette-1 mb-10">
        {label}
      </label>
      <input
        type={type}
        className="form-control rounded-pill text-lg"
        id={type}
        name={name}
        placeholder={placeholder}
        {...nativeProps}
      />
    </>
  );
}
