import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage: React.FC = () => {
  // Mock data for demonstration
  const recentSubmissions = [
    { id: 1, type: 'Optimization', status: 'Completed', date: '2024-03-01' },
    { id: 2, type: 'Simulation', status: 'In Progress', date: '2024-03-02' },
    { id: 3, type: 'Prediction', status: 'Pending', date: '2024-03-03' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Submissions</h2>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">Type</th>
              <th className="text-left py-2">Status</th>
              <th className="text-left py-2">Date</th>
              <th className="text-left py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {recentSubmissions.map((submission) => (
              <tr key={submission.id} className="border-b">
                <td className="py-2">{submission.type}</td>
                <td className="py-2">{submission.status}</td>
                <td className="py-2">{submission.date}</td>
                <td className="py-2">
                  <Link to={`/results/${submission.id}`} className="text-blue-500 hover:text-blue-600">
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <Link to="/submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit New Problem
        </Link>
        <Link to="/credits" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
          Manage Credits
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;