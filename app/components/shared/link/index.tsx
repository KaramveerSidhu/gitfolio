"use client";

import NextLink from "next/link";
import Icon from "@components/ui/Icon";
import { useState, useEffect } from "react";

type LinkProps = {
  url: string;
};

const Link = (props: LinkProps) => {
  const { url } = props;

  const [showLink, setShowLink] = useState<boolean>(false);

  useEffect(() => {
    !showLink && setShowLink(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return showLink ? (
    <NextLink href={url} target="_blank" rel="noopener noreferrer">
      <Icon url="external" title="Hosted App" />
    </NextLink>
  ) : null;
};

export default Link;
