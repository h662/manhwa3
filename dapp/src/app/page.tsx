"use client";

import { useAppState } from "@/lib/AppContext";
import axios from "axios";
import { NextPage } from "next";

const Home: NextPage = () => {
  // const onClickDeploy = async () => {
  //   try {
  //     const contract = new web3.eth.Contract(MINT_NFT_ABI);

  //     const response = await contract
  //       .deploy({
  //         data: MINT_NFT_BYTECODE,
  //         arguments: ["ManHwaNFT", "MH"],
  //       })
  //       .send({
  //         from: account,
  //       });

  //     // response의 컨트랙트 주소를 디비에 기록한다.
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const { account } = useAppState();

  const onClickRegist = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/user`,
        {
          account,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="mt-8">
      <div className="flex flex-col itesm-center">
        <div className="text-center">지금 바로 NFT 만화 작가로 데뷔하세요!</div>
        <button className="mt-2" onClick={onClickRegist}>
          등록하기
        </button>
      </div>
    </main>
  );
};

export default Home;
