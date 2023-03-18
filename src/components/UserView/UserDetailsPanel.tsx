import styled from "styled-components";
import { UniqueUsearProps } from "../../dashboard/UserCard/UserCard";

interface UserDetailsPanelProps {
  user: UniqueUsearProps;
}

function UserDetailsPanel({ user }: UserDetailsPanelProps) {
  return (
    <Info>
      <fieldset>
        {/*  */}
        <legend>Info</legend>
        <Strong>{user.prefix + " " + user.name + user.lastName}</Strong>
        <Title>{user.title}</Title>
        <br></br>
        {/*  */}
        <DescribeBox>
          <DescribeItem>Email</DescribeItem>: {user.email}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>Ip Address</DescribeItem>: {user.ip}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>Job Area</DescribeItem>: {user.jobArea}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>Job Type</DescribeItem>: {user.jobType}
        </DescribeBox>
        {/*  */}
      </fieldset>
    </Info>
  );
}

export default UserDetailsPanel;

// info box styles

const Info = styled.div`
  @media screen and (min-width: 990px) {
    width: 100%;
    margin-left: 20px;
  }
`;

const Strong = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
`;

const Title = styled.p`
  font-size: 16px;
  line-height: 21px;
`;

const DescribeBox = styled.div``;

const DescribeItem = styled.span`
  text-decoration: underline;
  line-height: 21px;
`;
