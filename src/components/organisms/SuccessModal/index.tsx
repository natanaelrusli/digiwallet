import React from 'react'
import './index.scss'

import IconSuccess from '../../../assets/Icon Success.png'
import { Button } from '../../atoms'
import { formatCurrency } from '../../../helpers/formatter'

type ModalProps = {
  showModal: boolean
  title?: string
  amount?: number
  transactionId?: number
  from?: number
  to?: number
  description?: string
  onClose?: () => void
}

const index = ({
  showModal,
  title,
  amount,
  transactionId,
  from,
  to,
  description,
  onClose
}: ModalProps) => {

  return (
    <>
      {
        showModal &&
        <div className='success-modal-overlay'>
          <div className='success-modal'>
            <img src={IconSuccess} alt="" />
            <div className='success-modal__title'>
              { title }
            </div>

            <div className="success-modal__detail">
              <div className="success-modal__detail__left">
                Amount
              </div>
              <div className="success-modal__detail__right bold">
                {
                  amount && amount.toLocaleString().length > 10 ? 
                  <>
                    { formatCurrency(amount).slice(0, 17) } ...
                  </>
                  :
                    formatCurrency(amount)
                }
              </div>
            </div>

            <div className="success-modal__detail">
              <div className="success-modal__detail__left">
                Transaction ID
              </div>
              <div className="success-modal__detail__right">
                { transactionId }
              </div>
            </div>

            <div className="success-modal__detail">
              <div className="success-modal__detail__left">
                From
              </div>
              <div className="success-modal__detail__right">
                { from }
              </div>
            </div>

            <div className="success-modal__detail">
              <div className="success-modal__detail__left">
                To
              </div>
              <div className="success-modal__detail__right">
                { to }
              </div>
            </div>

            <div className="success-modal__detail">
              <div className="success-modal__detail__left">
                Description
              </div>
              <div className="success-modal__detail__right">
                { description }
              </div>
            </div>

            <div className="success-modal__button">
              <Button 
                label='Print'
                size='small'
                onClick={onClose}
              />
              <Button 
                label='Close'
                size='small'
                onClick={onClose}
              />
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default index