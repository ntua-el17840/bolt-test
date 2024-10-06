import React from 'react';
import { useParams } from 'react-router-dom';

const ResultsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data for demonstration
  const result = {
    id: id,
    type: 'Optimization',
    status: 'Completed',
    submissionDate: '2024-03-01',
    completionDate: '2024-03-02',
    credits: 50,
    solution: {
      objective: 1234.56,
      variables: {
        x1: 10,
        x2: 20,
        x3: 30,
      },
    },
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Problem Results</h1>
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Problem Details</h2>
        <p><strong>ID:</strong> {result.id}</p>
        <p><strong>Type:</strong> {result.type}</p>
        <p><strong>Status:</strong> {result.status}</p>
        <p><strong>Submitted:</strong> {result.submissionDate}</p>
        <p><strong>Completed:</strong> {result.completionDate}</p>
        <p><strong>Credits Used:</strong> {result.credits}</p>
      </div>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Solution</h2>
        <p><strong>Objective Value:</strong> {result.solution.objective}</p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Variables:</h3>
        <ul>
          {Object.entries(result.solution.variables).map(([key, value]) => (
            <li key={key}><strong>{key}:</strong> {value}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResultsPage;