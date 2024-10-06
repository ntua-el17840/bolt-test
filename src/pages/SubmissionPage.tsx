import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SubmissionPage: React.FC = () => {
  const [problemType, setProblemType] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the submission to your backend
    console.log('Submitting problem:', { problemType, jsonInput });
    // For demonstration, we'll just navigate to a mock results page
    navigate('/results/new');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Submit New Problem</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="problemType" className="block text-sm font-medium text-gray-700 mb-2">
            Problem Type
          </label>
          <select
            id="problemType"
            value={problemType}
            onChange={(e) => setProblemType(e.target.value)}
            className="w-full border rounded py-2 px-3"
            required
          >
            <option value="">Select a problem type</option>
            <option value="optimization">Optimization</option>
            <option value="simulation">Simulation</option>
            <option value="prediction">Prediction</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="jsonInput" className="block text-sm font-medium text-gray-700 mb-2">
            JSON Input
          </label>
          <textarea
            id="jsonInput"
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            className="w-full border rounded py-2 px-3 h-40"
            placeholder="Enter your JSON input here"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit Problem
        </button>
      </form>
    </div>
  );
};

export default SubmissionPage;