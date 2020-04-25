import styled from "styled-components";
import Spinner from "./Spinner.svg";
import { useQuery } from "urql";

const Text = styled.span`
  color: ${(props) => props.theme.text};
`;

export interface LoaderProps {}

const Loader = (props: LoaderProps) => {
  const [res] = useQuery({ query: `query { hello }` });
  if (res.fetching) {
    return <Spinner stroke="var(--color-text)" />;
  }

  return <Text>{res.data.hello}</Text>;
};

export default Loader;
