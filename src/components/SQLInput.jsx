import React from 'react'

function SQLInput({ doTranslate, setInput, result }) {
  return (
    <div className='input-container'>
      <textarea className="text-area" cols={60} rows={12} placeholder="Enter SQL query here..." onChange={e => setInput(e.target.value)} />
      <button className="btn" onClick={doTranslate}>Translate</button>
      <h3>Result</h3>
      <div>
        {result.split('\n').map((item, i) => (
          <React.Fragment key={i}>
          {item}
          <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SQLInput