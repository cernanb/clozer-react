import React, { Component } from 'react'

import Portal from '../utilities/Portal'
import styled from 'styled-components'
import { Card } from '../elements/Cards'

export default class Modal extends Component {
   render() {
      const { on, children, toggle } = this.props
      return (
         <Portal>
            {on && (
               <ModalWrapper>
                  <ModalCard>
                     <div>{on && children}</div>
                  </ModalCard>
                  <Background onClick={toggle} />
               </ModalWrapper>
            )}
         </Portal>
      )
   }
}

const ModalWrapper = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
`

const ModalCard = Card.extend`
   position: relative;
   z-index: 10;
   min-width: 320px;
   margin-bottom: 100px;
`

const Background = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background: black;
   opacity: 0.5;
`
