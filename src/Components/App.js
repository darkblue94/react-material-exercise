import React, { Component, Fragment } from 'react';


import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Exercises from './Exercises';
import { muscles ,exercises } from '../store';

// muscles will be static, exercies will constantly be changing(dynamic).

export default class extends Component {
  state = {
    exercises,
    exercise: {}
  }



  getExercisesByMuscles() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise]

        return exercises
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleExerciseSelected = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }))
  }

  handleExerciseCreate = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [
        ...exercises,
        exercise
      ]
    }))
  }

  handleExerciseDelete = id => {
    this.setState(({ exercises }) => ({
      exercises :exercises.filter(ex=> ex.id !== id)
    }) )

    }




  render() {

    const exercises = this.getExercisesByMuscles(),

  {category , exercise } = this.state
    return (
      <Fragment>
        <Header

          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
      category = {category}
          exercises={exercises}
          onSelect={this.handleExerciseSelected}
          onDelete={this.handleExerciseDelete}
      />
        <Footer

      category={category}
      muscles={muscles}
        onSelect={this.handleCategorySelected}
      />
      </Fragment>
    );
  }
}


