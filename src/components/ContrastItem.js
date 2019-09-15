import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Row from './Row'
import ContrastStatus from './GraphicalContrastIndicator'

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Label = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  color: var(--gray600);
`

const Subtext = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: var(--gray600);
`

const ContrastItem = ({ label, subtext, contrast, min }) => (
  <Row css="align-items: center;margin: 8px 0;">
    <LabelContainer>
      <Label>{label}</Label>
      {subtext && <Subtext>{subtext}</Subtext>}
    </LabelContainer>
    <ContrastStatus isPass={contrast >= min} />
  </Row>
)

ContrastItem.propTypes = {
  contrast: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  subtext: PropTypes.string,
}

export default ContrastItem
