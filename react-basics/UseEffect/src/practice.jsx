import React, { useState } from 'react'
// tommorow=> useEffect, useCallback, memo, useMemo, git and github

const Practice = () => {
    const [inputContent, setInputContent] = useState('')
    const [displayedContent, setDisplayedContent] = useState('')

    const handleOnChange = (e) => {
        setInputContent(e.target.value)
    }
    const handleButtonClick = () => {
        setDisplayedContent(inputContent)
    }

    return (
        <>
            <input
                style={{ marginLeft: 400 }}
                type='text'
                placeholder='............'
                onChange={handleOnChange}
                value={inputContent}
            />

            <button
                onClick={handleButtonClick}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '20px auto',
                    padding: '10px 20px',
                    fontSize: '16px'
                }}>
                Print Value
            </button>
            <br />
            {displayedContent && <h1>{displayedContent}</h1>}
        </>
    )
}

export default Practice