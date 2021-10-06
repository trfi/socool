/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";


const Table = ({ data }) => {
  console.log(data);
  return (
    <div className="w-full flex justify-center mx-auto">
        <div className="w-full">
          <div className="border-b border-gray-200 rounded-lg shadow">
            <table className="table-auto w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-2 text-xs text-gray-500">Token</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Symbol</th>
                  <th className="px-6 py-2 text-xs text-gray-500">Balance</th>
                </tr>
              </thead>
              <tbody className="bg-white">

                {
                  data.map((token, idx) => (
                    <tr className="whitespace-nowrap" key={idx}>
                      <td className="px-6 py-4 text-sm text-gray-500">{token.name}</td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">{token.symbol}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-500">{token.balance/10**18}</div>
                      </td>
                    </tr>
                  ))
                }
              
              </tbody>
            </table>
          </div>
        </div>
    </div>
  );
};

export default Table
