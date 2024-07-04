import Link from "next/link";
import * as Style from "./InfoBarStyle";

function InfoBar() {
  return (
    <Style.InfoContainer>
      <Style.TitleName>room</Style.TitleName>
      <Style.TitleName>
        <Link href={`/`}>
          <button>나가기</button>
        </Link>
      </Style.TitleName>
    </Style.InfoContainer>
  );
}

export default InfoBar;
