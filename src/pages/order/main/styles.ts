import styled from 'styled-components';

export const Section = styled.section`
  margin: 1rem auto;
  flex: 1;
  width: 100%;

  button {
    background-color: transparent;
    border-radius: 24px;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    outline: 0;
    padding: 0.25rem 0.5rem;
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin-block-start: 0.25rem;
    display: flex;
    align-items: center;
  }
`;

export const AddressContent = styled.div`
  font-size: 1.25rem;
  margin-block-end: 2rem;

  h4 {
    font-size: 1rem;
    margin-block-end: 0.5rem;
  }
`;

export const WithAddress = styled.div``;

export const WithoutAddress = styled(WithAddress)``;

export const PaymentContent = styled(AddressContent)`
  select {
    padding: 0.25rem 0.5rem;
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    margin-block-start: 0.25rem;
  }
`;

export const Change = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1rem;
  margin-block-start: 0.25rem;
`;

export const ButtonContent = styled(AddressContent)``;

export const SumaryContent = styled(AddressContent)`
  table {
    background-color: #fff;
    padding: 0.5rem;
    border: thin solid ${({ theme }) => theme.colors.gray_1};

    thead {
      th {
        text-align: left;
        font-size: 0.85rem;
        padding-block-end: 0.5rem;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray_1};

        &:first-child { width: 48px; }
        &:nth-child(2) { width: 240px; }
        &:last-child { text-align: right; }
      }
    }

    tbody {
      tr:first-child > td {
        padding-block-start: 0.5rem;
      }

      tr:last-child > td {
        padding-block-end: 0.5rem;
      }

      td {
        font-size: 0.9rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        &:first-child {
          width: 48px;
          text-align: center;
        }
        &:nth-child(2) { max-width: 240px; }
        &:last-child {
          max-width: 84px;
          text-align: right;
        }
      }
    }

    tfoot {
      td {
        font-size: 0.8rem;
        font-weight: 700;
        padding-block-start: 0.5rem;
        border-top: 1px solid ${({ theme }) => theme.colors.gray_1};

        &:first-child { width: 48px; }
        &:last-child { text-align: right; }
      }
    }

  }
`;
