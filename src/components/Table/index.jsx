import React from "react";
import '../../../App.css'
import { useGlobalFilter, usePagination, useSortBy, useTable} from "react-table";
import { useSearchContext } from "../../contextApi/SearchContext";

const ReactTable = ({
  columns,
  data = [],
  rowClass = "",
  rowDataClass = "",
  headerClass = "",
  tableBodyClass = "",
  tableClass = ""
}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    headerProps,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviouPage,
    pageOptions,
    setPageSize,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {pageIndex, pageSize} = state
  const { searchInput } = useSearchContext();

  React.useEffect(() => {
    setGlobalFilter(searchInput.toLowerCase() || undefined);
  }, [searchInput, setGlobalFilter]);

  return (
    <>
      <div className="overflow-y-auto w-[97%] mx-auto">
        <table
          {...getTableProps()}
          
          className={tableClass}
        >
          <thead {...headerProps} style={{backgroundColor:"", marginBottom:'30px'}} className="sticky top-0 ">
            {headerGroups.map((headerGroup) => (
              <tr
              
                className={headerClass}
                key={headerGroup.id}
                {...headerGroup.getHeaderGroupProps()}
              >
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    <span style={{fontSize:"2px"}}>
                      {column.isSorted ? (column.isSortedDesc ? ">" : "<" ):"" }
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} className={tableBodyClass} style={{backgroundColor:"transparent"}}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr className={rowClass} key={row.id} {...row.getRowProps() }
                  style={{ borderCollapse: "separate", borderSpacing: " 0 1rem", padding:'35px 0', backgroundColor:'#fff' }}
                >
                  {row.cells.map((cell) => {
                    return (
                      <td 
                        key={cell.id}
                        className={rowDataClass}
                        {...cell.getCellProps()}
                        // style={{fontSize:'2px'}}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="cursor-pointer flex justify-end md:hidden">
        <span className="mr-4 mt-2">
          {" "}
            <strong>
             page {pageIndex + 1} of {pageOptions.length}
             <input type="number" defaultValue={pageIndex + 1} 
              onChange={ e => {
                const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
                gotoPage(pageNumber)
              }}
              style={{width:"50px"}}
             />
            </strong>
        </span>
        <select value={pageSize} onChange={e=>setPageSize(Number(e.target.value))}>
              {
                [5,10,14,16].map(pageSize=>(
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))
              }
        </select>
        <span>
          | Go to page: {' '}
        </span>
        <button onClick={()=>gotoPage(0)} disabled={!canPreviouPage}>{"<<"} </button>
        <button className={`cursor-pointer  first-letter:flex-2 bg-black-900 text-[#fff] p-2 ${!canPreviouPage ? "bg-red" :"bg-black"} mr-3 rounded-lg`} onClick={()=> previousPage()} disabled={!canPreviouPage}>prev</button>
        <button className={`cursor-pointer flex-2 bg-black-900 text-[#fff] p-2 rounded-lg ${!canNextPage ? "bg-red" :"bg-black"}`} onClick={()=> nextPage()} disabled={!canNextPage}>next</button>
        <button onClick={()=>gotoPage(pageCount - 1)} disabled={!canNextPage}>{""}{">>"} </button>
      </div>

    </>
  );
};

export { ReactTable };
