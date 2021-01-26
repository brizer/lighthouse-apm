import React, { useState, useRef } from "react";
import { Input, Button } from "antd";
import styled from "styled-components";
import { gql, useMutation } from "@apollo/client";

const InputDiv = styled.div`
  margin: 0 auto;
  padding: 300px 0;
  text-align: center;
`;

const StyledInput = styled(Input)`
  margin-right: 40px;
  display: inline-block;
  width: 400px;
`;

const QUERY_URL = gql`
  mutation queryUrl($url: String!) {
    queryUrl(url: $url) {
      success
      content
    }
  }
`;

export default function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<any>(null);
  const [mutate,data] = useMutation(QUERY_URL, {
    onCompleted(data) {
      setLoading(false);
      if (data?.queryUrl.success) {
        localStorage.removeItem('callbackHTML');
        localStorage.setItem('callbackHTML',data.queryUrl.content);
      }
      window.location.href='/render.html';
    },
  });
  const inputProps = {
    placeholder: "输入URL",
    ref: inputRef,
    onChange: queryChange,
    value: url,
  };
  function startQuery() {
    console.log(url);
    setLoading(true);
    mutate({
      variables: {
        url,
      },
    });
  }

  function queryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUrl(event.target.value);
  }
  return (
    <React.Fragment>
      <InputDiv>
        <StyledInput {...inputProps} />
        <Button type="primary" loading={loading} onClick={startQuery}>
          开始
        </Button>
      </InputDiv>
    </React.Fragment>
  );
}
