import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-48 bg-gray-200 p-4 h-screen">
      <ul className="space-y-2">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
