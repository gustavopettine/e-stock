import { Link } from "react-router-dom";
import { Container } from "./styles";

export function NotFound() {
  return (
    <Container>
      <h1>Page unavailable</h1>
      <Link to="/">return to top</Link>
    </Container>
  )
}