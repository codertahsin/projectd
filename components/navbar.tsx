import React from "react";

export default function navbar() {
  return (
    <>
      <div className="navbar bg-base-300 rounded-box">
        <div className="flex-1 px-2 lg:flex-none">
          <a className="text-lg font-bold">Dashboard</a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <a className="btn btn-ghost rounded-btn">Home</a>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn">
                Recharge
              </label>
              <ul
                tabIndex={0}
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
                <li>
                  <a>Withdrawal</a>
                </li>
                <li>
                  <a>Deposit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
