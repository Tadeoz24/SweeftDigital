import styled from "styled-components";

import { UniqueUsearProps } from "../../dashboard/UserCard/UserCard";

interface AddressInfoProps {
  user: UniqueUsearProps;
}

function AddressInfo({ user }: AddressInfoProps) {
  return (
    <Address>
      <fieldset>
        <legend>Address</legend>
        <Strong>{user.company.name + " " + user.company.suffix}</Strong>
        {/*  */}
        <DescribeBox>
          <DescribeItem>City</DescribeItem>: {user.address.city}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>Country</DescribeItem>: {user.address.country}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>State</DescribeItem>: {user.address.state}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>Street Adress</DescribeItem>:{" "}
          {user.address.streetAddress}
        </DescribeBox>
        <DescribeBox>
          <DescribeItem>ZIP</DescribeItem>: {user.address.zipCode}
        </DescribeBox>
      </fieldset>
    </Address>
  );
}

export default AddressInfo;

// info box styles

const Strong = styled.strong`
  font-weight: bold;
  font-size: 16px;
  line-height: 21px;
`;

const DescribeBox = styled.div``;

const DescribeItem = styled.span`
  text-decoration: underline;
  line-height: 21px;
`;

// addres box styles
const Address = styled.div``;
