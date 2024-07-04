import styled from "styled-components";

export const MessageContainer = styled.div<{ isSentByCurrentUser: boolean }>`
  width: 100%;
  display: flex;
  justify-content: ${({ isSentByCurrentUser }) =>
    isSentByCurrentUser ? "flex-end" : "flex-start"};
  margin-bottom: 15px;
`;

export const AdminMessageBox = styled.div`
  text-align: center;
  border-bottom: 1px solid #d1d1d1;
  padding: 1rem;
  height: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const MessageBox = styled.div<{ isSentByCurrentUser: boolean }>`
  background: ${({ isSentByCurrentUser }) =>
    isSentByCurrentUser ? "#2979FF" : "#F3F3F3"};
  border-radius: 20px;
  padding: 10px 20px;
  color: ${({ isSentByCurrentUser }) =>
    isSentByCurrentUser ? "#FFF" : "#000"};
  display: inline-block;
  max-width: 80%;
`;

export const MessageWrapper = styled.p`
  display: inline-flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
  margin: 0;
`;

export const SentText = styled.p<{ isSentByCurrentUser: boolean }>`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: ${({ isSentByCurrentUser }) =>
    isSentByCurrentUser ? "#FFF" : "#000"};
  letter-spacing: 0.3px;
  padding: ${({ isSentByCurrentUser }) =>
    isSentByCurrentUser ? "0 10px 0 0" : "0 0 0 10px"};
  margin: 0;
  font-size: 12px;
`;

export const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;
  margin: 0;
`;
