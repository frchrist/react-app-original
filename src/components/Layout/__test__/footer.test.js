import React from "react"
import Footer from "../footer"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"

test("test footer",()=>{
    const {queryByTestId} = render(<Footer/>);
    const element = queryByTestId('footer')
    expect (element.textContent).toBe("@copyright 2021")
} )