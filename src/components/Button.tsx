import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    variant: string,
    onClick: () => void,
}
const Button = ({ children, variant, onClick }: Props) => {
  return (
    <div>
        <button type="button" className={"btn btn-" + variant} onClick={onClick}>
            {children}
        </button>
    </div>
  )
}

export default Button