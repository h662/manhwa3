"use client";

import { FC } from "react";

import { useAppDispatch, useAppState } from "@/lib/AppContext";
import { ethereum } from "@/lib/web3.config";

const Header: FC = () => {
  const { account } = useAppState();
  const dispatch = useAppDispatch();

  const setAccount = (account: string) =>
    dispatch({ type: "SET_ACCOUNT", account });

  const onClickLogIn = async () => {
    try {
      const accounts: any = await ethereum?.request({
        method: "eth_requestAccounts",
        params: [],
      });

      setAccount(accounts[0]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="flex justify-between items-end pt-4">
      <div className="font-black text-6xl">MANHWA 3.0</div>
      {account ? (
        <div>
          Welcome!
          <button className="ml-2">
            {account.substring(0, 4)}...{account.substring(account.length - 4)}
          </button>
        </div>
      ) : (
        // 메타마스크 로고(여우) 아이콘으로 교체
        <button onClick={onClickLogIn}>MetamaskLogIn</button>
      )}
    </header>
  );
};

export default Header;
