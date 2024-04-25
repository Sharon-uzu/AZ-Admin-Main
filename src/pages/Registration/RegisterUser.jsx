import React from "react";
import {tableColumnUser} from "../../components/TableData/RegisterColumns"
import { ReactTable } from "../../components";


const RegisterRider = () => {
  const TableData = React.useRef([
    {
      name: "Dennis emma",
      address: "22 old aba road , market junction......",
      contact: "08109830911",
      status: "view",
    },
    {
      name: "ruth anga",
      address: "rumuola road off aba xpress way",
      contact: "090155900132",
      status: "view",
    },
    {
      name: "sharon  edu",
      address: "woji estate off alcon road elijiji",
      contact: "08030679668",
      status: "view",
    },
    {
      name: "kill bill ",
      address: "22 old aba road , market junction......",
      contact: "090155900132",
      status: "view",
    },
  ]).current


  
  const COLUMNS = React.useMemo(() => tableColumnUser,[])

  return (
    <>
      <div className="reg-table w-[100%] px-2">
        <ReactTable
          columns={COLUMNS}
          data={TableData}
          rowClass={"shadow-md shadow-gray-400 rounded-xl h-[3rem]"}
          headerClass={"bg-gray-100_01 shadow-md"}
          rowDataClass={""}
        />
      </div>
    </>
  );
};

export default RegisterRider;
