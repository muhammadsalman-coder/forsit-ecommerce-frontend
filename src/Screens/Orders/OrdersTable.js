import { Box } from "@mui/material"
import { DataGrid } from "@mui/x-data-grid"
import React from "react"

const OrdersTable = ({
  rows = [],
  columns,
  pageSize,
  onRowClick,
  onCellClick,
  page,
  onPageChange,
  rowCount
}) => {
  //   columns = columns?.map((column) => ({
  //     ...(column.type !== "actions" && { flex: 1 }),
  //     ...column,
  //     renderHeader: () => <strong>{column.headerName}</strong>
  //   }))

  const defaultPageSize = 25
  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        getRowHeight={() => null}
        rows={rows}
        columns={columns}
        pageSize={pageSize || defaultPageSize}
        rowsPerPageOptions={[pageSize || defaultPageSize]}
        onRowClick={onRowClick}
        onCellClick={onCellClick}
        scrollbarSize={2}
        disableColumnFilter
        disableColumnMenu
        disableSelectionOnClick
        autoHeight
        density="comfortable"
        sx={{ padding: 2, border: "none" }}
        page={page}
        onPageChange={onPageChange}
        rowCount={rowCount}
        paginationMode="server"
        hideFooterPagination={page === undefined}
      />
    </Box>
  )
}

export default OrdersTable
