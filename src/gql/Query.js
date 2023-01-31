import { gql } from '@apollo/client';

export const EPISODES_QUERY = gql`
  query GetEPISODES {
    episodes {
      results{
        name
        air_date
        id
      }
    }
  }
`;