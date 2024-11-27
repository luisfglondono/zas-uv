import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";
import React from "react";

import MainContainer from "../../components/profilePage/MainContainer";

type Props = {};

function ProfilePage({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Head>
        <title>Zas Univalle</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/header.png" />
      </Head>

      <MainContainer />
    </motion.div>
  );
}

export default ProfilePage;
