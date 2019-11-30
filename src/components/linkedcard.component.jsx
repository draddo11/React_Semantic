import React from 'react'
import CardView from './cardview.component';
import { Card } from 'semantic-ui-react'
const LinkedCard = () => (
  <Card
    href='./cardview.component.jsx'
    header='Elliot Baker'
    meta='Friend'
    description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
  />
)

export default LinkedCard;