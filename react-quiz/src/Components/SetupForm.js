import React from 'react';
import {useGlobalContext} from './../context';

function SetupForm() {
    const{handleChange,quiz,handleSubmit,error}= useGlobalContext();
    return (
        <div className='form--content'>
            <form>
              <h1>Setup Quiz</h1> 
              <div className='form-control'>
                {/* for amount of questions section */}
              <label htmlFor='number'>
              number of questions
              </label>
              <input type='number'
              id='number'
              name='amount'
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
              />
              </div>

              {/* for category section */}

              <div className='form-control'>
                <label htmlFor='category'>
                    category
                </label>
              <select
              name='category'
              id='category'
              className='select-options'
              value={quiz.category}
              onChange={handleChange}
              >
                <option value='computers'>
                computers
                </option>
                <option value='sports'>
                    Sports
                </option>
                <option value='celebrities'>
                celebrities
                </option>
                <option value='animals'>
                  animals
                </option>
                <option value='music'>
                  music
                </option>
              </select>
              </div>

              {/* for difficulty section */}

              <div className='form-control'>
                <label htmlFor='difficulty'>
                    Select difficulty
                </label>
              <select
              name='difficulty'
              id='difficulty'
              className='select-options'
              value={quiz.difficulty}
              onChange={handleChange}
              >
                <option value='easy'>
                    easy
                </option>
                <option value='medium'>
                medium
                </option>
                <option value='difficult'>
                    difficult
                </option>
              </select>
              </div>
             {error && <p className='error'>Cannot generate questions,Please try again</p>}
              <button 
              onClick={handleSubmit}
              className='setup-btn'>
                Start Quiz</button>
            </form>
        </div>
    )
}

export default SetupForm
