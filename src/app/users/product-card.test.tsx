import { render, screen } from "@testing-library/react"
import CardProduct from "components/card-product.component"

it('should render CardProduct', () => {
    render(<CardProduct
        brand=""
        quantity={1}
        description=""
        id=""
        image=""
        name=""
        price={4}
        />)
})