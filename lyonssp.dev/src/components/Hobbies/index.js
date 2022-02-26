import React from 'react'
import { CardImage, CardWrapper, CardDescription, HobbiesContainer, HobbiesRow, HobbiesWrapper, Header } from './HobbiesElements'
import exercise from '../../img/exercise.svg'
import travel from '../../img/travel.svg'
import music from '../../img/music.svg'

const Hobbies = () => {
  return (
    <>
        <HobbiesContainer id="hobbies">
            <HobbiesWrapper>
                <HobbiesRow>
                    <CardWrapper>
                        <CardImage src={exercise} />
                        <CardDescription>Exercise</CardDescription>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImage src={travel} />
                        <CardDescription>Travel</CardDescription>
                    </CardWrapper>
                    <CardWrapper>
                        <CardImage src={music} />
                        <CardDescription>Music</CardDescription>
                    </CardWrapper>
                </HobbiesRow>
            </HobbiesWrapper>
        </HobbiesContainer> 
    </>
  )
}

export default Hobbies
