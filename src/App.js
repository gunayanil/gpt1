import { useState } from 'react';
import './App.css';
import SQLInput from './components/SQLInput';
import { Configuration, OpenAIApi } from 'openai';

const options = {
  model: 'code-davinci-002',
  // prompt:
  //   '### Postgres SQL tables, with their properties:\n#\n# Employee(id, name, department_id)\n# Department(id, name, address)\n# Salary_Payments(id, employee_id, amount, date)\n#\n### A query to list the names of the departments which employed more than 10 employees in the last 3 months\nSELECT',
  temperature: 0,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
  stop: ['#', ';'],
};

function App() {
  const configuration = new Configuration({
    apiKey: 'dead-inside',
  });
  const openai = new OpenAIApi(configuration);

  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const doTranslate = async e => {
    e.preventDefault();
    const response = await openai.createCompletion({
      ...options,
      prompt: input,
    });

    setResult(response.data.choices[0].text);
  };

  return (
    <div>
      <SQLInput doTranslate={doTranslate} setInput={setInput} result={result} />
    </div>
  );
}

export default App;
