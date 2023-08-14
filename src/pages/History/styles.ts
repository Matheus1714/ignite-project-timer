import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;
  overflow-y: scroll;
  max-height: 20rem;

  &::-webkit-scrollbar {
    width: 0.374rem;
    height: 12.625rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar:horizontal {
    width: 12.625rem;
    height: 0.374rem;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-200']};
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme['gray-400']};
  }

  table {
    position: relative;
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;
    table-layout: fixed;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      position: sticky;
      top: 0;
      z-index: 1;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statuscolor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
  }
`

// export const Status = styled.span.withConfig({
//   shouldForwardProp: (prop) => prop === 'statuscolor',
// })<StatusProps>`
//   display: flex;
//   align-items: center;
//   gap: 0.5rem;

//   &::before {
//     content: '';
//     width: 0.5rem;
//     height: 0.5rem;
//     border-radius: 50%;
//     background: ${(props) => props.theme[STATUS_COLORS[props.statuscolor]]};
//   }
// `
