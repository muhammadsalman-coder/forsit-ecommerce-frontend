import { Toolbar, Typography } from "@mui/material"
import React from "react"
import OrdersTable from "./OrdersTable"
import { useNavigate } from "react-router-dom"
import OrderChip from "./OrderChip"
import { getDateAndTime } from "../../utils/DateHelper"

export const getDisplayPrice = (price) => {
  let priceText = ""
  if (price === 0) priceText = "USD. 0"
  priceText =
    parseInt(price) === 0 ? "N/A" : "USD. " + Math.round(price).toLocaleString()
  return <Typography>{priceText}</Typography>
}

const renderProductCount = (rowData) => {
  console.log("rowData", rowData)
  return <Typography> {rowData?.orderedProduct?.length}</Typography>
}

const order = [
  {
    id: "234i328748234",
    orderNumber: "13123-ASDFA",
    createdAt: "2016-05-18T16:00:00Z",
    totalAmount: 950,
    orderStatus: "Received",
    orderedProduct: [
      {
        productId: "12312312312",
        quantity: 1,
        price: 910,
        name: "sdfasf"
      }
    ]
  }
]
const Orders = () => {
  const navigate = useNavigate()
  const openOrderDetailsPage = (rowParams) => {
    navigate(`/orders/${rowParams.id}`)
  }
  const columns = [
    {
      field: "orderNumber",
      headerName: "Order #",
      sortable: false,
      flex: 1
    },
    {
      field: "orderStatus",
      headerName: "Status",
      type: "actions",
      width: 150,
      getActions: (params) => [<OrderChip status={params.row.orderStatus} />]
    },
    {
      field: "date",
      headerName: "Date",
      sortable: false,
      valueGetter: (params) => getDateAndTime(params?.row?.createdAt),
      cellStyle: {
        textAlign: "center"
      },
      flex: 1
    },
    {
      field: "products",
      headerName: "Products",
      type: "actions",
      flex: 1,
      sortable: false,
      getActions: (params) => [renderProductCount(params?.row)]
    },
    {
      field: "totalAmount",
      headerName: "Total Amount",
      flex: 1,
      type: "actions",
      getActions: (params) => [getDisplayPrice(params.row.totalAmount)]
    },

    {
      field: "deliveryDetails",
      headerName: "Address",
      flex: 1,
      sortable: false,
      valueGetter: (params) => "online",
      cellStyle: {
        textAlign: "center"
      }
    }
  ]
  return (
    <>
      <Toolbar>
        <Typography variant="h2" color="gray" fontWeight={600}>
          Orders
        </Typography>
      </Toolbar>
      <OrdersTable
        columns={columns}
        rows={order}
        onCellClick={openOrderDetailsPage}
      />
    </>
  )
}

export default Orders
