import React from 'react';

const Header = (props) => {
  const course = 'Half Stack application development';

  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;

  const part2 = 'Using Props to pass data';
  const exercises2 = 7;

  const part3 = 'State of component';
  const exercises3 = 14;

  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  )
}

const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;

  const totalExercises = exercises1 + exercises2 + exercises3;

  return (
    <div>
      <p>Number of exercises {totalExercises}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Header course={'Half Stack application development'} />
      <Content />
      <Total />
    </div>
  );
}

export default App;
