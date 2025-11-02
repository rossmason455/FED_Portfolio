import { Link } from "react-router";

export default function () {
  return (
    <div>
      <Link to="/">Home</Link> |<Link to="subregions">Sub Regions</Link> |
      <Link to="regions">Regions</Link>
    </div>
  );
}
