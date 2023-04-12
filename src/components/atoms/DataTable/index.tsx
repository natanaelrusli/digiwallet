import React from 'react'

import './index.scss'
import { Transactions } from '../../pages/Home';

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
}

type TableProps<T, K extends keyof T> = {
  data: Transactions[];
  columns: Array<ColumnDefinitionType<T,K>>
}

const index = <T, K extends keyof T>({
  data,
  columns
}: TableProps<T, K>) => {

  return (
    <div className='data-table-wrapper'>
      <table className='data-table'>
        <thead>
          <tr>
            {
              columns.map((col) => (
                <th key={col.header}>
                  {col.header}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            data.map((row, index) => (
              <tr key={index}>
                <td>{row.date}</td>
                <td>{row.amount}</td>
                <td>{row.description}</td>
                <td>{row.from}</td>
                <td>{row.to}</td>
                <td>{row.source_of_fund}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default index