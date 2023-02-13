import { render, screen } from "@testing-library/react"
import Login from "../Pages/Login/Login"

test("emali input should be rendered", () =>{
    render(<Login/>);
    const emailInputEl = screen.getAllByPlaceholderText(/email/i);
    expect(emailInputEl).toBeInTheDocument();
})

test("password input should be rendered", () =>{
    render(<Login/>);
    const passwordInputEl = screen.getAllByPlaceholderText(/[password]/i);
    expect(passwordInputEl).toBeInTheDocument();
})

test("submit button should be rendered", () =>{
    render(<Login/>);
    const submitInputEl = screen.getAllByRole("button");
    expect(submitInputEl).toBeInTheDocument();
})