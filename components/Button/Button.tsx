export type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, className, disabled, ...rest }: ButtonProps) => {
  const Btn = (classes: string) => {
    //const generalStyle = 'rounded-[8px] px-[32px] py-[12px]'
    const generalStyle = 'rounded-md px-6 py-2'
    return <button
      className={`${generalStyle} ${classes} ${className}`}
      disabled={disabled}
      {...rest}
    >
      { children }
    </button>
  }
  return Btn(disabled ? 'bg-disabled text-disabled' : 'bg-primary text-white')

}

export default Button
