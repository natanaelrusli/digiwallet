import React from 'react'

import './index.scss'
import { Transactions } from '../../pages/Home';
import { formatCurrency, formatDate } from '../../../helpers/formatter';

export type ColumnDefinitionType<T, K extends keyof T> = {
  key: K;
  header: string;
  width?: number;
}

type TableProps = {
  data: Transactions[];
  columns: Array<string>
}

const index = ({
  data,
  columns
}: TableProps) => {

  return (
    <div className='data-table-wrapper'>
      <table className='data-table'>
        <thead>
          <tr>
            {
              columns.map((col) => (
                <th key={col}>
                  {col}
                </th>
              ))
            }
          </tr>
        </thead>

        <tbody>
          {
            data.map((row, index) => (
              <tr key={index}>
                <td>{formatDate(row.date)}</td>
                <td>
                  {
                    row.source_of_fund ? 'CREDIT' : 'DEBIT'
                  }
                </td>
                <td>{formatCurrency(row.amount)}</td>
                <td>{row.description}</td>
                <td>{row.source_of_fund ? row.source_of_fund : row.to}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default index