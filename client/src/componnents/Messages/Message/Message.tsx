import * as Style from "./MessageStyle";

interface MessagePropsType {
  message: {
    user: string;
    text: string;
  };
  name: string;
}

function Message({ message: { user, text }, name }: MessagePropsType) {
  let isSentByCurrentUser = false;
  let isAdmin = false;

  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  if (user === "admin") {
    isAdmin = true;
  }

  if (isAdmin) {
    return (
      <Style.AdminMessageBox>
        <Style.MessageText>{text}</Style.MessageText>
      </Style.AdminMessageBox>
    );
  }

  return (
    <Style.MessageContainer isSentByCurrentUser={isSentByCurrentUser}>
      {isSentByCurrentUser ? (
        <>
          <Style.SentText isSentByCurrentUser={isSentByCurrentUser}>
            {trimmedName}
          </Style.SentText>
          <Style.MessageBox isSentByCurrentUser={isSentByCurrentUser}>
            <Style.MessageText>{text}</Style.MessageText>
          </Style.MessageBox>
        </>
      ) : (
        <Style.MessageWrapper>
          <Style.SentText isSentByCurrentUser={isSentByCurrentUser}>
            {user}
          </Style.SentText>
          <Style.MessageBox isSentByCurrentUser={isSentByCurrentUser}>
            <Style.MessageText>{text}</Style.MessageText>
          </Style.MessageBox>
        </Style.MessageWrapper>
      )}
    </Style.MessageContainer>
  );
}

export default Message;
