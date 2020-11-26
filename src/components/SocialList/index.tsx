import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";

import config from "../../lib/config";

import * as S from "./styles";

const SocialList: React.FC = () => {
  return (
    <S.Container>
      <Link href={`https://www.instagram.com/${config.instagram_account}`}>
        <a title="Instagram" target="_blank" rel="noopener">
          <FaInstagram size={30} />
        </a>
      </Link>

      <Link href={`https://br.pinterest.com/${config.pinterest_account}`}>
        <a title="Instagram" target="_blank" rel="noopener">
          <FaPinterest size={30} />
        </a>
      </Link>

      <Link
        href={`https://api.whatsapp.com/send?phone=55${config.phone_number.replace(
          /[^A-Z0-9]+/gi,
          ""
        )}`}
      >
        <a title="WhatsApp" target="_blank" rel="noopener">
          <FaWhatsapp size={30} />
        </a>
      </Link>

      <Link href={`mailto:${config.mail_account}`}>
        <a title="E-mail" target="_blank" rel="noopener">
          <FaEnvelope size={30} />
        </a>
      </Link>
    </S.Container>
  );
};

export default SocialList;
