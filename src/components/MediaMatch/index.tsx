import styled, { css } from 'styled-components'
import media, { DefaultBreakpoints } from 'styled-media-query'

type breackpoint = keyof DefaultBreakpoints

export type MediaMathProps = {
  lessThan?: breackpoint
  greaterThan?: breackpoint
}

const MediaMathModifiers = {
  lessThan: (size: breackpoint) => css`
    ${media.lessThan(size)`display: block`}
  `,

  greaterThan: (size: breackpoint) => css`
    ${media.greaterThan(size)`display: block`}
  `
}

export default styled.div<MediaMathProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && MediaMathModifiers.lessThan(lessThan)}
    ${!!greaterThan && MediaMathModifiers.greaterThan(greaterThan)}
  `}
`
