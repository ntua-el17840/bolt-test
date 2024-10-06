import React from 'react';
import { Link } from 'react-router-dom';
import { Brain } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/dashboard" className="flex items-center space-x-2">
          <Brain size={32} />
          <span className="text-xl font-bold">solveMyProblem</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
            <li><Link to="/credits" className="hover:text-blue-200">Credits</Link></li>
            <li><Link to="/submit" className="hover:text-blue-200">Submit Problem</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;