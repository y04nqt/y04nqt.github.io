interface IButtonHolderProps {
  children: React.ReactNode;
  className?: string;
}

export default function ButtonHolder({ children, className = '', ...props }:IButtonHolderProps) {
  if (!children) throw(new Error('ButtonHolder requires children'));
  return (
    <section
      {...props}
      className={`button-holder ${className}`}
    >
      {children}
    </section>
  )
}